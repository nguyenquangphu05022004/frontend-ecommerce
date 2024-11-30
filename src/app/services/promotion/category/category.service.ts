import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environment/enviroment";
import {CategoryModelView} from "../../api/model/view/CategoryModelView";
import {APIListResponse} from "../../api/model/response/APIListResponse";
import {APIResponse} from "../../api/model/response/APIResponse";
import {CategoryResVO} from "./category.res.vo";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string= `${environment.REST_API_SERVER}/categories`

  constructor(private httpClient: HttpClient) { }

  createCategory(req: any) {
      return this.httpClient.post<any>(this.url, req);
  }

  getListProductCategory() {
    return this.httpClient.get<APIListResponse<CategoryResVO>>(this.url)
  }



}
