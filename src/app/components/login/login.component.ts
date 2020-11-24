import { Component, OnInit } from '@angular/core';
import {Login} from '../../models/login.model';
import {SessionUser} from '../../models/session-user.model';
import {IdentityService} from '../../services/identity.service';
import {Router} from '@angular/router';
import {UserStorageService} from '../../services/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public model: Login=new Login();
  public invalid:boolean;
  public user = new SessionUser()
  public register:boolean=true;

  constructor(
    private identityService: IdentityService,
    private userStorageService: UserStorageService,
    private router: Router
  ) { 
    this.register = true;
  }

  algoMas():void {
    this.register = false;
  }

  onSubmit(): void {
    let self = this;

    self.user.username = self.model.username;
    self.user.name = self.model.name;
    self.user.type = self.model.type;
    self.user.id = 0;

    
    self.router.navigate(['/']);
    self.userStorageService.set({user: self.user});
    /*this.identityService
      .signIn(this.model)
      .subscribe({
        next(data) {
          //console.log(data['body']);
          self.userStorageService.set(data['body']);
          self.router.navigate(['/']);
        },
        error() {
          self.invalid = true;
        }
      });*/
  }
}
