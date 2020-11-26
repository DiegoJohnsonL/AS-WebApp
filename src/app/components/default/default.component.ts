import { Component, OnInit } from '@angular/core';
import {SessionUser} from '../../models/session-user.model';
import {UserStorageService} from '../../services/user-storage.service';
import { Router } from '@angular/router';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  public user: SessionUser;
  public query: string;
  public restaurants: Array<Restaurant>;
  public access: boolean = false;

  constructor(
    private userStorageService: UserStorageService,
    private restaurantService: RestaurantService,
    private router: Router
  ) { 
    if (userStorageService.type === "administracion"){
      this.access = true;
    }
    this.loadData();
  }

  ngOnInit(): void {
    this.user = this.userStorageService.user;
  }

  loadData() {
    this.restaurantService.getRestaurants()
      .subscribe(data => {
        this.restaurants = [...data.body.content]
      });
  }

  onSubmit(): void {
    const self = this;

    self.router.navigate(['/search'], { queryParams: { query: self.query } });
  }
}


