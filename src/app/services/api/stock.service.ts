import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Stock} from "./model/object.model";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private url: string = "/products/stocks"

  constructor(private httpClient: HttpClient) { }

  createStock(formData: FormData) {
    return this.httpClient.post(this.url, formData);
  }

  getStockById(stockId: number) {
    const url = `${this.url}/${stockId}`
    return this.httpClient.get<Stock>(this.url);
  }


}
