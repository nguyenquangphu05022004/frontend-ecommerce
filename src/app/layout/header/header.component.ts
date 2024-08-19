import {Component} from '@angular/core';
import {Utils} from "../../services/utils";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  protected readonly Utils = Utils;
}
