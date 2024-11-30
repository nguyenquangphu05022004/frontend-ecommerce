import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
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
