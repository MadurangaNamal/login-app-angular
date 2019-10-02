import { Component, OnInit , AfterViewInit} from '@angular/core';
import { WindowService } from '../../common/window/window.service';
import { AngularFireAuth } from 'angularfire2/auth';
import {auth} from 'firebase';
import { AuthService } from 'src/app/common/auth/auth.service';

@Component({
  selector: 'app-phone-signin',
  templateUrl: './phone-signin.component.html',
  styleUrls: ['./phone-signin.component.css']
})
export class PhoneSigninComponent implements OnInit, AfterViewInit {
  phoneNumber: string;
  otp: string;
  windowRef: any;
  disableotpsendbtn = true;

  constructor( private windowService: WindowService,
               private afAuth: AngularFireAuth,
               private authservice: AuthService) { }

  ngOnInit() {
    this.windowRef = this.windowService.windowRef;
  }
  ngAfterViewInit() {
    this.windowRef.recaptchaVerifier = new auth.RecaptchaVerifier('recaptcha-container',{
      size: 'normal',
      callback: (response) => {
        this.disableotpsendbtn = false;
      }
     });
    this.windowRef.recaptchaVerifier.render();
  }

  sendOTP() {
    this.afAuth.auth.signInWithPhoneNumber(this.phoneNumber, this.windowRef.recaptchaVerifier).then((confirmationResult) =>{
      this.windowRef.confirmationResult = confirmationResult;
    });
  }
  verifyPTP() {
    this.windowRef.confirmationResult.confirm(this.otp)
    .then((userCredentials) => console.log(userCredentials));
  }

  togglePhoneSignIn() {
    this.authservice.phoneSignIn = ! this.authservice.phoneSignIn;
  }
}
