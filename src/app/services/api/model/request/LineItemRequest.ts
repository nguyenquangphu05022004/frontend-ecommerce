import {ItemRequest} from "./ItemRequest";


export interface LineItemRequest {
  vendorId?: number;
  couponId?: number;
  items?: Array<ItemRequest>;
}
