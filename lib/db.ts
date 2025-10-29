import { sql } from '@vercel/postgres';

export interface DatabaseConfig {
  connectionString: string;
  ssl: boolean;
}

export const dbConfig: DatabaseConfig = {
  connectionString: process.env.POSTGRES_URL || '',
  ssl: process.env.NODE_ENV === 'production',
};

export { sql };
