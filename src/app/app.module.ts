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
import {InfoCartComponent} from './page/cart/info-cart/info-cart.component';
import {OrderComponent} from './page/cart/order/order.component';
import {TreeViewComponent} from './page/product-detail/tree-view/tree-view.component';
import {ProfileComponent} from './profile/profile.component';
import {EvaluationComponent} from './profile/evaluation/evaluation.component';
import {OrderPlaceComponent} from './profile/order-place/order-place.component';
import {UserFollowVendorComponent} from './profile/user-follow-vendor/user-follow-vendor.component';
import {MessageComponent} from './page/message/message.component';
import {OrderDetailComponent} from './page/cart/order/order-detail/order-detail.component';
import {OrderHistoryComponent} from './page/cart/order/order-history/order-history.component';
import {ForgetPasswordComponent} from './page/forget-password/forget-password.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { FormComponent } from './page/admin/category/form/form.component';
import { ListComponent } from './page/admin/category/list/list.component';
import { CategoryComponent } from './page/admin/category/category.component';
import { BrandFormComponent } from './page/admin/brand/brand-form/brand-form.component';
import { BrandListComponent } from './page/admin/brand/brand-list/brand-list.component';
import { BrandComponent } from './page/admin/brand/brand.component';
import { SkuComponent } from './page/admin/product/sku/sku.component';
import { SpuComponent } from './page/admin/product/spu/spu.component';
import { ProductComponent } from './page/admin/product/product.component';
import { SpuListComponent } from './page/admin/product/spu/spu-list/spu-list.component';
import { SkuListComponent } from './page/admin/product/sku/sku-list/sku-list.component';
import { SkuFormComponent } from './page/admin/product/sku/sku-form/sku-form.component';

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
    ProfileComponent,
    EvaluationComponent,
    OrderPlaceComponent,
    UserFollowVendorComponent,
    MessageComponent,
    OrderDetailComponent,
    OrderHistoryComponent,
    ForgetPasswordComponent,
    DashboardComponent,
    FormComponent,
    ListComponent,
    CategoryComponent,
    BrandFormComponent,
    BrandListComponent,
    BrandComponent,
    SkuComponent,
    SpuComponent,
    ProductComponent,
    SpuListComponent,
    SkuListComponent,
    SkuFormComponent,
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
