import settings from '../app.json';

// DEVELOPMENT
const DEV = {
  APP: settings,
  API_CLIENT_HOST: '',
  API_CLIENT_SCHEMA: '',
  REQUEST_RETRY_COUNT: 10,
  PRODUCTION: false,
  DEBUG: true,
  BETA: true,
};

// PRODUCTION
const PROD = {
  APP: settings,
  API_CLIENT_HOST: '',
  API_CLIENT_SCHEMA: '',
  REQUEST_RETRY_COUNT: 10,
  PRODUCTION: true,
  DEBUG: false,
  BETA: false,
};

export const config = settings.env.toLowerCase() === 'dev' ? DEV : PROD;
