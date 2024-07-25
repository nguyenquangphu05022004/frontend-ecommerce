import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './page/home/home.component';
import {ShopComponent} from './page/shop/shop.component';
import {ContactComponent} from './page/contact/contact.component';
import {LoginComponent} from './page/login/login.component';
import {RegisterComponent} from './page/register/register.component';
import {ProductDetailComponent} from './page/product-detail/product-detail.component';
import {CartComponent} from './page/cart/cart.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from './layout/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {PaginationComponent} from "./page/shop/pagination/pagination.component";
import { InfoCartComponent } from './page/cart/info-cart/info-cart.component';
import { OrderComponent } from './page/cart/order/order.component';
import { TreeViewComponent } from './page/product-detail/tree-view/tree-view.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    InfoCartComponent,
    OrderComponent,
    TreeViewComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
