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
