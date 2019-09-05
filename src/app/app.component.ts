import { Component, OnInit } from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';

import { auth } from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  email:string;
  password:string;
  signInMode: boolean= false;
  phoneNumber:string;
  otp:string;
  phoneSignIn:boolean= false;
  constructor(public afAuth:AngularFireAuth){}

  ngOnInit(){
    this.afAuth.authState.subscribe((user) => console.log(user));

  }

  googleSignInViaPopup(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then((userCredentials) => console.log(userCredentials));
  }

  googleSignInViaRedirect(){
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider())
    .then((userCredentials) => console.log(userCredentials));
  }
  facebookSignInViaPopup(){
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
    .then((userCredentials) => console.log(userCredentials));
  }

  facebookSignInViaRedirect(){
    this.afAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider())
    .then((userCredentials) => console.log(userCredentials));
  }

  signInAnonymously(){
    this.afAuth.auth.signInAnonymously()
    .then((userCredentials) => console.log(userCredentials));
  }

  signUp(){

    this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.password)
    .then((userCredentials) => console.log(userCredentials));
  }

  signIn(){
  this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password)
  .then((userCredentials) => console.log(userCredentials));
  }

  signInorSignUp(){

    this.signInMode ? this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password)
                    : this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.password);
  }
  toggleSigninMode(){

    this.signInMode = !this.signInMode;
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  togglePhoneSignIn(){

    this.phoneSignIn = !this.phoneSignIn;
  }
}

