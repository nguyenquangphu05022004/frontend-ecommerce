import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/enviroment";
import {BrandRequest} from "./model/request/BrandRequest";

@Injectable({
  providedIn:'root'
})
export class BrandService {
  private url = environment.REST_API_SERVER + "/brands"
  constructor(private httpClient: HttpClient) {
  }

  createBrand(request: BrandRequest) {
    return this.httpClient.post(this.url, request);
  }
  getAllBrand(page: number | null, limit: number | null) {
    let url = this.url ;
    const attribute: Array<String> = new Array<String>()
    if(page != null) {
      attribute.push(`page=${page}`)
    }
    if(limit != null) {
      attribute.push(`limit=${limit}`)
    }
    url += (attribute.length != 0) ? `?${attribute.join("&")}` : ''
    return this.httpClient.get(url);
  }
}
