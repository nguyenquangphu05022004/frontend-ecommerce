import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/enviroment";
import {ProductRequest} from "./model/request/ProductRequest";
import {FilterProductRequest} from "./model/request/FilterProductRequest";
import {InventoryRequest} from "./model/request/InventoryRequest";
import {ProductDetailsViewModel} from "./model/view/ProductDetailsViewModel";
import {ProductGalleryModelView} from "./model/view/ProductGalleryModelView";
import {APIResponse} from "./model/response/APIResponse";
import {APIListResponse} from "./model/response/APIListResponse";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = `${environment.REST_API_SERVER}/products`

  constructor(private httpClient: HttpClient) { }

  createProduct(request: ProductRequest) {
    return this.httpClient.post<APIResponse<any>>(
      this.url,
      request
    )
  }
  getProductById(id: string, slug: string) {
    return this.httpClient.get<APIResponse<any>>(
      `${this.url}/${id}/${slug}`
    );
  }
  getAllProductRecommendation(id: number) {
    return this.httpClient.get<APIResponse<any>>(
      `${this.url}/${id}/recommendation`
    )
  }

  getAllProduct(filter: FilterProductRequest | null) {
    return this.httpClient.post<APIListResponse<ProductGalleryModelView>>(
      `${this.url}/search`,
      filter
    )
  }
  getInventoryAttributeKey(request: InventoryRequest) {
    return this.httpClient.post<APIResponse<any>>(
      `${this.url}/inventories`,
      request
    )
  }
  getAllAttributeKey() {
    return this.httpClient.get<APIListResponse<any>>(this.url + "/attributes");
  }
}
