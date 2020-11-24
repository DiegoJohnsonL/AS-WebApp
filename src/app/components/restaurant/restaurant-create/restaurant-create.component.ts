import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../../models/restaurant.model';
import {RestaurantService} from '../../../services/restaurant.service';
import { UserStorageService } from '../../../services/user-storage.service';

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.css']
})
export class RestaurantCreateComponent implements OnInit {
  public restaurant:Restaurant=new Restaurant();
  public loading:boolean=false;
  public acceso:boolean=false;

  constructor(
    private restaurantService:RestaurantService, 
    private userStorageService:UserStorageService
  ) {
    if (userStorageService.type === 'administracion'){
      this.acceso = true;
    }
  }

  ngOnInit(): void {
  }

  onSubmit():void{
   this.loading=true;
   this.restaurantService.create(this.restaurant)
     .subscribe(()=> {
       this.loading = false;
     });
  }
}
