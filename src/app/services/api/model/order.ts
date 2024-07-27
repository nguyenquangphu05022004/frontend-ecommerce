import {Payment, UserContactDetails} from "./object.model";

export interface OrderRequest {
  lineItemRequests?: Array<LineItemRequest>;
  userContactDetails?: UserContactDetails,
  payment?: Payment
}

export interface LineItemRequest {
  vendorId?: number;
  couponId?: number;
  itemRequests?: Array<ItemRequest>
}

export interface ItemRequest {
  stockId?: number,
  quantity?: number,
  classificationId?: number;
}
