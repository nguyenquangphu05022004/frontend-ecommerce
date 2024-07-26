import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AuthService} from "../services/api/auth.service";
import {TokenService} from "../services/token.service";
import {Router} from "@angular/router";
import {Pair, Status} from "../services/api/model/object.model";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
      @Input()
      typeButton: Pair<number, string> = {};
      @Input() requestAuthen: any
      @Output() responseMessage: EventEmitter<string> = new EventEmitter<string>()

      constructor(
        private authService: AuthService,
        private router: Router
      ) {
      }

      onLogout() {
        this.authService.logout()
          .subscribe({
            next: () => {
              TokenService.setToken(undefined)
              this.router.navigateByUrl("/login")
            }
          })
      }

      onLogin() {
        console.log(Date.now())
        this.authService.authenticate(this.requestAuthen)
          .subscribe({
            next: (apiResponse) => {
              if(apiResponse.status === Status.SUCCESS ){
                TokenService.setToken(apiResponse.data);
                localStorage.setItem('isExpired', "1")
                this.router.navigateByUrl("/home")
              } else {
                alert("Username and password invalid")
              }
            }
          })
      }

      onRegister() {
        this.authService.registerAccount(this.requestAuthen)
          .subscribe({
            next: (apiResponse) => {
              if(apiResponse.status === Status.SUCCESS) {
                this.router.navigateByUrl("/home");
              } else {
                alert("Account that you register invalid")
              }
            }
          })
      }

}
