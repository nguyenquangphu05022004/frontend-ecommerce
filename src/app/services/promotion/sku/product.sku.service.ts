import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environment/enviroment";
import {CommonResult} from "../../common.result";
import {ProductSkuResVO} from "./product.sku.res.vo";

@Injectable({
  providedIn: 'root'
})
export class ProductSkuService {

  url: string = environment.REST_API_SERVER + "/product-skus"
  constructor(private client: HttpClient) {
  }
  createProductSku(request: any) {
    return this.client.post(this.url, request)
  }
  getListByProductSpu(productSpuId?: number) {
    return this.client.get<CommonResult<Array<ProductSkuResVO>>>(`${this.url}/product-spu/${productSpuId}`)
  }
}
