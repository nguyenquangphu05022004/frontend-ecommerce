import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input()
  enableCategory: boolean = false
  @Input()
  enableBrand: boolean = false

  @Input()
  enableProduct: boolean = false
  enableCategoryComponent() {
    this.enableCategory = true;
    this.enableBrand = false
    this.enableProduct = false;
  }
  enableBrandComponent() {
    this.enableBrand = true
    this.enableCategory = false
    this.enableProduct = false;
  }

  enableProductComponent() {
    this.enableBrand = false
    this.enableCategory = false
    this.enableProduct = true;
  }
}
