import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/enviroment";
import {APIListResponse} from "./model/response/APIListResponse";


@Injectable({
  providedIn: 'root'
})
export class AttributeKeyService {

  private url: string = environment.REST_API_SERVER + "/attributes"

  constructor(private httpClient: HttpClient) {
  }

  getAllAttributeKey() {
    return this.httpClient.get<APIListResponse<any>>(this.url);
  }
}
