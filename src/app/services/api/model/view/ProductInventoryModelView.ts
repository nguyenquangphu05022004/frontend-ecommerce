import {ProductModelView} from "./ProductModelView";

export interface ProductInventoryModelView {
  id: number;
  productModelView: ProductModelView,
  attributeCombinationProduct: string;
  quantity: number;
  skuCode: string;
  numberOfProductSold: number;
}
