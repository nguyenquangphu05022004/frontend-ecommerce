import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/enviroment";
import {CategoryModelView} from "./model/view/CategoryModelView";
import {APIListResponse} from "./model/response/APIListResponse";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string= `${environment.REST_API_SERVER}/categories`

  constructor(private httpClient: HttpClient) { }

  createCategory(formPart: FormData) {
      return this.httpClient.post(this.url, formPart);
  }

  getAllCategoryParent(page: number | null , limit: number | null) {
    const attrs = [];
    if(page != null) attrs.push(`page=${page}`)
    if(limit != null) attrs.push(`limit=${limit}`);
    const path = attrs.length != 0 ? `?${attrs.join("&")}` : '';
    return this.httpClient.get<APIListResponse<any>>(`${this.url}${path}`)
  }



}
