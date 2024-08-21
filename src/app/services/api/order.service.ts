import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/enviroment";
import {APIListResponse} from "./model/response/APIListResponse";
import {FilterOrderRequest} from "./model/request/FilterOrderRequest";
import {OrderModelView} from "./model/view/OrderModelView";
import {APIResponse} from "./model/response/APIResponse";
import {OrderRequest} from "./model/request/OrderRequest";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url : string = environment.REST_API_SERVER + "/orders";

  constructor(private httpClient: HttpClient) { }



  createOrder(order: OrderRequest) {
      return this.httpClient.post<APIListResponse<any>>(`${this.url}`, order);
  }

  getAllOrderCreatedByCustomer(filterOrderRequest: FilterOrderRequest) {
    return this.httpClient.post<APIListResponse<any>>(`${this.url}/customer`, filterOrderRequest);
  }

  deleteOrderById(id: number) {
    return this.httpClient.delete<APIResponse<any>>(
      `${this.url}/${id}`
    )
  }


}
