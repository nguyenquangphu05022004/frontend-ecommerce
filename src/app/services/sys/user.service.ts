import {Injectable} from "@angular/core";
import {environment} from "../../../environment/enviroment";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = environment.REST_API_SERVER + "/users";

  constructor(private httpClient: HttpClient) {
  }

  createUserMember(req: any) {
    return this.httpClient.post(this.url, req)
  }

}
