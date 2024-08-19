import {Injectable} from '@angular/core';
import {ProductInventoryRequest} from "./model/request/product.inventory.request";

@Injectable({
  providedIn: 'root'
})
export class ProductInventoryService {

  private url: string = "/products/stocks"

  createProductInventory(productInventoryRequest: ProductInventoryRequest) {
  }

  getProductInventoryByAttribute() {
    
  }


}
