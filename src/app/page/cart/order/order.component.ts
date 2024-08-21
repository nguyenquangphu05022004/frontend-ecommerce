import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Common} from "../../../../environment/common";
import {VendorService} from "../../../services/api/vendor.service";
import {OrderService} from "../../../services/api/order.service";
import {VendorCartModelView} from "../../../services/api/model/view/VendorCartModelView";
import {APIResponse} from "../../../services/api/model/response/APIResponse";
import {CouponModelView} from "../../../services/api/model/view/CouponModelView";
import {ItemCartModelView} from "../../../services/api/model/view/ItemCartModelView";
import {OrderRequest} from "../../../services/api/model/request/OrderRequest";
import {LineItemRequest} from "../../../services/api/model/request/LineItemRequest";
import {ItemRequest} from "../../../services/api/model/request/ItemRequest";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orderRequest: OrderRequest = new class implements OrderRequest {
    lineItems: Array<LineItemRequest> = new Array<LineItemRequest>();
    payment?: string
  }
  Payment  = [
    {
      key: "Pay at home",
      value: "PAY_AT_HOME"
    },
    {
      key:"Pay through bank",
      value: "PAY_BY_BANK"
    }
  ]
  vendorModelViewsCheckout: Array<VendorCartModelView> = new Array<VendorCartModelView>();
  couponCode : string = "";
  listMapCouponResponse: Map<number, APIResponse<CouponModelView>> = new Map<number, APIResponse<CouponModelView>>()
  payment: any;
  userContactDetails = {}
//1c902295-5d01-467e-bb60-70e6c5616784
  constructor(
    private router: Router,
    private vendorService: VendorService,
    private orderService: OrderService
  ) {

    //@ts-ignore
    this.vendorCartResponses = this.router.getCurrentNavigation()?.extras.state.vendorCartModelViewsCheckout;
  }


  getProducts(): Array<ItemCartModelView> {
    const products: Array<ItemCartModelView> = new Array<ItemCartModelView>();
    this.vendorModelViewsCheckout.forEach(vendor => {
      vendor.items?.forEach(item => {
        products.push(item)
      })
    })
    return products;
  }

  getTotalDecrease() {
    let totalDecrease = 0;
    this.vendorModelViewsCheckout.forEach(vendor => {
      //@ts-ignore
      if(this.listMapCouponResponse.has(vendor.id)) {
        //@ts-ignore
        totalDecrease += this.listMapCouponResponse.get(vendor.id)?.data?.decreaseMoney;
      }
    })
    return totalDecrease;
  }

  getTotalPriceOfItem(item: ItemCartModelView | undefined) {
    //@ts-ignore
    return item?.quantity * item?.product.price
  }

  getTotalItem() {
    let totalItem = 0;
    this.vendorModelViewsCheckout.forEach(vendor => {
      //@ts-ignore
      totalItem += vendor.itemResponses?.length
    })
    return totalItem
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.vendorModelViewsCheckout.forEach(vendor => {
      vendor.items?.forEach(item => {
        //@ts-ignore
        totalPrice += item?.product?.price * item.quantity;
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

  getTotalPriceOfVendor(vendor: VendorCartModelView) {
    let price: number = 0;
    vendor.items?.forEach(item => {
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

  }

  /**
   * {
   *     "userContactDetails": {
   *         "fullName": "12"
   *     },
   *     "lineItemRequests": [
   *         {
   *             "couponId": "1",
   *             "vendorId": 1,
   *             "itemRequests": [
   *                 {
   *                     "stockId": 1,
   *                     "classificationId": 1,
   *                     "quantity": 2
   *                 }
   *             ]
   *         }
   *     ],
   *     "payment": "PAY_BY_BANK"
   * }
   */
  order() {
    this.vendorModelViewsCheckout.forEach(vendor => {
      // @ts-ignore
      const apiResponse: APIResponse<Coupon> = this.listMapCouponResponse.get(vendor.id)
      const lineItem: LineItemRequest  = {
        items: new Array<ItemRequest>,
        vendorId: vendor.id
      }
      if(apiResponse !== undefined) {
        lineItem.couponId = apiResponse.data?.id
      }
      vendor.items?.forEach(item => {
        lineItem.items?.push( {
          inventoryId: item.id,
          quantity: item.quantity
        })
      })
      this.orderRequest.lineItems?.push(lineItem)
    })
    this.orderService.createOrder(this.orderRequest)
      .subscribe({
        next: (response) => {
          if(response.status === 200) {
            this.router.navigateByUrl("/user/orders")
          } else if(response.status === 400) {
            alert("your order can't create, please wait a minute")
          }
        }
      })
  }
}
