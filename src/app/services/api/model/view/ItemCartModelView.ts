import {ProductModelView} from "./ProductModelView";

export interface ItemCartModelView {
  id?: number,
  product: ProductModelView
  attribute: string
  quantity: number
  createdAt: string
}
