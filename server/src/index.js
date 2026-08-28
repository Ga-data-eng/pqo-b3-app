import express from 'express';
import cors from 'cors';
import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { initSchema } from './db/index.js';
import { pgPool } from './db/pg.js';
import { initPgSchema } from './db/initPg.js';

import { router as meta } from './routes/meta.js';
import { router as auth } from './routes/auth.js';
import { router as users } from './routes/users.js';
import { router as questions } from './routes/questions.js';
import { router as sessionsRouter } from './routes/sessions.js';
import { router as simulations } from './routes/simulations.js';
import { router as dashboard } from './routes/dashboard.js';
import { router as review } from './routes/review.js';
import { router as flashcards } from './routes/flashcards.js';
import { router as achievements } from './routes/achievements.js';
import { router as search } from './routes/search.js';
import { router as tutor } from './routes/tutor.js';
import { router as admin } from './routes/admin.js';
import { router as missions } from './routes/missions.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, '..', 'data', 'pqo.db');

if (!fs.existsSync(DB_PATH)) {
  console.log('Banco de dados não encontrado — execute "npm run seed" antes de iniciar o servidor.');
}
initSchema();

const PgSession = connectPgSimple(session);

async function start() {
  await initPgSchema();
  console.log('Schema do PostgreSQL verificado/criado.');

  const app = express();
  const isProduction = process.env.NODE_ENV === 'production';

  // Necessário no Render (e em qualquer host atrás de proxy/load balancer) para
  // que express-session detecte corretamente HTTPS e emita o cookie "secure".
  if (isProduction) app.set('trust proxy', 1);

  // Em dev, o frontend roda em outra porta (Vite, :5173) e usa o proxy do
  // Vite para /api — ainda assim configuramos CORS para permitir chamadas
  // diretas nesse cenário. Em produção, o próprio Express serve o frontend
  // (build estático), então tudo fica no mesmo domínio e o CORS nem entra
  // em jogo — cookie 'lax' funciona normalmente (same-site).
  app.use(cors({ origin: process.env.WEB_ORIGIN || 'http://localhost:5173', credentials: true }));
  app.use(express.json());
  app.use(
    session({
      store: new PgSession({ pool: pgPool, tableName: 'session', createTableIfMissing: true }),
      name: 'pqo.sid',
      secret: process.env.SESSION_SECRET || 'dev-secret-troque-em-producao',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        sameSite: 'lax',
        secure: isProduction,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 dias
      },
    })
  );

  app.use('/api/meta', meta);
  app.use('/api/auth', auth);
  app.use('/api/users', users);
  app.use('/api/questions', questions);
  app.use('/api/sessions', sessionsRouter);
  app.use('/api/simulations', simulations);
  app.use('/api/dashboard', dashboard);
  app.use('/api/review', review);
  app.use('/api/flashcards', flashcards);
  app.use('/api/achievements', achievements);
  app.use('/api/search', search);
  app.use('/api/tutor', tutor);
  app.use('/api/admin', admin);
  app.use('/api/missions', missions);

  app.get('/api/health', (req, res) => res.json({ ok: true }));

  // Serve o build do frontend (web/dist) a partir do próprio backend, para
  // que tudo rode em um único serviço/domínio (sem CORS, sem cookie
  // cross-site). O build precisa existir antes de iniciar o servidor — veja
  // o Build Command do deploy (roda "npm run build" na raiz do repositório).
  const webDistPath = path.join(__dirname, '..', '..', 'web', 'dist');
  if (fs.existsSync(webDistPath)) {
    app.use(express.static(webDistPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(webDistPath, 'index.html'));
    });
  } else {
    console.log('web/dist não encontrado — frontend não será servido por este processo (rode "npm run build" na raiz, ou use "npm run dev" para desenvolvimento).');
  }

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`PQO B3 server rodando em http://localhost:${PORT}`));
}

start().catch((err) => {
  console.error('Falha ao iniciar servidor:', err);
  process.exit(1);
});
