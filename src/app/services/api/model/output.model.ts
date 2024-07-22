import {Stock, Vendor} from "./object.model";

export class VendorCartResponse extends Vendor{
  constructor(id: number | undefined, shopName: string | undefined, perMoneyDelivery: number | undefined) {
    super(id, shopName, perMoneyDelivery);
  }
  itemResponses?: Array<ItemResponse>
}
export class ItemResponse {
  stock?: Stock
  quantity?: number
  createAt?: any
}
export class ShoppingCartResponse {
  vendors?: Array<VendorCartResponse>
}

export interface APIListResponse<T> {
  message?: string,
  error?: string,
  ok?: number,
  status?: string,
  page?: number,
  limit?: number,
  totalPage?: number,
  data?: Array<T>
}
export interface APIResponse<T> {
  message?: string,
  error?: string,
  ok?: number,
  status?: string
  data?: T
}
