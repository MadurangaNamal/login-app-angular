import { Component, OnInit} from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase';

import { WindowService } from './common/window/window.service';
import { AuthService } from './common/auth/auth.service';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  email: string;
  password: string;
  signInMode = false;

  windowRef: any;
  disableotpsendbtn = true;

  constructor(
    public afAuth: AngularFireAuth,
    public authservice: AuthService,
    private windowServise: WindowService
    ) {}

  ngOnInit() {
    this.windowRef = this.windowServise.windowRef;
  }
}

