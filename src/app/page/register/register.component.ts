import { Component } from '@angular/core';
import {AuthService} from "../../services/api/auth.service";
import {RegisterRequest} from "../../services/api/model/request/RegisterRequest";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerRequest: RegisterRequest = new RegisterRequest();
  constructor(private authService: AuthService,
              private route: Router) {
  }

  register() {
    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          if(response.status == 200) {
            //redirect to login page
            this.route.navigateByUrl("/login");
          } else {
            alert("can't register, please see your information before click")
          }
        }
      })
  }
}
