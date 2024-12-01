import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environment/enviroment";
import {CommonResult} from "../../common.result";
import {AuthLoginResVO} from "./auth.login.res.vo";


@Injectable({
  providedIn:"root"
})
export class AuthService {

  private url: string = environment.REST_API_SERVER + "/auth";

  constructor(private httpClient: HttpClient) {
  }

  authenticate(authenRequest: any) {
    return this.httpClient.post<CommonResult<AuthLoginResVO>>(
      `${this.url}/login`, authenRequest
    );
  }
  register(request: any) {
    return this.httpClient.post<CommonResult<any>>(
      `${this.url}/register`,
      request
    )
  }
}
