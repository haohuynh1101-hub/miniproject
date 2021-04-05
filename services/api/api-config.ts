// Use this import if you want to use "env.js" file
/**
 * The options used to configure the API.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string;

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number;
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: `https://pyramid.talaria.technology/api`,
  timeout: 30000,
};

export const DEFAULT_AUTH_API_CONFIG: ApiConfig = {
  url: `https://pyramid.talaria.technology/api`,
  timeout: 30000,
};
