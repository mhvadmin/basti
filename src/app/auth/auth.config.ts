import {ENV} from "./../core/env.config"

interface AuthConfig{
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'X77RT8BVwdkeBkNyE0NTHCws2nER55IY',
    CLIENT_DOMAIN: 'myhomevihanga.auth0.com',
    AUDIENCE: 'http://localhost:8083/api/', // likely http://localhost:8083/api/
    REDIRECT: `${ENV.BASE_URI}/callback`,
    SCOPE: 'openid profile'
  };