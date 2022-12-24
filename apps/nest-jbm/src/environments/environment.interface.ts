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
    }
}