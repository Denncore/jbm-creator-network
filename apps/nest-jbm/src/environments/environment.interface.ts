export interface Environment {
    production: boolean,
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