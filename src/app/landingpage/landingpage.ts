import { Component } from '@angular/core';
import {ProfileModel} from './profile-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss'
})
export class Landingpage {
  profile: ProfileModel | undefined = {name: 'Danilo', email: 'danilo@hotmail.com'};

  constructor(private router: Router) {}

  navegar(){
    this.router.navigate(['/paginas/galerias']);
  }

  logarComGoogle(){

  }

  isLoggedIn(){
    return !!this.profile;
  }
}
