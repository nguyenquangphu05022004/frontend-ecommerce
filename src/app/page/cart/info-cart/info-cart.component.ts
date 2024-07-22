import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ItemResponse, ShoppingCartResponse, VendorCartResponse} from "../../../services/api/model/output.model";
import {Stock, Vendor} from "../../../services/api/model/object.model";
import {Common} from "../../../../environment/common";

@Component({
  selector: 'app-info-cart',
  templateUrl: './info-cart.component.html',
  styleUrls: ['./info-cart.component.css']
})
export class InfoCartComponent implements OnChanges {
  @Output()
  getProductSelected: EventEmitter<Array<VendorCartResponse>> = new EventEmitter<Array<VendorCartResponse>>();
  @Input()
  selectAll: boolean = false;
  @Input()
  keyCheck: Map<string, boolean> = new Map<string, boolean>()
  @Input()
  cartResponse: ShoppingCartResponse = new ShoppingCartResponse();

  keyVendor: string = "VENDOR";
  keyStock: string = "STOCK"

  selectVendor(event: any) {
    const vendorIndex = event.target.value;
    if (this.keyCheck.has(this.keyVendor + vendorIndex)) {
      this.keyCheck.set(this.keyVendor + vendorIndex, !this.keyCheck.get(this.keyVendor + vendorIndex));
    } else {
      this.keyCheck.set(this.keyVendor + vendorIndex, true);
    }
    const length = this.cartResponse?.vendors?.at(vendorIndex)?.itemResponses?.length;
    // @ts-ignore
    for (let i = 0; i < length; i++) {
      //@ts-ignore
      const isExists = this.keyCheck.has(this.keyVendor + this.keyStock + this.vendorCartResponse.itemResponses?.at(i).stock.id);
      if (isExists) {
        //@ts-ignore
        this.keyCheck.set(this.keyVendor + this.keyStock + this.cartResponse?.vendors?.at(vendorIndex)?.itemResponses?.at(i).stock.id, !this.keyCheck.get(this.keyVendor + this.keyStock + this.cartResponse?.vendors?.at(vendorIndex)?.itemResponses?.at(i).stock.id));
      } else {
        //@ts-ignore
        this.keyCheck.set(this.keyVendor + this.keyStock + this.cartResponse?.vendors?.at(vendorIndex)?.itemResponses?.at(i).stock.id, true);
      }
    }
    this.getProductFromKey()
  }

  selectItem(event: any) {
    const stockIdAndVendorIndex = event.target.value; //format stockId_vendorIndex = 5_2; stock = 5; index = 2;
    const pair = stockIdAndVendorIndex.split("_");
    //@ts-ignore
    const isExists = this.keyCheck.has(this.keyVendor + this.keyStock + pair[0]);
    if (isExists) {
      //@ts-ignore
      this.keyCheck.set(this.keyVendor + this.keyStock + pair[0], !this.keyCheck.get(this.keyVendor + this.keyStock + pair[0]));
    } else {
      //@ts-ignore
      this.keyCheck.set(this.keyVendor + this.keyStock + pair[0], true);
    }
    this.keyCheck.set(this.keyVendor + pair[1], false);
    this.getProductFromKey()
  }

  getTotalPrice(quantity: number | undefined, stock: Stock | undefined) {
    //@ts-ignore
    return quantity * stock?.price
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      if (propName === "selectAll") {
        this.turnOnAllFormCheckBox()
        break;
      }
    }
  }

  turnOnAllFormCheckBox() {
    const lenVendor = this.cartResponse?.vendors?.length;
    //@ts-ignore
    for(let j = 0; j < lenVendor; j++) {
      this.keyCheck.set(this.keyVendor + j, this.selectAll);
      const length = this.cartResponse?.vendors?.at(j)?.itemResponses?.length;
      //@ts-ignore
      for (let i = 0; i < length; i++) {
        //@ts-ignore
        this.keyCheck.set(this.keyVendor + this.keyStock + this.cartResponse.vendors?.at(j).itemResponses?.at(i).stock.id, this.selectAll);
      }
      this.getProductFromKey()
    }
  }

  getProductFromKey() {
    let vendorCartResponse: Array<VendorCartResponse> = new Array<VendorCartResponse>();
    //@ts-ignore
    this.cartResponse.vendors?.forEach(vendor => {
      let vendorSelected: VendorCartResponse = new VendorCartResponse(
        vendor.id,
        vendor.shopName,
        vendor.perMoneyDelivery
      );
      vendorSelected.itemResponses = new Array<ItemResponse>();
      vendor.itemResponses?.forEach(item => {
        if (this.keyCheck.get(this.keyVendor + this.keyStock + item?.stock?.id)) {
          vendorSelected.itemResponses?.push(item);
        }
      })
      if(vendorSelected.itemResponses.length > 0) {
        vendorCartResponse.push(vendorSelected);
      }
    })
    this.getProductSelected.emit(vendorCartResponse);
  }

  protected readonly Common = Common;
}
