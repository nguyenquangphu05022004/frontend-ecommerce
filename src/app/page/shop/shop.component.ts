import {Component, OnInit} from '@angular/core';
import {Category, Product, SortProductType} from "../../services/api/model/object.model";
import {CategoryService} from "../../services/api/category.service";
import {ProductService} from "../../services/api/product.service";
import {CartService} from "../../services/api/cart.service";
import {FilterInputRequestProduct, KeySearchRequest} from "../../services/api/model/input.model";
import {APIListResponse} from "../../services/api/model/output.model";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{

    responseCategories: APIListResponse<Category> = {}
    responseProducts: APIListResponse<Product> = {}
    categoryChildren: Array<Category> | undefined = undefined;

    //properties for search product
    keys: Map<String, String> = new Map<String, String>()
    query: any; //text for search product,
    startPrice: any;
    endPrice: any;
    sortType: any;
    page: any
    //properties for search product

    constructor(
      private categoryService: CategoryService,
      private productService: ProductService,
      private cartService: CartService
    ) {
    }

  ngOnInit(): void {
        this.categoryService.getAllCategory().subscribe({
          next: (data) => {
            this.responseCategories = data
          }
        })
    this.productService.getAllProduct(null).subscribe({
      next: (data) => {
        this.responseProducts = data
      }
    })
  }


  addProductIntoCart(stockId: number | undefined, operation: string) {
    this.cartService.addProductIntoCart({
      "stockId": stockId,
      "operation": operation
    }).subscribe({
      next: (operation) => {
        console.log(operation)
      },
      error: () => {
        alert("Error ")
      }
    })
  }

  setCategoryParent(event: any) {
    this.keys = new Map<String, String>()
    const index = event.target.value;
    if(index == -1) {
      this.categoryChildren = undefined
      return;
    };
    this.keys.set(KeySearchRequest.CATEGORY_PARENT_ID, index)
    this.categoryChildren = this.responseCategories?.data?.at(index)?.children;
  }
  setCategoryChildren(event: any) {
      const index = event.target.value;
      if(this.keys.has(KeySearchRequest.CATEGORY_CHILDREN_ID + index)) {
        this.keys.delete(KeySearchRequest.CATEGORY_CHILDREN_ID + index)
      } else {
        this.keys.set(KeySearchRequest.CATEGORY_CHILDREN_ID + index, index);
      }
      console.log(this.keys)
  }

  searchProduct() {
      const filter = {
        limit: this.responseProducts.limit,
        page: this.page,
        sortProductType: this.sortType,
        pairs: this.keys
      }
      this.productService.getAllProduct(filter)
        .subscribe({
          next: (data) => {
            this.responseProducts =  data
          }
        })
  }

  setPage(page: Number) {
    this.page = page;
    alert(page)
    // this.searchProduct()
  }
}
