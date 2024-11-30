import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  enableList: boolean = true;
  enableForm: boolean = false


  enableFormF() {
    this.enableList = false
    this.enableForm = true
  }

  enableListF() {
    this.enableForm = false
    this.enableList = true
  }
}
