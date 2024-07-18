import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CartRequest} from "./model/input.model";
import {ShoppingCartResponse} from "./model/output.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url: string = "/shopping-cart"
  constructor(private httpClient: HttpClient) { }

  addProductIntoCart(request: CartRequest) {
    const url = `${this.url}/products/stocks`
    return this.httpClient.post(url, request);
  }

  getShoppingCart() {
    const url = `${this.url}/products/stocks`
    return this.httpClient.get<ShoppingCartResponse>(url);
  }

  deleteProduct(stockId: number, vendorId: number) {
    const url = `${this.url}/products/stocks?stockId=${stockId}&vendorId=${vendorId}`
    return this.httpClient.delete(url);
  }
}
