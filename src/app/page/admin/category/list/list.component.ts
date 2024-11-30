import {Component, OnInit} from '@angular/core';
import {CategoryResVO} from "../../../../services/promotion/category/category.res.vo";
import {CategoryService} from "../../../../services/promotion/category/category.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  categories: Array<CategoryResVO> = new Array<CategoryResVO>()

  constructor(private caSer: CategoryService) {
  }

  ngOnInit(): void {
        this.caSer.getListProductCategory().subscribe({
          next: res => {
            this.categories = res.data
          },
          error: err => {
            alert("Access denied")
            console.error(err)
          }
        })
    }


    getCatalog(cate?: CategoryResVO): string {
        let catalog = "";
        if(cate == undefined || cate == null) {
          return ""
        }
        catalog += cate.name;
        if(cate.categoryParent) {
          catalog += "<"
        }
        return catalog + this.getCatalog(cate?.categoryParent)
    }

}
