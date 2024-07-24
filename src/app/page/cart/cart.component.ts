import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/api/cart.service";
import {ShoppingCartResponse, VendorCartResponse} from "../../services/api/model/output.model";
import {Router} from "@angular/router";
import {Common} from "../../../environment/common";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  keyCheck: Map<string, boolean> = new Map<string, boolean>()
  productsCheckout: Array<VendorCartResponse> = new Array<VendorCartResponse>()
  shoppingCartResponse: ShoppingCartResponse = {}
  selectAll: boolean = false;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.cartService.getShoppingCart()
      .subscribe({
        next: (data) => {
          this.shoppingCartResponse = data;
        },
        error: (err) => console.log(err)
      })
    }

  showCheckout(vendorResponses: Array<VendorCartResponse>) {
     this.productsCheckout = vendorResponses;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.productsCheckout.forEach(vendor => {
      vendor.itemResponses?.forEach(item => {
        //@ts-ignore
        totalPrice += item.stock?.price * item.quantity;
      })
    })
    return totalPrice;
  }

  changeSelectAll() {
    this.selectAll = !this.selectAll;
  }


  async negativeToOrderPage() {
    if(this.productsCheckout.length > 0) {
       await this.router.navigateByUrl("/order", {
        state: {productSelected: this.productsCheckout}
      });
       return;
    }
  }

  getTotalItem() {
    let totalItem = 0;
    this.productsCheckout.forEach(vendor => {
      //@ts-ignore
      totalItem += vendor.itemResponses?.length
    })
    return totalItem
  }

  protected readonly Common = Common;
}
