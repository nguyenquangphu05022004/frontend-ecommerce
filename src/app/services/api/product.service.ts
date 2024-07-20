import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./model/object.model";
import {Observable} from "rxjs";
import {FilterInputRequestProduct} from "./model/input.model";
import {environment} from "../../../environment/enviroment";
import {APIListResponse, APIResponse} from "./model/output.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = `${environment.REST_API_SERVER}/products`

  constructor(private httpClient: HttpClient) { }


  createProduct(product: Product) {
    return this.httpClient.post<Product>(this.url, product)
  }

  getAllProduct(filter: FilterInputRequestProduct | undefined | null) {
    if(filter === null || filter === undefined) {
      return this.httpClient.get<APIListResponse<Product>>(this.url);
    }
    return this.httpClient.post<APIListResponse<Product>>(this.url + "/search", filter);
  }

}
