import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order, OrderStatus} from "./model/object.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url: string = "/orders"
  constructor(private httpClient: HttpClient) { }




  createOrder(order: Order) {
    return this.httpClient.post(this.url, order);
  }

  getAllOrderByCreatedByCustomer(orderStatus: OrderStatus) {
    const url = `${this.url}/customer?orderStatus=${orderStatus}`
    return this.httpClient.get(url);
  }

  deleteOrderById(id: number) {
    const url = `${this.url}/${id}`
    return this.httpClient.delete(url);
  }


}
