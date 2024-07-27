import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderStatus} from "./model/object.model";
import {OrderRequest} from "./model/order";
import {environment} from "../../../environment/enviroment";
import {Utils} from "../utils";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private httpClient: HttpClient) { }



  createOrder(order: OrderRequest) {
    return this.httpClient.post(environment.REST_API_SERVER + "/orders", order, { 'headers': Utils.getHeader() });
  }

  getAllOrderByCreatedByCustomer(orderStatus: OrderStatus) {
    const url = `${environment.REST_API_SERVER}/orders"/customer?orderStatus=${orderStatus}`
    return this.httpClient.get(url);
  }

  deleteOrderById(id: number) {
    const url = `${environment.REST_API_SERVER}/orders/${id}`
    return this.httpClient.delete(url);
  }


}
