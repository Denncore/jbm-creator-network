export interface Environment {
    production: boolean,
    api: {
      twitch: {
        clientId: string,
        secret: string
      }
    }
}