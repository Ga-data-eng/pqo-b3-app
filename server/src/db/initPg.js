import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pgPool } from './pg.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function initPgSchema() {
  const schema = fs.readFileSync(path.join(__dirname, 'schema.postgres.sql'), 'utf-8');
  await pgPool.query(schema);
}
