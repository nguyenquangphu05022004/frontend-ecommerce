import {LineItemRequest} from "./LineItemRequest";


export interface OrderRequest {
  payment: Payment;
  lineItems: Array<LineItemRequest>;
}

export enum Payment {
  PAY_BY_BANK = "PAY_BY_BANK",
  PAY_AT_HOME = "PAY_AT_HOME"
}
