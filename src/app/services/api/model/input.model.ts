import {Role, SortProductType} from "./object.model";


export interface FilterInputRequestProduct {
  limit?: number,
  page?: number,
  sortProductType?: SortProductType,
  pairs?: Map<String, String>
}

export interface VendorRequest {
  username?: string,
  shopName?: string,
  perMoneyDelivery?: number;
}

export interface CartRequest {
  stockId?: number,
  operation?: string
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
  PRODUCT_NAME= "PRODUCT_NAME_",
  CATEGORY_PARENT_ID = "CATEGORY_PARENT_ID_",
  CATEGORY_CHILDREN_ID="CATEGORY_CHILDREN_ID_",
  BRAND_ID = "BRAND_ID_",
  PRICE="PRICE_"
}
