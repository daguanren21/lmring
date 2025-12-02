// Export database instance
export { db } from './db';

// Export schema
export * from './schema';

// Export utilities
export { encrypt, decrypt } from './encryption';
export { createDbConnection } from './connection';
export { runMigrations } from './migration';
export { syncUserProviderIdFromAccount } from './utils';

export { and, asc, desc, eq, gt, gte, lt, lte, ne, or, sql } from 'drizzle-orm';
