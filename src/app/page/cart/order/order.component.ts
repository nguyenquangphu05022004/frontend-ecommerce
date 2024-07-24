import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {APIListResponse, APIResponse, ItemResponse, VendorCartResponse} from "../../../services/api/model/output.model";
import {Common} from "../../../../environment/common";
import {Coupon, Status} from "../../../services/api/model/object.model";
import {VendorService} from "../../../services/api/vendor.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  vendorCartResponses: Array<VendorCartResponse> = new Array<VendorCartResponse>();
  couponCode : string = "";
  listMapCouponResponse: Map<number, APIResponse<Coupon>> = new Map<number, APIResponse<Coupon>>()
//1c902295-5d01-467e-bb60-70e6c5616784
  constructor(
    private router: Router,
    private vendorService: VendorService
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

  getTotalDecrease() {
    let totalDecrease = 0;
    this.vendorCartResponses.forEach(vendor => {
      //@ts-ignore
      if(this.listMapCouponResponse.has(vendor.id)) {
        //@ts-ignore
        totalDecrease += this.listMapCouponResponse.get(vendor.id)?.data?.decreaseMoney;
      }
    })
    return totalDecrease;
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
      //@ts-ignore
      if(this.listMapCouponResponse.has(vendor.id)) {
        //@ts-ignore
        totalPrice=  totalPrice - this.listMapCouponResponse.get(vendor.id)?.data?.decreaseMoney;
      }
    })
    return totalPrice;
  }

  protected readonly Common = Common;

  getTotalPriceOfVendor(vendor: VendorCartResponse) {
    let price: number = 0;
    vendor.itemResponses?.forEach(item => {
      price += this.getTotalPriceOfItem(item)
    })
    //@ts-ignore
    if(this.listMapCouponResponse.has(vendor.id)) {
      //@ts-ignore
      return price - this.listMapCouponResponse.get(vendor.id)?.data?.decreaseMoney;
    }
    return price
  }

  findCouponByVendor(vendorId: number | undefined) {
    this.vendorService.findCouponByVendorIdAndCouponCode(vendorId, this.couponCode)
      .subscribe({
        next: (apiResponse) => {
          if(apiResponse.status === Status.CODE_EXPIRED) {
            alert("Code that you enter was expired")
          } else if(apiResponse.status === Status.NOT_FOUND) {
            alert("Code that you enter not found")
          } else if(apiResponse.status === Status.SUCCESS) {
            //@ts-ignore
            this.listMapCouponResponse.set(vendorId, apiResponse);
          }
        },
      })
  }
}
