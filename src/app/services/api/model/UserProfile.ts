import {UserContactDetails} from "./object.model";

export interface UserProfile {
  id?: number,
  avatar?: string,
  evaluations?: Array<Evaluation>,
  orders?: Array<Order>,
  vendors?: Array<Vendor>,
  userContactDetails?: UserContactDetails
}
export interface Order {

}
export interface Evaluation {
    content?: string,
    rating?: number,
    product?: Product
}
export interface Product {
  id?: number,
  name?: string
}
export interface Vendor {
  id?: number,
  shopName?: string
}
