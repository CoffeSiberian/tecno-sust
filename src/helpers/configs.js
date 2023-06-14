import JsonConfigs from "../config.json";

export const TITLE = process.env.REACT_APP_TITLE
export const REST_API_URL = process.env.REACT_APP_REST_API_URL;

export const PARTNERS = JsonConfigs.partners;
export const CAPTCHA_KEY = process.env.REACT_APP_CAPTCHA_KEY;

export const PROXY_CORS_REST_API_URL = process.env.REACT_APP_REST_API_URL;
export const PROXY_CORS_REST_API_PASS = process.env.REACT_APP_REST_API_PASS;