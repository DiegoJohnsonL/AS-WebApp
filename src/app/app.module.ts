import { BrowserModule } from '@angular/platform-browser';
import { NgModule,DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default/default.component';
import { HeaderComponent } from './shareds/header/header.component';
import { FooterComponent } from './shareds/footer/footer.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './components/product/product-list/product-filter.pipe';

// Culture
import localEsPe from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsPe);
// Interceptors
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UnauthorizedInterceptor } from './interceptors/unauthorized.interceptor';
import { SearchComponent } from './components/search/search.component';
import { SearchFilterComponent } from './components/search/search-filter/search-filter.component';

import mockServer from './app.mocks';
import { RestaurantComponent } from './components/restaurant/restaurant-list/restaurant.component';
import { RestaurantCreateComponent } from './components/restaurant/restaurant-create/restaurant-create.component';

mockServer();


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    OrderListComponent,
    LoginComponent,
    ProductFilterPipe,
    RegisterComponent,
    SearchComponent,
    SearchFilterComponent,
    RestaurantComponent,
    RestaurantCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'PEN' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
