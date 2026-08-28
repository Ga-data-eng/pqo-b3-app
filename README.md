# PQO B3 — Plataforma de Estudos

Aplicação de preparação gamificada para a certificação PQO (B3), construída a
partir do conteúdo do *Guia Por Dentro da B3*.

## Estrutura

- `server/` — API Node.js/Express. Dois bancos, cada um com uma responsabilidade:
  - **SQLite** (`better-sqlite3`, arquivo `server/data/pqo.db`) — conteúdo
    estático do Guia: questões, flashcards, capítulos, busca full-text.
  - **PostgreSQL** (`pg`) — usuários, login/sessão e todo o progresso gerado
    por eles: respostas, sessões de estudo, simulados, streak, XP, conquistas,
    revisão espaçada, missões diárias.
- `web/` — Frontend React + Vite
- `content/` — texto do Guia extraído (usado para autoria de questões e busca)

## Como rodar

### 1. Banco PostgreSQL

Crie um banco Postgres gratuito (ex.: [Neon](https://neon.tech) ou
[Supabase](https://supabase.com)) e copie a connection string. Depois:

```bash
cp server/.env.example server/.env
# edite server/.env e cole sua DATABASE_URL, troque SESSION_SECRET por um valor aleatório
```

O schema do Postgres (`server/src/db/schema.postgres.sql`) é criado/atualizado
automaticamente toda vez que o servidor sobe — não precisa rodar migração à mão.

### 2. Instalar e popular

```bash
npm run install:all   # instala dependências do backend e do frontend
npm run seed           # popula o banco de conteúdo SQLite (server/data/pqo.db)
npm run dev             # inicia backend (porta 4000) e frontend (porta 5173) juntos
```

Depois abra http://localhost:5173, crie uma conta e comece a estudar.

Para rodar cada parte separadamente:

```bash
npm run dev:server   # http://localhost:4000
npm run dev:web        # http://localhost:5173 (proxy /api -> 4000)
```

## Login e progresso do usuário

- Cadastro/login é feito por e-mail + senha (`POST /api/auth/register`,
  `POST /api/auth/login`), com sessão mantida por cookie HTTP-only
  (`express-session` + `connect-pg-simple`, tabela `session` criada
  automaticamente no Postgres).
- Todas as rotas que leem/gravam dado de usuário (`/api/questions`,
  `/api/sessions`, `/api/simulations`, `/api/dashboard`, `/api/review`,
  `/api/flashcards`, `/api/achievements`, `/api/missions`, `/api/users/me`)
  exigem sessão ativa (middleware `requireAuth` em
  `server/src/middleware/auth.js`) e usam `req.user` — não existe mais
  conceito de "usuário local único".
- Cada resposta de questão (`POST /api/sessions/:id/answer`), resultado de
  simulado e avaliação de flashcard grava no Postgres, atrelado ao
  `user_id` da sessão logada.

## Estado atual do banco de questões

**Todos os 8 títulos / 27 capítulos** do Guia estão com banco de questões e
flashcards totalmente autorados e validados a partir do texto original —
435 questões e 243 flashcards, com explicações completas (por que a
alternativa correta está certa e por que cada alternativa errada está
errada), "para a prova", "pegadinha de prova" e citação de fonte
(título/capítulo/seção/página) em cada questão. A estrutura dos 8 títulos
está modelada em `server/src/seed/structure.js`, incluindo o mapeamento de
quais capítulos se aplicam a cada certificação (Operações, Comercial,
Compliance, Risco, Back Office, Back Office Custódia, Back Office
Liquidação), extraído do Quadro de Orientação de Estudos do próprio Guia.

Para adicionar ou revisar questões de um capítulo:

1. Edite/crie `server/src/seed/questions/tituloX_capY.js` seguindo o formato
   de `titulo1_cap1.js` (mesma estrutura de `topics`, `questions`,
   `chapterRef`).
2. Registre o módulo em `server/src/seed/run.js` (`QUESTION_MODULES` e
   `FLASHCARD_MODULES`), se ainda não estiver.
3. Rode `npm run seed` novamente.

O texto completo do Guia (todas as 715 páginas) já está indexado para a
busca full-text (`Pesquisar no Guia B3`) e para o Professor PQO, mesmo para
capítulos que ainda não têm banco de questões formal.

## Professor PQO / IA Tutora

Esta instalação local não está conectada a um modelo de linguagem
generativo. O "Professor PQO" responde por meio de (1) um pequeno conjunto
de comparações curadas sobre pegadinhas clássicas (CMN x Bacen, Susep x
Previc etc.) e (2) busca full-text no texto do Guia. Para respostas
totalmente generativas, seria necessário conectar uma API de LLM (ex.: API
da Anthropic) ao endpoint `POST /api/tutor/ask`.
