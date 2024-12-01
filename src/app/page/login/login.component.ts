import {Component} from '@angular/core';
import {AuthService} from "../../services/sys/auth/auth.service";

interface Request {
  username?: string
  password?: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    authenRequest: Request = {}
    messageResponse: any;


    constructor(private authService: AuthService) {
    }


  login() {
    this.authService.authenticate(this.authenRequest)
      .subscribe({
        next: response => {
            localStorage.setItem("jwt", JSON.stringify(response.data))
            window.location.href='/admin/dashboard'
        },
        error: err => {
          alert("Password or username invalid")
          console.error(err)
        }
      })
  }
}
