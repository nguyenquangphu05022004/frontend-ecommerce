import {Component, Input} from '@angular/core';
import {VendorService} from "../../services/api/vendor.service";
import {VendorUserProfileModelView} from "../../services/api/model/view/VendorUserProfileModelView";

@Component({
  selector: 'app-user-follow-vendor',
  templateUrl: './user-follow-vendor.component.html',
  styleUrls: ['./user-follow-vendor.component.css']
})
export class UserFollowVendorComponent {
  @Input()
  vendors: Array<VendorUserProfileModelView> | undefined;

  constructor(private vendorService: VendorService) {
  }

  cancelFollow(vendorId: number) {
    this.vendorService.cancelFollow(vendorId)
      .subscribe({
        next: (response) => {
          if(response.status === 200) {
            this.vendors = this.vendors?.filter((vendor) => vendor.id !== vendorId);
          }
        }
      })
  }
}
