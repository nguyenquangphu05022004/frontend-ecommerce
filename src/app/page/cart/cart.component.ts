import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/api/cart.service";
import {ItemResponse, ShoppingCartResponse, VendorCartResponse} from "../../services/api/model/output.model";
import {Router} from "@angular/router";
import {Common} from "../../../environment/common";
import {CartRequest} from "../../services/api/model/input.model";
import {TokenService} from "../../services/token.service";

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
  itemOrder : CartRequest | undefined;
  keyStock: string = "STOCK"
  keyVendor: string = "VENDOR"
  constructor(
    private cartService: CartService,
    private router: Router
  ) {
    if(router.getCurrentNavigation()?.extras.state !== undefined) {
      // @ts-ignore
      this.itemOrder = router.getCurrentNavigation()?.extras.state.itemOrder;
      // @ts-ignore
      this.keyCheck.set(this.keyVendor + this.keyStock + this.itemOrder.stockId + "_" + this.itemOrder.stockClassificationId, true);
    }
    console.log("Product Order: ", this.itemOrder)
  }
  ngOnInit(): void {
    this.cartService.getShoppingCart()
      .subscribe({
        next: (data) => {
          this.shoppingCartResponse = data;
          if(this.itemOrder !== undefined) {
            this.shoppingCartResponse.vendors?.forEach(vendor => {
              vendor.itemResponses?.forEach(item => {
                // @ts-ignore
                if(item.stock?.id === this.itemOrder.stockId && item.stockClassificationId === this.itemOrder.stockClassificationId) {
                  let vendorSelected: VendorCartResponse = new VendorCartResponse(
                    vendor.id,
                    vendor.shopName,
                    vendor.perMoneyDelivery
                  );
                  vendorSelected.itemResponses = new Array<ItemResponse>();
                  vendorSelected.itemResponses.push(item);
                  this.productsCheckout.push(vendorSelected)
                }
              })
            })
          }
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
    if(TokenService.isExpired()) {
      window.location.href = "/login"
      return;
    }
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
