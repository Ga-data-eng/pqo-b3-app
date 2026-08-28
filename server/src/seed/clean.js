// Remove o arquivo SQLite de conteúdo antes de rodar o seed, para que
// "npm run seed" seja sempre idempotente (o run.js só faz INSERT, sem
// upsert — rodar duas vezes sobre o mesmo arquivo duplicaria tudo).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, '..', '..', 'data', 'pqo.db');

for (const suffix of ['', '-shm', '-wal']) {
  const file = DB_PATH + suffix;
  if (fs.existsSync(file)) fs.rmSync(file);
}
