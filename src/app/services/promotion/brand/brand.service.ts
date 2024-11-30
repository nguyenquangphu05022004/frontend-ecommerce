import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environment/enviroment";
import {BrandRequest} from "../../api/model/request/BrandRequest";
import {APIListResponse} from "../../api/model/response/APIListResponse";
import {BrandModelView} from "../../api/model/view/BrandModelView";
import {CommonResult} from "../../common.result";
import {BrandResVO} from "./brand.res.vo";

@Injectable({
  providedIn:'root'
})
export class BrandService {
  private url = environment.REST_API_SERVER + "/brands"
  constructor(private httpClient: HttpClient) {
  }

  createProductBrand(request: any) {
    return this.httpClient.post<CommonResult<BrandResVO>>(this.url, request);
  }
  getListProductBrand() {
    return this.httpClient.get<CommonResult<Array<BrandResVO>>>(this.url);
  }
}
