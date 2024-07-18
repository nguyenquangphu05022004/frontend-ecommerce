import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {ShopComponent} from "./page/shop/shop.component";
import {ContactComponent} from "./page/contact/contact.component";
import {LoginComponent} from "./page/login/login.component";
import {RegisterComponent} from "./page/register/register.component";
import {ProductDetailComponent} from "./page/product-detail/product-detail.component";
import {CartComponent} from "./page/cart/cart.component";
import {FooterComponent} from "./layout/footer/footer.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "shop",
    component: ShopComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "product/:id/:slug",
    component: ProductDetailComponent
  },
  {
    path: "cart",
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
