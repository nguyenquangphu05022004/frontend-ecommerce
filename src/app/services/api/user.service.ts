import {HttpClient} from "@angular/common/http";
import {RegisterRequest} from "./model/input.model";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn:'root'
})
export class UserService {

  private url: string = "/users"

  constructor(private httpClient: HttpClient) {
  }

  registerAccount(register: RegisterRequest) {
    return this.httpClient.post(this.url, register);
  }

  uploadUserAvatar(formData: FormData) {
    const url = `${this.url}/avatar`;
    return this.httpClient.post(url, formData);
  }
}
