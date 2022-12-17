export interface Environment {
  production: boolean;
  name: string;
  hCaptcha: {
    siteKey: string;
    secret: string;
    languageCode?: string;
  };
}
