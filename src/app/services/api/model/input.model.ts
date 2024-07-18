import {Role, SortProductType} from "./object.model";


export interface FilterInputRequestProduct {
  limit?: number,
  page?: number,
  sortProductType?: SortProductType,
  pairs?: Array<Pair<KeySearchRequest, string>>
}

export interface VendorRequest {
  username?: string,
  shopName?: string,
  perMoneyDelivery?: number;
}

export interface CartRequest {
  stockId?: number,
  operationId?: string
}
export interface RegisterRequest {
  username?: string,
  password?: string,
  email?: string,
  fullName?: string,
  role?: Role
}
export interface AuthenRequest {
  username?: string,
  password?: string
}
export enum KeySearchRequest {
  PRODUCT_NAME= "PRODUCT_NAME",
  CATEGORY_IS = "CATEGORY_ID",
  BRAND_ID = "BRAND_ID",
  PRICE="PRICE"
}
export interface Pair<K, V>  {
  key: K,
  value:V
}
