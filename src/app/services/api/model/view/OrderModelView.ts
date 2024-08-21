import {LineItemModelView} from "./LineItemModelView";
import {OrderStatus} from "../request/FilterOrderRequest";

export interface OrderModelView {
  id: number
  payment: string;
  orderStatus: OrderStatus;
  approval: boolean
  purchased: boolean;
  received: boolean;
  createdAt: string;
  lineItems: Array<LineItemModelView>

}
