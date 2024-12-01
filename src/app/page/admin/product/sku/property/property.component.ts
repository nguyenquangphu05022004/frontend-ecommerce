import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {
  enableList: boolean = true;
  enableForm: boolean = false

  @Input()
  productSku?: number

  enableFormF() {
    this.enableList = false
    this.enableForm = true
  }

  enableListF() {
    this.enableForm = false
    this.enableList = true
  }
}
