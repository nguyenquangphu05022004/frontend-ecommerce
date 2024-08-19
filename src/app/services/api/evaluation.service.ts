import {Injectable} from "@angular/core";
import {environment} from "../../../environment/enviroment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private url : string = environment.REST_API_SERVER + "/products/evaluations"

  constructor(private client: HttpClient) {
  }

  createEvaluation(formData: FormData) {
    return this.client.post(this.url, formData);
  }
  deleteById(id: number) {
    return this.client.delete(`${this.url}/${id}`)
  }


}
