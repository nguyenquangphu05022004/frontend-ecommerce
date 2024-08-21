import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/api/cart.service";
import {Router} from "@angular/router";
import {Common} from "../../../environment/common";
import {VendorCartModelView} from "../../services/api/model/view/VendorCartModelView";
import {Utils} from "../../services/utils";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  keyCheck: Map<string, boolean> = new Map<string, boolean>()
  vendorCartModelViews: Array<VendorCartModelView> = new Array<VendorCartModelView>()
  selectAll: boolean = false;
  keyInventory: string = "INVENTORY"
  keyVendor: string = "VENDOR"
  vendorCartModelViewsCheckout: Array<VendorCartModelView> = new Array<VendorCartModelView>()
  constructor(
    private cartService: CartService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.cartService.getShoppingCart()
      .subscribe({
        next: response => {
          if(response.status === 200) {
            this.vendorCartModelViews = response.data;
          }
        }
      })
  }

  showCheckout(vendorResponses: Array<VendorCartModelView>) {
    this.vendorCartModelViewsCheckout = vendorResponses;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.vendorCartModelViewsCheckout.forEach(vendor => {
      vendor.items?.forEach(item => {
        //@ts-ignore
        totalPrice += item.product.price * item.quantity;
      })
    })
    return totalPrice;
  }

  changeSelectAll() {
    this.selectAll = !this.selectAll;
  }


  async negativeToOrderPage() {
    if (Utils.isTokenExpired()) {
      window.location.href = "/login"
      return;
    }
    if (this.vendorCartModelViewsCheckout.length > 0) {
      await this.router.navigateByUrl("/order", {
        state: {vendorCartModelViewsCheckout: this.vendorCartModelViewsCheckout}
      });
      return;
    }
  }

  getTotalItem() {
    let totalItem = 0;
    this.vendorCartModelViewsCheckout.forEach(vendor => {
      //@ts-ignore
      totalItem += vendor.itemResponses?.length
    })
    return totalItem
  }

  protected readonly Common = Common;
}
