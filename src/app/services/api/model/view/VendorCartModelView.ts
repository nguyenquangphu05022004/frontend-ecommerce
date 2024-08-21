import {VendorModelView} from "./VendorModelView";
import {ItemCartModelView} from "./ItemCartModelView";

export class VendorCartModelView extends VendorModelView{
  items?: Array<ItemCartModelView>;
  constructor(id?: number, shopName?: string, perMoneyDelivery?: number) {
    super(id, shopName, perMoneyDelivery);
  }
}
