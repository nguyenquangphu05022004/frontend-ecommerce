import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ItemResponse, VendorCartResponse} from "../../../services/api/model/output.model";
import {Common} from "../../../../environment/common";
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

   vendorCartResponses: Array<VendorCartResponse> = new Array<VendorCartResponse>();
  constructor(
    private router: Router
  ) {
    //@ts-ignore
    this.vendorCartResponses = this.router.getCurrentNavigation()?.extras.state.productSelected;
  }


  getProducts(): Array<ItemResponse> {
    const products: Array<ItemResponse> = new Array<ItemResponse>();
    this.vendorCartResponses.forEach(vendor => {
      vendor.itemResponses?.forEach(item => {
        products.push(item)
      })
    })
    return products;
  }

  getTotalPriceOfItem(item: ItemResponse | undefined) {
    //@ts-ignore
    return item?.quantity * item?.stock?.price
  }

  getTotalItem() {
    let totalItem = 0;
    this.vendorCartResponses.forEach(vendor => {
      //@ts-ignore
      totalItem += vendor.itemResponses?.length
    })
    return totalItem
  }
  getTotalPrice() {
    let totalPrice = 0;
    this.vendorCartResponses.forEach(vendor => {
      vendor.itemResponses?.forEach(item => {
        //@ts-ignore
        totalPrice += item.stock?.price * item.quantity;
      })
    })
    return totalPrice;
  }

  protected readonly Common = Common;

  getTotalPriceOfVendor(vendor: VendorCartResponse) {
    let price : number = 0;
    vendor.itemResponses?.forEach(item => {
      price += this.getTotalPriceOfItem(item)
    })
    return price;
  }
}
