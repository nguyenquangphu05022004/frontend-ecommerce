import {Component, OnInit, Output} from '@angular/core';
import {Category, Product} from "../../services/api/model/object.model";
import {CategoryService} from "../../services/api/category.service";
import {ProductService} from "../../services/api/product.service";
import {APIListResponse} from "../../services/api/model/output.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  categories: Array<Category> = new Array<Category>()
  responseProducts: APIListResponse<Product> = {}
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
    ) {
  }

  ngOnInit(): void {
        this.categoryService.getAllCategory()
          .subscribe({
            next: (data) => {
              this.categories = data
            },
            error: (err) => {
              console.log(err);
            }
          })
        this.productService.getAllProduct(null)
          .subscribe({
            next: (data) => {
              this.responseProducts = data;
            },
            error: (err) => {
              console.log(err)
            }
          })

    }
}
