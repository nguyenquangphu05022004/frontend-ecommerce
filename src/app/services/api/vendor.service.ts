import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {VendorRequest} from "./model/input.model";
import {Coupon} from "./model/object.model";
import {APIResponse} from "./model/output.model";
import {environment} from "../../../environment/enviroment";



@Injectable({
  providedIn: "root"
})
export class VendorService {

  private url: string = "/users/vendors"
  constructor(private httpClient: HttpClient) {
  }

  createVendor(request: VendorRequest) {
    return this.httpClient.post(this.url, request);
  }

  userFollowVendor(vendorId: number) {
    const url = `${this.url}/follow/${vendorId}`;
    return this.httpClient.put(url, null);
  }

  findCouponByVendorIdAndCouponCode(vendorId: number | undefined, couponCode: string) {
    const url = `${environment.REST_API_SERVER}/users/vendors/coupons/${vendorId}?couponCode=${couponCode}`
    return this.httpClient.get<APIResponse<Coupon>>(url)
  }

  cancelFollow(userId: number | undefined, vendorId: number | undefined) {
    const url = `${environment.REST_API_SERVER}/users/vendors/follow?userId=${userId}&vendorId=${vendorId}`
    return this.httpClient.delete(url);
  }
}
