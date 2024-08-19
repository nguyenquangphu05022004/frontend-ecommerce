import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/api/category.service";
import {ProductService} from "../../services/api/product.service";
import {CategoryModelView} from "../../services/api/model/view/CategoryModelView";
import {ProductGalleryModelView} from "../../services/api/model/view/ProductGalleryModelView";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  categories: Array<CategoryModelView> = new Array<CategoryModelView>()
  products: Array<ProductGalleryModelView> = new Array<ProductGalleryModelView>()
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
    ) {
  }

  ngOnInit(): void {
        this.categoryService.getAllCategoryParent(null, null)
          .subscribe({
            next: (response) => {
              if(response.status == 200) {
                this.categories = response.data;
              }
            }
          })
        this.productService.getAllProduct(null)
          .subscribe({
            next: (response) => {
              if(response.status === 200) {
                this.products = response.data;
              }
            }
          })

    }
}
