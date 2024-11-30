import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {ShopComponent} from "./page/shop/shop.component";
import {ContactComponent} from "./page/contact/contact.component";
import {LoginComponent} from "./page/login/login.component";
import {RegisterComponent} from "./page/register/register.component";
import {ProductDetailComponent} from "./page/product-detail/product-detail.component";
import {CartComponent} from "./page/cart/cart.component";
import {OrderComponent} from "./page/cart/order/order.component";
import {ProfileComponent} from "./profile/profile.component";
import {OrderHistoryComponent} from "./page/cart/order/order-history/order-history.component";
import {OrderDetailComponent} from "./page/cart/order/order-detail/order-detail.component";
import {ForgetPasswordComponent} from "./page/forget-password/forget-password.component";
import {DashboardComponent} from "./page/admin/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "",
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
    path:'forget-password',
    component: ForgetPasswordComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "product/:id",
    component: ProductDetailComponent
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "order",
    component: OrderComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path:"user-orders",
    component: OrderHistoryComponent
  },
  {
    path:"order-detail/:orderId",
    component: OrderDetailComponent
  },
  {
    path: 'admin/dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
