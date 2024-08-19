import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryModelView} from "../../../services/api/model/view/CategoryModelView";

declare var $: any;
@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent{

  @Input()
  categories: Array<CategoryModelView> = new Array<CategoryModelView>();

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
