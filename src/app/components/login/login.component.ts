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
  public register:boolean=false;
  public validRegister:boolean=false;

  constructor(
    private identityService: IdentityService,
    private userStorageService: UserStorageService,
    private router: Router
  ) { 
    this.register = false;
  }
  ngOnInit():void{

  }
  
  changeTypeOfForm(type: boolean):void {
    this.register = type;
  }

  onSubmit(): void {
    let self = this;
    
    if (this.register){
      this.identityService
      .signUp(this.model)
      .subscribe({
        next(data) {
          self.invalid = false;
          console.log(data['body'], "DDD!!");
          self.user = data['body']
          console.log(self.user);
          self.register = false;
          self.validRegister = true;
          console.log("Vuenas")
        },
        error() {
          self.invalid = true;
        }
      });
    } else {
      this.identityService
      .signIn(this.model)
      .subscribe({
        next(data) {
          self.invalid = false;
          console.log(data, "!!!");
          self.user = data['body']
          self.user.type = self.model.type;
          self.userStorageService.set(self.user);
          self.router.navigate(['/']);
        },
        error() {

          self.invalid = true;
        }
      });
    }
  }
}
