import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenRequest, RegisterRequest} from "./model/input.model";

@Injectable({
  providedIn:"root"
})
export class AuthService {
  private url: string = "/auth"

  constructor(private httpClient: HttpClient) {
  }

  authenticate(authRequest: AuthenRequest) {
    const url = `${this.url}/login`
    return this.httpClient.post(url, authRequest);
  }

  registerAccount(register: RegisterRequest) {
    const url = `${this.url}/register`
    return this.httpClient.post(url, register);
  }
}
