import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './components/default/default.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {ProductCreateComponent} from './components/product/product-create/product-create.component';
import {ProductUpdateComponent} from './components/product/product-update/product-update.component';
import {SearchComponent} from './components/search/search.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path:'',component:DefaultComponent, canActivate: [AuthGuard] },
  {path:'search',component:SearchComponent, canActivate: [AuthGuard] },
  {
    path:'products',
    canActivate: [AuthGuard],
    children:[
      {path:'',component:ProductListComponent},
      {path:'create',component:ProductCreateComponent},
      {path:':id/update',component:ProductUpdateComponent}
    ]
  },
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
