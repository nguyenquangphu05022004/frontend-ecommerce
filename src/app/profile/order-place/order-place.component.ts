import {Component, Input} from '@angular/core';
import {OrderModelView} from "../../services/api/model/view/OrderModelView";

@Component({
  selector: 'app-order-place',
  templateUrl: './order-place.component.html',
  styleUrls: ['./order-place.component.css']
})
export class OrderPlaceComponent {

  @Input()
  orders?: Array<OrderModelView> = new Array<OrderModelView>()
}
