import {inject, Injectable, signal} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {Router} from '@angular/router';
import {auth} from './auth.config';

@Injectable({
  providedIn: 'root'
})
export class Authgoogle {
  private oauthService: OAuthService = inject(OAuthService);
  private router: Router = inject(Router);
  profile = signal<any>(null);

  constructor() {
    this.initConfiguration();
  }

  initConfiguration(){
    this.oauthService.configure(auth);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if(this.oauthService.hasValidIdToken()){
        this.profile.set(this.oauthService.getIdentityClaims());
      }
    })
  }
  login(){
    this.oauthService.initImplicitFlow();
  }

  logout(){
    this.oauthService.revokeTokenAndLogout();
    this.oauthService.logOut();
    this.profile.set(null);
    this.router.navigate(['']);
  }
  getLoggedProfile(){
    return this.profile();
  }
}
