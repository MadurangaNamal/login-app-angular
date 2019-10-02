import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/auth/auth.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-login-options',
  templateUrl: './login-options.component.html',
  styleUrls: ['./login-options.component.css']
})
export class LoginOptionsComponent implements OnInit {
  providers = environment.providers;
  modes = environment.modes;
  constructor(
    public authservice: AuthService) { }

  ngOnInit() {
  }
  signInwithModeandProvider(mode: string, provider: string) {
    this.authservice.signIn(mode, provider);
  }
  signInAnonymously() {
    this.authservice.signInAnonymously();

  }
  toggleSigninMode() {

    this.authservice.signInMode = !this.authservice.signInMode;
  }
  togglePhoneSignIn() {
    this.authservice.phoneSignIn = ! this.authservice.phoneSignIn;
  }
}
