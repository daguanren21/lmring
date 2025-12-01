import crypto from 'node:crypto';
import { env } from '@lmring/env';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16;
const TAG_LENGTH = 16;
const SALT_LENGTH = 64;

function getEncryptionKey(): Buffer {
  if (!env.ENCRYPTION_KEY) {
    throw new Error('ENCRYPTION_KEY is not defined in environment variables');
  }
  return Buffer.from(env.ENCRYPTION_KEY, 'hex');
}

export function encryptApiKey(apiKey: string): string {
  const key = getEncryptionKey();
  const iv = crypto.randomBytes(IV_LENGTH);
  const salt = crypto.randomBytes(SALT_LENGTH);

  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

  const encrypted = Buffer.concat([cipher.update(apiKey, 'utf8'), cipher.final()]);

  const tag = cipher.getAuthTag();

  const result = Buffer.concat([salt, iv, tag, encrypted]);

  return result.toString('base64');
}

export function decryptApiKey(encryptedData: string): string {
  const key = getEncryptionKey();
  const buffer = Buffer.from(encryptedData, 'base64');

  const _salt = buffer.subarray(0, SALT_LENGTH);
  const iv = buffer.subarray(SALT_LENGTH, SALT_LENGTH + IV_LENGTH);
  const tag = buffer.subarray(SALT_LENGTH + IV_LENGTH, SALT_LENGTH + IV_LENGTH + TAG_LENGTH);
  const encrypted = buffer.subarray(SALT_LENGTH + IV_LENGTH + TAG_LENGTH);

  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(tag);

  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);

  return decrypted.toString('utf8');
}

export function maskApiKey(apiKey: string): string {
  if (apiKey.length <= 8) {
    return '*'.repeat(apiKey.length);
  }

  const visibleStart = apiKey.slice(0, 4);
  const visibleEnd = apiKey.slice(-4);
  const maskedMiddle = '*'.repeat(Math.min(apiKey.length - 8, 20));

  return `${visibleStart}${maskedMiddle}${visibleEnd}`;
}
