import {Component, OnInit} from '@angular/core';
import {Category, Product, SortProductType} from "../../services/api/model/object.model";
import {CategoryService} from "../../services/api/category.service";
import {ProductService} from "../../services/api/product.service";
import {CartService} from "../../services/api/cart.service";
import {KeySearchRequest} from "../../services/api/model/input.model";
import {APIListResponse} from "../../services/api/model/output.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  categories: Array<Category> = new Array<Category>()
  responseProducts: APIListResponse<Product> = {}
  categoryChildren: Array<Category> | undefined = new Array<Category>();
  typeSortList: SortProductType = new SortProductType();
  //properties for search product
  keys: Map<String, String> = new Map<String, String>()
  query: any; //text for search product,
  startPrice: any;
  endPrice: any;
  sortType: any;
  page: any = 1;

  //properties for search product

  catePass: CatePass | undefined = {}

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {
    if (this.router.getCurrentNavigation()?.extras.state !== undefined) {
      //@ts-ignore
      this.catePass = this.router.getCurrentNavigation()?.extras.state.category;
      if (this.catePass != undefined) {
        this.keys.set(KeySearchRequest.CATEGORY_PARENT_ID, this.catePass.parentId + "")
        if (this.catePass.childrenId != undefined) {
          this.keys.set(KeySearchRequest.CATEGORY_CHILDREN_ID + this.catePass.childrenId, this.catePass.childrenId + "");
        }
      }
    }else {
      this.catePass = undefined
    }
    console.log("underfaind: " + this.catePass)

  }

  ngOnInit(): void {
    console.log("hohoh")
    this.categoryService.getAllCategory().subscribe({
      next: (data) => {
        this.categories = data
        if (this.catePass === undefined) {
          this.updateChildrenCategory()
        }
        else {
          this.categories.forEach(cate => {
            if (cate.id === this.catePass?.parentId) {
              this.categoryChildren = cate.children
            }
          })
        }
      }
    })

    if (this.catePass === undefined) {
      this.productService.getAllProduct(null).subscribe({
        next: (data) => {
          this.responseProducts = data
        }
      })
    } else {
      console.log(this.categories)
      this.searchProduct()
    }
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
    this.deleteKeyCategory()
    const index = event.target.value;
    this.categoryChildren = new Array<Category>()
    if (index != -1) {
      //@ts-ignore
      this.categoryChildren = this.categories.at(index).children
      this.keys.set(KeySearchRequest.CATEGORY_PARENT_ID, this.categories?.at(index)?.id + "")
    } else if (index == -1) {
      this.updateChildrenCategory()
    }
    this.searchProduct()
  }

  setCategoryChildren(event: any) {
    console.log(this.categoryChildren)
    const cateId = event.target.value;
    if (this.keys.has(KeySearchRequest.CATEGORY_CHILDREN_ID + cateId)) {
      this.keys.delete(KeySearchRequest.CATEGORY_CHILDREN_ID + cateId)
    } else {
      this.keys.set(KeySearchRequest.CATEGORY_CHILDREN_ID + cateId, cateId);
    }
    this.searchProduct()
  }

  searchProduct() {
    const filter = {
      limit: this.responseProducts.limit === undefined ? 9 : this.responseProducts.limit,
      page: this.page,
      sortProductType: this.sortType,
      mapKey: Object.fromEntries(this.keys)
    }
    console.log(JSON.stringify(filter))
    this.productService.getAllProduct(filter)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.responseProducts = data
        }
      })
  }

  setPage(page: Number) {
    this.page = page;
    this.searchProduct()
    // this.searchProduct()
  }

  setSortType(event: any) {
    this.sortType = event.target.value;
    this.searchProduct()
  }

  setQuery() {
    this.keys.set(KeySearchRequest.PRODUCT_NAME, this.query);
    this.searchProduct()
  }

  setPrice() {
    this.keys.set(KeySearchRequest.PRICE, `${this.startPrice};${this.endPrice}`)
    this.searchProduct()
  }

  private deleteKeyCategory() {
    this.keys.delete(KeySearchRequest.CATEGORY_PARENT_ID);
    if (this.categoryChildren != undefined) {
      this.categoryChildren.forEach((cate) => {
        this.keys.delete(KeySearchRequest.CATEGORY_CHILDREN_ID + cate.id)
      })
    }
  }

  private updateChildrenCategory() {
    this.categoryChildren = new Array<Category>()
    this.categories.forEach(cate => {
      if (cate.children !== undefined) {
        //@ts-ignore
        this.categoryChildren.push(...cate.children);
      }
    })
  }

  protected readonly KeySearchRequest = KeySearchRequest;
}


export interface CatePass {
  parentId?: number,
  childrenId?: number
}
