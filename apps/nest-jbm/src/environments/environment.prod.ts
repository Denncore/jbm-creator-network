import { Environment } from './environment.interface';

export const environment: Environment = {
  production: true,
  api: {
    twitch: {
      clientId: '',
      secret: '',
    },
    twitter: {
      apiKey: '',
      secret: '',
      bearerToken: '',
    },
  },
};
