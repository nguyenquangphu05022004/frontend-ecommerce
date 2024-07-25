import {Injectable} from '@angular/core';
import {Token} from "./api/model/output.model";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(): string | null {
    if(this.isExpired()) {
      return null;
    }
    return this.getTokenObject().token
  }

  setToken(token: Token | null | undefined) {
    if(token !== null && token !== undefined) {
      localStorage.setItem("jwt", JSON.stringify(token));
    } else {
      localStorage.removeItem("jwt");
    }
  }

  isExpired(): boolean {
    if(localStorage.getItem("jwt") !== null) {
      if(Date.now() >= this.getTokenObject().expiredAt) {
        localStorage.removeItem("jwt")
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  getTokenObject() {
    //@ts-ignore
    const token: Token = JSON.parse(localStorage.getItem("jwt"))
    return token;
  }

}
