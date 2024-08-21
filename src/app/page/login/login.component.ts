import {Component} from '@angular/core';
import {AuthRequest} from "../../services/api/model/request/AuthRequest";
import {AuthService} from "../../services/api/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    authenRequest: AuthRequest = {}
    messageResponse: any;


    constructor(private authService: AuthService) {
    }


  login() {
    this.authService.authenticate(this.authenRequest)
      .subscribe({
        next: response => {
          if(response.status === 200) {
            localStorage.setItem("jwt", JSON.stringify(response.data))
          }
        }
      })
  }
}
