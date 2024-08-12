import {LineItemModelView} from "./LineItemModelView";
import {OrderStatus} from "../request/FilterOrderRequest";
import {Payment} from "../request/OrderRequest";

export interface OrderModelView {
  id: number
  payment: Payment;
  orderStatus: OrderStatus;
  approval: boolean
  purchased: boolean;
  received: boolean;
  createdAt: string;
  lineItems: Array<LineItemModelView>

}
