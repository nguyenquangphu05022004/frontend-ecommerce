import {Payment, UserContactDetails} from "./object.model";

export interface OrderRequest {
  lineItems?: Array<LineItemRequest>;
  userContactDetails?: UserContactDetails,
  payment?: Payment
}

export interface LineItemRequest {
  vendorId?: number;
  couponId?: number;
  itemsRequest?: Array<ItemRequest>
}

export interface ItemRequest {
  stockId?: number,
  quantity?: number,
  stockClassificationId?: number;
}
