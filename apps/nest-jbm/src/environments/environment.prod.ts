import {Environment} from './environment.interface';

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
  mongo: {
    connection: '',
    dbName: ''
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
    instagram: {
      rapidApiKey: '',
      rapidApiHost: '',
      requestRateLimitPerMinute: 0
    }
  },
};
