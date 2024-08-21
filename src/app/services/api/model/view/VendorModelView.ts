import {VendorUserProfileModelView} from "./VendorUserProfileModelView";

export class VendorModelView extends VendorUserProfileModelView{
  createdAt?: string;
  numberOfFollower?: number;
  numberOfProducts?: number
  percentRelyComment?: number;
  constructor(id?: number, shopName?: string, perMoneyDelivery?: number) {
    super(id, shopName, perMoneyDelivery);
  }
}
