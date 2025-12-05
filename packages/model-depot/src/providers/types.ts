/**
 * Provider type classification
 */
export type ProviderType = 'official' | 'compatible' | 'custom';

/**
 * Provider capability flags
 */
export interface ProviderCapabilities {
  supportsStreaming?: boolean;
  supportsStructuredOutput?: boolean;
  supportsVision?: boolean;
  supportsFunctionCalling?: boolean;
}

/**
 * Static provider metadata (no runtime configuration like baseURL)
 */
export interface ProviderMetadata extends ProviderCapabilities {
  id: string;
  name: string;
  description?: string;
  type: ProviderType;
}
