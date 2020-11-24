import { Component, OnInit } from '@angular/core';
import {SessionUser} from '../../models/session-user.model';
import {UserStorageService} from '../../services/user-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  public user: SessionUser;
  public query: string;

  constructor(
    private userStorageService: UserStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user=this.userStorageService.user;
  }

  onSubmit(): void {
    const self = this;

    self.router.navigate(['/search'], { queryParams: { query: self.query } });
  }
}


