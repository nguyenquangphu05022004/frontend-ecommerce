import { Component } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html'
})
export class BrandComponent {
  enForm: boolean = false
  enList: boolean = true
  enFormComponent() {
    this.enForm = true
    this.enList = false
  }
  enListComponent() {
    this.enList = true
    this.enForm = false
  }
}
