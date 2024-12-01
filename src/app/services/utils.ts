import {HttpHeaders} from "@angular/common/http";
import {AuthenResponse} from "./api/model/response/AuthenResponse";
import {AuthLoginResVO} from "./sys/auth/auth.login.res.vo";

export class Utils {
  public static getHeader() {
    const headers = new HttpHeaders()
    .set("Authorization", `UUID ${this.getAuth().accessToken}`)
    .set('Content-Type', 'application/json; charset=utf-8')
    return headers;
  }
  public static getAuth() {
      // @ts-ignore
    const authResponse: AuthLoginResVO = JSON.parse(localStorage.getItem("jwt"))
    return authResponse;
  }
  public static isTokenExpired() {
    // @ts-ignore
    const authResponse: AuthenResponse = JSON.parse(localStorage.getItem("jwt"))
    if(authResponse == null || authResponse === undefined) {
      return true;
    }
    return authResponse.expiredAt > Date.now()
  }
}
