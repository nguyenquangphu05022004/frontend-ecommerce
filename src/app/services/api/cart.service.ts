import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CartRequest} from "./model/input.model";
import {ShoppingCartResponse} from "./model/output.model";
import {environment} from "../../../environment/enviroment";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private httpClient: HttpClient) { }

  addProductIntoCart(request: CartRequest) {
    const url = `${environment.REST_API_SERVER}/shopping-cart/products/stocks`
    return this.httpClient.post(url, request);
  }
  getShoppingCart() {
    const url = `${environment.REST_API_SERVER}/shopping-cart/products/stocks`
    return this.httpClient.get<ShoppingCartResponse>(url);
  }

  deleteProduct(stockId: number, vendorId: number) {
    const url = `${environment.REST_API_SERVER}/shopping-cart/products/stocks?stockId=${stockId}&vendorId=${vendorId}`
    return this.httpClient.delete(url);
  }
}
