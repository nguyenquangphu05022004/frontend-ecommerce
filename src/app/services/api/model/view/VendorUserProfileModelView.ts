
export class VendorUserProfileModelView {
  id?: number;
  shopName?: string;
  perMoneyDelivery?: number
  constructor(id?: number, shopName?: string, perMoneyDelivery?: number) {
    this.id = id;
    this.shopName = shopName;
    this.perMoneyDelivery = perMoneyDelivery;
  }
}
