import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  // migrations.path is optional — Prisma CLI will default to prisma/migrations
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: env('DATABASE_URL'),
    // shadowDatabaseUrl can go here if you use shadow DB
    // shadowDatabaseUrl: env('SHADOW_DATABASE_URL'),
  },
});
