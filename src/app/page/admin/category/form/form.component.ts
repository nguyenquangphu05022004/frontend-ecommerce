import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../../services/promotion/category/category.service";
import {CategoryResVO} from "../../../../services/promotion/category/category.res.vo";

/**
 * private String name;
 *     private Long categoryParentId;
 *     private String thumbnail;
 */
interface Request {
  name?: string
  categoryParentId?: number
  thumbnail?: string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  request: Request = {}
  categories: Array<CategoryResVO> = new Array<CategoryResVO>();
  constructor(private cateService: CategoryService) {
  }

  ngOnInit(): void {
    this.cateService.getListProductCategory().subscribe({
      next: res => {
        this.categories = res.data
      }
    })
        // throw new Error('Method not implemented.');
    }

  createCategory() {
    this.cateService.createCategory(this.request).subscribe({
      next: res => {
        alert("Ok")
        this.request = {}
      },
      error: err => {
        alert("Error")
        console.error("Loi khoi tao category: ", err)
      }
    })
  }

}
