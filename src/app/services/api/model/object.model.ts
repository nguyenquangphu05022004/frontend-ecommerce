
export interface Language {
  nameVn?: string,
  nameEn?: string
}

export interface BaseProduct {
  id?: number,
  brand?: Brand,
  category?: Category,
  language?: Language,
  description?: string
}

export interface Product extends BaseProduct{
  vendor?: Vendor,
  evaluations?: Array<Evaluation>,
  stocks?: Array<Stock>,
  averageRate?: number
}

export enum Role {
  USER = "user",
  ADMIN="admin",
  VENDOR="vendor"
}
export interface UserContactDetails {
   fullName?: string;
   phoneNumber?: string;
   address?: string;
   province?: string;
   district?:string;
   ward?: string;
}
export interface BaseUser {
  userContactDetails?: UserContactDetails
  id?: number,
  email?: string,
  username?: string,
  role?: Role,
  numEvaluations?: number,
  image?: string
}
export interface User {
    baseUser?: BaseUser,
}

export interface Brand {
  id?: number,
  name?: string
}

export interface Category {
  id?: number,
  name?: string,
  children?: Array<Category>;
}

export interface Evaluation {
    id?: number,
    rating?: number,
    content?: string,
    imageUrls?: Array<String>
}

export interface Stock {
  id?: number,
  price?: number,
  code?: string,
  color?: string,
  product?: BaseProduct,
  imageUrls?: Array<String>,
  stockClassifications?: Array<StockClassification>
}

export interface Vendor {
  id?: number,
  shopName?: string,
  perMoneyDelivery?: number,
  numberOfProduct?: number,
  numberOfUserFavorite?: number
}

export interface StockClassification {
  id?: number,
  quantityOfProduct?: number,
  sizeName?: string,
  seller?: number
}

export interface Order {
  id?: number,
  userContactDetails?: UserContactDetails,
  lineItems?: Array<LineItem>,
  payment?: Payment,
  priceCoupon?: number,
  orderStatus?: OrderStatus,
  approval?: boolean,
  purchased?: boolean,
  received?: boolean
}
export interface LineItem {
  quantity?: number,
  stock?: Stock,
  stockClassification?: StockClassification
}
export enum  Payment {
  PAY_AT_HOME,
  PAY_BY_BANK
}
export enum SortProductType {
    DEFAULT,
  RATE_AVERAGE,
  NUMBER_OF_SELLER,
  PRICE
}
export enum OrderStatus {
    ALL,
  SUCCESS,
  PROCESSING,
  NOT_APPROVAL
}