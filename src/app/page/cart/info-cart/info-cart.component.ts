import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Common} from "../../../../environment/common";
import {VendorCartModelView} from "../../../services/api/model/view/VendorCartModelView";
import {ItemCartModelView} from "../../../services/api/model/view/ItemCartModelView";

@Component({
  selector: 'app-info-cart',
  templateUrl: './info-cart.component.html',
  styleUrls: ['./info-cart.component.css']
})
export class InfoCartComponent implements OnChanges {
  @Output()
  getProductSelected: EventEmitter<Array<VendorCartModelView>> = new EventEmitter<Array<VendorCartModelView>>();
  @Input()
  selectAll: boolean = false;
  @Input()
  keyCheck: Map<string, boolean> = new Map<string, boolean>()
  @Input()
  vendorCartModelViews: Array<VendorCartModelView> = new Array<VendorCartModelView>();
  @Input()
  keyVendor: string = ""
  @Input()
  keyInventory: string = ""

  selectVendor(event: any) {
    const vendorIndex = event.target.value;
    const vendor = this.vendorCartModelViews.at(vendorIndex);
    const value = this.keyCheck.get(this.keyVendor + vendor?.id);
    if (value === false || value === undefined) {
      this.keyCheck.set(this.keyVendor + vendor?.id, true);
    } else {
      this.keyCheck.set(this.keyVendor + vendor?.id, false);
    }
    vendor?.items?.forEach(item => {
      const value = this.keyCheck.get(this.keyVendor + this.keyInventory + item?.id);
      if (value === false || value === undefined) {
        //@ts-ignore
        this.keyCheck.set(this.keyVendor + this.keyInventory + item.id, true);
      } else {
        //@ts-ignore
        this.keyCheck.set(this.keyVendor + this.keyInventory + item.id, false);
      }
    })
    this.selectAll = false;
    this.getProductFromKey()
  }

  selectItem(event: any) {
    const vendorAndItemIndex = event.target.value.split("_");
    const vendor =  this.vendorCartModelViews.at(vendorAndItemIndex[0]);
    const item = vendor?.items?.at(vendorAndItemIndex[1]);
    if(this.keyCheck.get(this.keyVendor + vendor?.id) === true) {
      this.keyCheck.set(this.keyVendor + vendor?.id, false);
    }
    const value = this.keyCheck.get(this.keyVendor + this.keyInventory + item?.id);
    if(value === false || value === undefined) {
      this.keyCheck.set(this.keyVendor + this.keyInventory + item?.id, true)
    } else {
      this.keyCheck.set(this.keyVendor + this.keyInventory + item?.id, false)
    }
    this.getProductFromKey()
    console.log(this.keyCheck)
  }

  getTotalPrice(quantity: number | undefined, price: number | undefined) {
    //@ts-ignore
    return quantity * stock?.price
  }

  ngOnChanges(changes: SimpleChanges): void {
    // @ts-ignore
    checkSelectAll(changes.selecetAll.currentValue)
  }

  checkSelectAll(currentValue: boolean) {
    if(currentValue === true) {
      this.vendorCartModelViews.forEach(vendor => {
        this.keyCheck.set(this.keyVendor + vendor?.id, true);
        vendor?.items?.forEach(item => {
          this.keyCheck.set(this.keyVendor + this.keyInventory + item?.id, true)
        })
      })
    }
    this.getProductFromKey()
  }

  getProductFromKey() {
    let vendorCartResponse: Array<VendorCartModelView> = new Array<VendorCartModelView>();
    //@ts-ignore
    this.vendorCartModelViews?.forEach(vendor => {
      let vendorSelected: VendorCartModelView = new VendorCartModelView(
        vendor.id,
        vendor.shopName,
        vendor.perMoneyDelivery
      );
      vendorSelected.items = new Array<ItemCartModelView>();
      vendor.items?.forEach(item => {
        if (this.keyCheck.get(this.keyVendor + this.keyInventory + item?.id)) {
          vendorSelected.items?.push(item);
        }
      })
      if(vendorSelected.items.length > 0) {
        vendorCartResponse.push(vendorSelected);
      }
    })
    console.log(vendorCartResponse)
    this.getProductSelected.emit(vendorCartResponse);
  }

  protected readonly Common = Common;
}
