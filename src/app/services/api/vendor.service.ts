import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/enviroment";
import {VendorRequest} from "./model/request/VendorRequest";
import {APIResponse} from "./model/response/APIResponse";
import {CouponModelView} from "./model/view/CouponModelView";
import {CouponRequest} from "./model/request/CouponRequest";



@Injectable({
  providedIn: "root"
})
export class VendorService {

  private url: string = environment.REST_API_SERVER + "/users/vendors"
  constructor(private httpClient: HttpClient) {
  }

  createVendor(request: VendorRequest) {
    return this.httpClient.post<APIResponse<any>>(this.url, request);
  }

  userFollowVendor(vendorId: number) {
    const url = `${this.url}/follow/${vendorId}`;
    return this.httpClient.put<APIResponse<any>>(url, null);
  }

  getCouponByVendorIdAndCouponCode(vendorId: number | undefined, couponCode: string) {
    const url = `${environment.REST_API_SERVER}/users/vendors/coupons/${vendorId}?couponCode=${couponCode}`
    return this.httpClient.get<APIResponse<any>>(url)
  }
  createCoupon(couponRequest: CouponRequest) {
    return this.httpClient.post<APIResponse<any>>(`${this.url}/coupons`, couponRequest);
  }
  cancelFollow(vendorId: number | undefined) {
    const url = `${environment.REST_API_SERVER}/users/vendors/follow?vendorId=${vendorId}`
    return this.httpClient.delete<APIResponse<any>>(url);
  }
}
