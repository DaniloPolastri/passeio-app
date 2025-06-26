import { Component } from '@angular/core';
import {ProfileModel} from './profile-model';
import {Router} from '@angular/router';
import {Authgoogle} from '../authgoogle';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss'
})
export class Landingpage {
  profile: ProfileModel | undefined = {name: 'Danilo', email: 'danilo@hotmail.com'};

  constructor(private router: Router, private loginService: Authgoogle) {}

  navegar(){
    this.router.navigate(['/paginas/galerias']);
  }

  logarComGoogle(){
    this.loginService.login();
  }

  isLoggedIn(){
    const dadosGoogle = this.loginService.getLoggedProfile()
    console.log(dadosGoogle);
    this.profile = dadosGoogle;
    return !!this.profile;
  }
}
