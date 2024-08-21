import {LineItemRequest} from "./LineItemRequest";


export interface OrderRequest {
  payment?: string;
  lineItems: Array<LineItemRequest>;
}
