import {Component, Input} from '@angular/core';
import {AuthenRequest} from "../../services/api/model/input.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    authenRequest: AuthenRequest = {}
    messageResponse: any;


    getMessageLogin(message: any) {
      this.messageResponse = message;
    }

}
