import {Component, Input} from '@angular/core';
import {Vendor} from "../../services/api/model/UserProfile";
import {VendorService} from "../../services/api/vendor.service";

@Component({
  selector: 'app-user-follow-vendor',
  templateUrl: './user-follow-vendor.component.html',
  styleUrls: ['./user-follow-vendor.component.css']
})
export class UserFollowVendorComponent {
    @Input()
    vendors: Array<Vendor> | undefined;
    @Input()
    userId: number | undefined;
    constructor(private vendorService: VendorService) {
    }
  cancelFollow(vendorId: number | undefined) {
    this.vendorService.cancelFollow(this.userId, vendorId)
      .subscribe({
        next: (res) => {
          alert("ok")
        },
        error: (err) => {
          alert("error")
          console.log(err)
        }
      })
  }
}
