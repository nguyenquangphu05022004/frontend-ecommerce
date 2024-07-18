import {Stock, Vendor} from "./object.model";

export interface VendorCartResponse extends Vendor{
  itemResponses?: Array<ItemResponse>
}
export interface ItemResponse {
  stock?: Stock,
  quantity?: number,
  createAt?: any
}
export interface ShoppingCartResponse {
  vendors?: Array<VendorCartResponse>
}
