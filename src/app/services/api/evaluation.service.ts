import {Injectable} from "@angular/core";
import {environment} from "../../../environment/enviroment";
import {HttpClient} from "@angular/common/http";
import {APIListResponse} from "./model/output.model";
import {Evaluation} from "./model/object.model";

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private url : string = environment.REST_API_SERVER

  constructor(private client: HttpClient) {
  }

  getAllEvaluationByProductId(productId: number | undefined) {
    return this.client.get<APIListResponse<Evaluation>>(`${this.url}/evaluations/product/${productId}`);
  }

  getAllEvaluationByUserId(userId: number | undefined) {
    return this.client.get<APIListResponse<Evaluation>>(`${this.url}/evaluations/user/${userId}`);
  }


}
