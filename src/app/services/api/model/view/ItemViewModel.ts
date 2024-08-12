import {ProductInventoryModelView} from "./ProductInventoryModelView";

export interface ItemViewModel {
  id: number;
  quantity: number
  productInventory: ProductInventoryModelView
}
