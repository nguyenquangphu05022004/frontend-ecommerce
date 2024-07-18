import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "./model/object.model";
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string = "/categories"

  constructor(private httpClient: HttpClient) { }

  createCategory(formPart: FormData) {
      return this.httpClient.post(this.url, formPart);
  }

  getAllCategory() {
    return this.httpClient.get<Array<Category>>(this.url);
  }

  getById(categoryId: number) {
    const url = `${this.url}/${categoryId}`
    return this.httpClient.get<Category>(url)
  }


}
