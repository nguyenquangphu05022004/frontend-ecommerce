import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../../services/api/model/object.model";
import {Router} from "@angular/router";

declare var $: any;
@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent{

  @Input()
  categories: Array<Category> = new Array<Category>();

  constructor(private router: Router) {
  }

  async searchProduct(parentId: number | undefined, childrenId: number | undefined) {
      await this.router.navigateByUrl("/shop", {
        state: {category: {
              parentId: parentId,
              childrenId: childrenId
          }}
      });
      return;
  }
}
