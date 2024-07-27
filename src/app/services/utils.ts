import {HttpHeaders} from "@angular/common/http";
import {TokenService} from "./token.service";

export class Utils {
  public static getHeader() {
    const headers = new HttpHeaders()
    .set("Authorization", `Bearer ${TokenService.getToken()}`)
    .set('Content-Type', 'application/json; charset=utf-8')
    return headers;
  }
}
