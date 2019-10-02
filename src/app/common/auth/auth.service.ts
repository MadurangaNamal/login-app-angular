import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

import {auth} from 'firebase';

import { from } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class AuthService {

  signInMode = false;
  phoneSignIn = false;

  constructor(private afAuth: AngularFireAuth ) { }

  private getProviderInstance(provider: string) {
    let providerInstance;

    switch (provider) {
      case environment.providers.GOOGLE:
        providerInstance = new auth.GoogleAuthProvider();
        break;
      case environment.providers.FACEBOOK:
        providerInstance = new auth.FacebookAuthProvider();
        break;
      default:
        providerInstance = new auth.GoogleAuthProvider();
        break;
    }
    return providerInstance;
  }

  signIn(mode: string, provider: string) {

      mode === environment.modes.POPUP ? this.afAuth.auth.signInWithPopup(this.getProviderInstance(provider))
      : this.afAuth.auth.signInWithRedirect(this.getProviderInstance(provider));
  }

  signInorSignUp(email , password) {

    this.signInMode ? this.afAuth.auth.signInWithEmailAndPassword(email, password)
                    : this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signInAnonymously() {

    this.afAuth.auth.signInAnonymously();
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
