import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./model/object.model";
import {Observable} from "rxjs";
import {FilterInputRequestProduct} from "./model/input.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = "/products"

  constructor(private httpClient: HttpClient) { }


  createProduct(product: Product) {
    return this.httpClient.post<Product>(this.url, product)
  }

  getAllProduct(filter: FilterInputRequestProduct) {
    return this.httpClient.get<Array<Product>>(this.url, filter);
  }

}
