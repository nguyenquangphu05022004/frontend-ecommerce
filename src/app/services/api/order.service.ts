import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderStatus} from "./model/object.model";
import {OrderRequest} from "./model/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url: string = "/orders"
  constructor(private httpClient: HttpClient) { }




  createOrder(order: OrderRequest) {
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
