import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/api/user.service";
import {UserModelView} from "../services/api/model/view/UserModelView";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  user : UserModelView = new UserModelView();
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getInfoUser()
      .subscribe({
        next: response => {
          if(response.status === 200) {
            this.user = response.data;
          }
        }
      })
        // throw new Error('Method not implemented.');
    }

}
