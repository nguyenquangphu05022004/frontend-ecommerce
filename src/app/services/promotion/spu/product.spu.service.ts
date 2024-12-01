import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environment/enviroment";
import {CommonResult} from "../../common.result";
import {ProductSpuResVO} from "./product.spu.res.vo";
import {PageResult} from "../../page.result";
import {Utils} from "../../utils";

@Injectable({
  providedIn: 'root'
})
export class ProductSpuService {
   url : string = environment.REST_API_SERVER + "/product-spus"
  constructor(private httpClient: HttpClient) {
  }
  createProductSpu(request: any) {
    return this.httpClient.post<CommonResult<ProductSpuResVO>>(
      `${this.url}`,
      request,
      {headers: Utils.getHeader()}
    )
  }
  getListProductBySellerUserMemberId(userMemberId?: number) {
    return this.httpClient.get<CommonResult<PageResult<ProductSpuResVO>>>(
      `${this.url}/seller/${userMemberId}`
    )
  }
}
