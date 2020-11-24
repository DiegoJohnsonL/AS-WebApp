import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './components/default/default.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {ProductCreateComponent} from './components/product/product-create/product-create.component';
import {ProductUpdateComponent} from './components/product/product-update/product-update.component';
import {SearchComponent} from './components/search/search.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {RestaurantComponent} from './components/restaurant/restaurant-list/restaurant.component';
import {RestaurantCreateComponent} from './components/restaurant/restaurant-create/restaurant-create.component';


const routes: Routes = [
  {path:'', component:DefaultComponent, canActivate: [AuthGuard],
  data:{
    roles: ['ROLE_ADMIN', 'ROLE_CLIENT'],
    } 
  },
  {path:'search',component:SearchComponent, canActivate: [AuthGuard],
  data:{
    roles: ['ROLE_ADMIN', 'ROLE_CLIENT'],
    } 
  },
  {
    path:'products',
    canActivate: [AuthGuard],
    children:[
      {path:'',component:ProductListComponent, data:{
        roles: ['ROLE_ADMIN', 'ROLE_CLIENT'],
        } },
      {path:'create',component:ProductCreateComponent, data:{
        roles: ['ROLE_ADMIN'],
        } },
      {path:':id/update',component:ProductUpdateComponent, data:{roles: ['ROLE_ADMIN']}}
    ]
  },
  {
    path:'restaurante',
    canActivate: [AuthGuard],
    children:[
      {path:'id/:id',component:RestaurantComponent, data:{roles: ['ROLE_ADMIN','ROLE_CLIENT']}},
      {path:'create',component:RestaurantCreateComponent, data:{roles: ['ROLE_ADMIN']}},
      {path:':id/update',component:ProductUpdateComponent, data:{roles: ['ROLE_ADMIN']}}
    ]
  },
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
