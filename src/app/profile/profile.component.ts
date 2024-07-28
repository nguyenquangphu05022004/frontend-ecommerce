import { Component } from '@angular/core';
import {UserService} from "../services/api/user.service";
import {UserProfile} from "../services/api/model/UserProfile";
import {APIResponse} from "../services/api/model/output.model";
import {UserContactDetails} from "../services/api/model/object.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  userProfileResponse: APIResponse<UserProfile> = {}
  userContactDetails: UserContactDetails = {}
  constructor(private userService: UserService) {
  }

  getInfoUser() {
    this.userService.getInfoUser()
      .subscribe({
        next: (res) => {
          this.userProfileResponse = res;
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

}
