import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/enviroment";
import {APIResponse} from "./model/response/APIResponse";
import {APIListResponse} from "./model/response/APIListResponse";
import {VendorCartModelView} from "./model/view/VendorCartModelView";
import {CartRequest} from "./model/request/CartRequest";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url : string = environment.REST_API_SERVER + "/shopping-cart";
  constructor(private httpClient: HttpClient) { }

  addProduct(request: CartRequest) {
    return this.httpClient.post<APIResponse<any>>(`${this.url}/products/inventories`, request);
  }
  getShoppingCart() {
    return this.httpClient.get<APIListResponse<VendorCartModelView>>(
      `${this.url}/products/inventories`
    )
  }

  deleteProduct(inventoryId: number, vendorId: number) {
    return this.httpClient.delete(`${this.url}/products/inventories?inventoryId=${inventoryId}&vendorId=${vendorId}`);
  }
}
