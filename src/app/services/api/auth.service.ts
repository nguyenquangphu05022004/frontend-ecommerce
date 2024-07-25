import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenRequest, RegisterRequest} from "./model/input.model";
import {environment} from "../../../environment/enviroment";
import {APIResponse, Token} from "./model/output.model";

@Injectable({
  providedIn:"root"
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  logout() {
    return this.httpClient.get(`${environment.REST_API_SERVER}/auth/logout`)
  }

  authenticate(authRequest: AuthenRequest) {
    return this.httpClient.post<APIResponse<Token>>(`${environment.REST_API_SERVER}/auth/login`, authRequest);
  }

  registerAccount(register: RegisterRequest) {
    return this.httpClient.post<APIResponse<any>>(`${environment.REST_API_SERVER}/auth/register`, register);
  }
}
