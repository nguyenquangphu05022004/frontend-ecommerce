import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
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
  @Input()
  keyVendor: string = ""
  @Input()
  keyStock: string = ""

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
      const isExists = this.keyCheck.has(this.keyVendor + this.keyStock + this.vendorCartResponse.itemResponses?.at(i).stock.id + "_" + this.cartResponse?.vendors?.at(vendorIndex)?.itemResponses?.at(i).stockClassificationId);
      if (isExists) {
        //@ts-ignore
        this.keyCheck.set(this.keyVendor + this.keyStock + this.cartResponse?.vendors?.at(vendorIndex)?.itemResponses?.at(i).stock.id, !this.keyCheck.get(this.keyVendor + this.keyStock + this.vendorCartResponse.itemResponses?.at(i).stock.id + "_" + this.cartResponse?.vendors?.at(vendorIndex)?.itemResponses?.at(i).stockClassificationId));
      } else {
        //@ts-ignore
        this.keyCheck.set(this.keyVendor + this.keyStock + this.vendorCartResponse.itemResponses?.at(i).stock.id + "_" + this.cartResponse?.vendors?.at(vendorIndex)?.itemResponses?.at(i).stockClassificationId, true);
      }
    }
    this.getProductFromKey()
  }

  selectItem(event: any) {
    const stockIdAndStockClassificationId = event.target.value; //format stockId_stockClassificationId = 5_2; stockId = 5; stockClassificationId = 2;
    //@ts-ignore
    const isExists = this.keyCheck.has(this.keyVendor + this.keyStock + stockIdAndStockClassificationId);
    if (isExists) {
      console.log("exists")
      //@ts-ignore
      this.keyCheck.set(this.keyVendor + this.keyStock + stockIdAndStockClassificationId, !this.keyCheck.get(this.keyVendor + this.keyStock + stockIdAndStockClassificationId));
    } else {
      //@ts-ignore
      this.keyCheck.set(this.keyVendor + this.keyStock + stockIdAndStockClassificationId, true);
    }
    this.keyCheck.set(this.keyVendor + stockIdAndStockClassificationId, false);
    this.getProductFromKey()
    console.log(this.keyCheck)
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
        this.keyCheck.set(this.keyVendor + this.keyStock + this.cartResponse.vendors?.at(j).itemResponses?.at(i).stock.id + "_" + this.cartResponse.vendors?.at(j).itemResponses.at(i).stockClassificationId, this.selectAll);
      }
      this.getProductFromKey()
    }
  }

  getProductFromKey() {
    console.log(this.cartResponse)
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
        if (this.keyCheck.get(this.keyVendor + this.keyStock + item?.stock?.id + "_" + item.stockClassificationId)) {
          vendorSelected.itemResponses?.push(item);
        }
      })
      if(vendorSelected.itemResponses.length > 0) {
        vendorCartResponse.push(vendorSelected);
      }
    })
    console.log(vendorCartResponse)
    this.getProductSelected.emit(vendorCartResponse);
  }

  protected readonly Common = Common;
}
