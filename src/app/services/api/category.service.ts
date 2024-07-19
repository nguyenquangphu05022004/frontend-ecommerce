import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "./model/object.model";
import {environment} from "../../../environment/enviroment";
import {APIListResponse, APIResponse} from "./model/output.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string= `${environment.REST_API_SERVER}/categories`

  constructor(private httpClient: HttpClient) { }

  createCategory(formPart: FormData) {
      return this.httpClient.post(this.url, formPart);
  }

  getAllCategory() {
    return this.httpClient.get<APIListResponse<Category>>(this.url);
  }

  getById(categoryId: number) {
    const url = `${this.url}/${categoryId}`
    return this.httpClient.get<APIResponse<Category>>(url)
  }


}
