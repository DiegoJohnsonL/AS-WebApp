import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserStorageService } from '../../services/user-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public conectado : boolean;

  constructor(
    private userStorageService: UserStorageService,
    private router:Router
  ) {
    this.conectado = true;
  }

  ngOnInit(): void {

    this.userStorageService.isUserLoggedIn.subscribe(
      value => this.conectado = value
    )
  }

  signOut():void{
    this.userStorageService.destroy();
    this.router.navigate(['/login']);
  }

}
