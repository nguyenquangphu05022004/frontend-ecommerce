import {Token} from "./api/model/output.model";

export class TokenService {

  constructor() { }

  public static getToken(): string | null {
    if(this.isExpired()) {
      return null;
    }
    return this.getTokenObject().token
  }

  public static setToken(token: Token | null | undefined) {
    if(token !== null && token !== undefined) {
      localStorage.setItem("jwt", JSON.stringify(token));
    } else {
      localStorage.removeItem("jwt");
    }
  }

  public static isExpired(): boolean {
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

  public static getTokenObject() {
    //@ts-ignore
    const token: Token = JSON.parse(localStorage.getItem("jwt"))
    return token;
  }

}
