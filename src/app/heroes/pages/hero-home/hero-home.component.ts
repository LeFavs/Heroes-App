import { Component,  } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.css']
})
export class HeroHomeComponent {

  // auth!: Auth; //undefined
  
  get auth (){
    return this.authService.auth;
  }

  constructor( private router: Router,
               private authService: AuthService) { }

  logout(){
    localStorage.clear();
    this.router.navigate(['./auth/login']);
  }

}
