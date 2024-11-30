import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/sys/user.service";


interface Request {
  username?: string
  password?: string
  firstName?: string
  lastName?: string
  email?: string
  phoneNumber?: string
  sex?: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerRequest: Request = {}
  constructor(private authService: UserService) {
  }

  register() {
    console.log(this.registerRequest)
    this.authService.createUserMember(this.registerRequest)
      .subscribe({
        next: (response) => {
          alert("Register successfully")
          window.location.href = '/login'
        }
      })
  }
}
