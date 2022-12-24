import { Environment } from './environment.interface';

export const environment: Environment = {
  production: true,
  contactEmail: '',
  hCaptcha: {
    secret: '',
    sitekey: ''
  },
  smtp: {
    url: '',
    username: '',
    password: '',
  },
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
    youtube: {
      apiKey: '',
      clientId: '',
      secret: '',
    },
  },
};
