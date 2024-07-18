import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {VendorRequest} from "./model/input.model";


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

}
