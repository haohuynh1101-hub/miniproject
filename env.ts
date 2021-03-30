import { envs } from './env.config';

const envGlobal = (): ENVIRONMENT | NodeJS.ProcessEnv => {
  if (process.browser) {
    return window.__ENV__;
  }

  return process.env;
};

export type ENV = {
  [key: string]: string;
};

export default envGlobal;
export const createEnvsFromList = (): ENV => {
  const env = {};
  envs.forEach((envKey) => {
    env[envKey] = envGlobal()[envKey];
  });

  return env;
};
