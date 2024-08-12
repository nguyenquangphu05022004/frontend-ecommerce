import {ProductModelView} from "./ProductModelView";

export interface ItemCartModelView {
  product: ProductModelView
  attribute: string
  quantity: number
  createdAt: string
}
