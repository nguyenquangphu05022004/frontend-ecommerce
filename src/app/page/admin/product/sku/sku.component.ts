import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.css']
})
export class SkuComponent {
  enableList: boolean = true;
  enableForm: boolean = false

  @Input()
  productSpu?: number

  enableFormF() {
    this.enableList = false
    this.enableForm = true
  }

  enableListF() {
    this.enableForm = false
    this.enableList = true
  }
}