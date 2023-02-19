export interface Environment {
    production: boolean,
  contactEmail: string,
  hCaptcha: {
    secret: string,
    sitekey: string
  }
  smtp: {
    url: string,
    username: string,
    password: string
  },
  mongo: {
    connection: string,
    dbName: string
  }
  api: {
    twitch: {
      clientId: string,
      secret: string
    },
    twitter: {
      apiKey: string,
      secret: string,
      bearerToken: string
    },
    youtube: {
      apiKey: string;
      clientId: string;
      secret: string;
    }
    instagram: {
      rapidApiKey: string;
      rapidApiHost: string;
    },
    tiktok: {
      rapidApiKey: string;
      rapidApiHost: string;
    }
  }
}
