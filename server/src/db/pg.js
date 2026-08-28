import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  console.warn('DATABASE_URL não definida — configure server/.env (veja server/.env.example).');
}

export const pgPool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes('sslmode=require') || process.env.PGSSL === 'true'
    ? { rejectUnauthorized: false }
    : undefined,
});

pgPool.on('error', (err) => {
  console.error('Erro inesperado no pool do Postgres:', err);
});
