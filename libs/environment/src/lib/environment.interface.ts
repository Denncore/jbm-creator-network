export interface Environment {
  production: boolean;
  name: string;
  baseUrlApi: string;
  hCaptcha: {
    siteKey: string;
    languageCode?: string;
  }
}
