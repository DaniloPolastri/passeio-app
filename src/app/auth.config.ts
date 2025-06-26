import {AuthConfig} from 'angular-oauth2-oidc';


export const auth: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.href,
  clientId: '844388918125-bddnvour7mv3alfpiq6cr4vbmhsc4svp.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false
}
