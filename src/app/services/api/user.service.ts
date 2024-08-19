import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../../environment/enviroment";
import {APIResponse} from "./model/response/APIResponse";


@Injectable({
  providedIn:'root'
})
export class UserService {

  private url: string = environment.REST_API_SERVER + "/users";

  constructor(private httpClient: HttpClient) {
  }
  uploadUserAvatar(formData: FormData) {
    const url = `${this.url}/avatar`;
    return this.httpClient.post<APIResponse<any>>(url, formData);
  }

  getInfoUser() {
    const url = `${this.url}/info`
    return this.httpClient.get<APIResponse<any>>(url)
  }
}
