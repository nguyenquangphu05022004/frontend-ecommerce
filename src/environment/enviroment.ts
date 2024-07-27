

// const bearerToken = localStorage.getItem("jwt");

// @ts-ignore
import {TokenService} from "../app/services/token.service";
import {HttpHeaders} from "@angular/common/http";
function getHeader() {
  const headers = new HttpHeaders();
  headers.set("Authorization", `Bearer ${TokenService.getToken()}`)
  headers.set('Content-Type', 'application/json; charset=utf-8')
  return headers;
}
export const environment = {
  "production": false,
  "REST_API_SERVER": "http://localhost:8081/api/v1",
}
// };
