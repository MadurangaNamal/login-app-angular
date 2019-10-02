import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/auth/auth.service';

@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.css']
})
export class SigninSignupComponent implements OnInit {

  email: string;
  password: string;
  constructor( public authservice: AuthService) { }

  ngOnInit() {
  }
  signInorSignUp() {
    this.authservice.signInorSignUp(this.email, this.password);

    /*this.signInMode ? this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password)
                    : this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.password);*/
  }
}
