import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/enviroment";
import {AuthRequest} from "./model/request/AuthRequest";
import {AuthenResponse} from "./model/response/AuthenResponse";
import {RegisterRequest} from "./model/request/RegisterRequest";
import {APIResponse} from "./model/response/APIResponse";
import {PasswordChangeRequest} from "./model/request/PasswordChangeRequest";
import {ForgetPasswordRequest} from "./model/request/ForgetPasswordRequest";

@Injectable({
  providedIn:"root"
})
export class AuthService {

  private url: string = environment.REST_API_SERVER + "/auth";

  constructor(private httpClient: HttpClient) {
  }

  authenticate(authenRequest: AuthRequest) {
    return this.httpClient.post<APIResponse<AuthenResponse>>(
      `${this.url}/login`, authenRequest
    );
  }
  register(request: RegisterRequest) {
    return this.httpClient.post<APIResponse<any>>(
      `${this.url}/register`,
      request
    )
  }
  forgetPassword(username: string) {
    return this.httpClient.post<APIResponse<any>>(
      `${this.url}/forget-password`,
      username
    )
  }
  forgetPasswordVerifyCode(code: string) {
    return this.httpClient.post<APIResponse<any>>(
      `${this.url}/forget-password-verify-code`,
      code
    )
  }
  forgetPasswordGeneration(forgetPasswordRequest: ForgetPasswordRequest) {
    return this.httpClient.post<APIResponse<any>>(
      `${this.url}/forget-password-verify-code`,
      forgetPasswordRequest
    )
  }
  changePassword(request: PasswordChangeRequest) {
    return this.httpClient.post<APIResponse<any>>(
      `${this.url}/password-change`,
      request
    )
  }




}
