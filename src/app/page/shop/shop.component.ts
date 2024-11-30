import {Component} from '@angular/core';
import {CategoryService} from "../../services/promotion/category/category.service";
import {ProductService} from "../../services/api/product.service";
import {Router} from "@angular/router";
import {CategoryModelView} from "../../services/api/model/view/CategoryModelView";
import {ProductGalleryModelView} from "../../services/api/model/view/ProductGalleryModelView";
import sortTypes, {
  FilterProductRequest,
  KeySearch
} from "../../services/api/model/request/FilterProductRequest";
import {APIListResponse} from "../../services/api/model/response/APIListResponse";
import {BrandService} from "../../services/promotion/brand/brand.service";
import {BrandModelView} from "../../services/api/model/view/BrandModelView";
import {Utils} from "../../services/utils";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent  {
  filterProductRequest: FilterProductRequest = new FilterProductRequest()
  categories: Array<CategoryModelView> = new Array<CategoryModelView>()
  brands: Array<BrandModelView> = new Array<BrandModelView>()
  apiResponsesProduct?: APIListResponse<ProductGalleryModelView>
  categoryChildren: Array<CategoryModelView> | undefined = new Array<CategoryModelView>();
  catePass: CatePass | undefined = {}
  startPrice: number = 0;
  endPrice: number = 0;
  query: String = "";
  sortTypes = sortTypes;
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private brandService: BrandService,
    private router: Router
  ) {
    if(Utils.isTokenExpired()) {
      this.router.navigateByUrl("/login")
    } else {
      if (this.router.getCurrentNavigation()?.extras.state !== undefined) {
        //@ts-ignore
        this.catePass = this.router.getCurrentNavigation()?.extras.state.category;
        if (this.catePass != undefined) {
          this.filterProductRequest.data.set(KeySearch.CATEGORY_PARENT, this.catePass.parentId + "")
          if (this.catePass.childrenId != undefined) {
            this.filterProductRequest.data.set(
              KeySearch.CATEGORY_CHILDREN,
              this.filterProductRequest.data.has(KeySearch.CATEGORY_CHILDREN) ?
                this.filterProductRequest.data.get(KeySearch.CATEGORY_CHILDREN) + ";" + this.catePass.childrenId
                : this.catePass.childrenId + "");
          }
        }
      }else {
        this.catePass = undefined
      }
      console.log("underfaind: " + this.catePass)
    }

  }

  ngOnInit(): void {
    console.log("hohoh")
    // this.categoryService.getAllCategoryParent(null, null).subscribe({
    //   next: (data) => {
    //       if(data.status === 200) {
    //         this.categories = data.data;
    //         if (this.catePass === undefined) {
    //           this.updateChildrenCategory()
    //         }
    //         else {
    //           this.categories.forEach(cate => {
    //             if (cate.id === this.catePass?.parentId) {
    //               this.categoryChildren = cate.children
    //             }
    //           })
    //         }
    //       }
    //   }
    // })

    if (this.catePass === undefined) {
      this.productService.getAllProduct(null).subscribe({
        next: (data) => {
          if(data.status === 200) {
            this.apiResponsesProduct = data;
          }
        }
      })
    } else {
      console.log(this.categories)
      this.searchProduct()
    }

    // this.brandService.getAllBrand(null, null)
    //   .subscribe({
    //     next: response => {
    //       if(response.status === 200) {
    //         this.brands = response.data;
    //       }
    //     }
    //   })
  }


  setCategoryParent(event: any) {
    const index = event.target.value;
    this.categoryChildren = new Array<CategoryModelView>()
    this.filterProductRequest.data.delete(KeySearch.CATEGORY_CHILDREN)
    this.filterProductRequest.data.delete(KeySearch.CATEGORY_PARENT)
    if (index != -1) {
      //@ts-ignore
      this.categoryChildren = this.categories.at(index).children
      this.filterProductRequest.data.set(
        KeySearch.CATEGORY_PARENT,
        this.categories?.at(index)?.id + ""
      )
    } else if (index == -1) {
      this.updateChildrenCategory()
    }
    this.searchProduct()
  }

  setCategoryChildren(event: any) {
    console.log(this.categoryChildren)
    const cateId = event.target.value;
    if(!this.filterProductRequest.data.has(KeySearch.CATEGORY_CHILDREN)) {
      this.filterProductRequest.data.set(KeySearch.CATEGORY_CHILDREN, cateId)
    } else {
      const value = this.filterProductRequest.data.get(KeySearch.CATEGORY_CHILDREN);
      const ids = value?.split(";");
      let k : string | undefined;
      if(ids?.includes(cateId)) {
        k = ids?.filter((id) => id !== cateId)
          .join(";");
      } else {
        k = ids?.join(";") +";" + cateId;
      }
      this.filterProductRequest.data.set(
        KeySearch.CATEGORY_CHILDREN,
        k
      );
    }
    this.searchProduct()
  }

  searchProduct() {
    this.productService.getAllProduct(this.filterProductRequest)
      .subscribe({
        next: (data) => {
          if(data.status === 200) {
            this.apiResponsesProduct = data;
          }
        }
      })
  }

  setPage(page: Number) {
    this.filterProductRequest.page =page
    this.searchProduct()
    // this.searchProduct()
  }

  setSortType(event: any) {
    this.filterProductRequest.sortType = event.target.value;
    this.searchProduct()
  }

  setQuery() {
    this.filterProductRequest.data.set(KeySearch.NAME, this.query);
    this.searchProduct()
  }

  setPrice() {
    this.filterProductRequest.data.set(KeySearch.PRICE, `${this.startPrice};${this.endPrice}`)
    this.searchProduct()
  }


  private updateChildrenCategory() {
    this.categoryChildren = new Array<CategoryModelView>()
    this.categories.forEach(cate => {
      if (cate.children !== undefined) {
        //@ts-ignore
        this.categoryChildren.push(...cate.children);
      }
    })
  }

  getCheckedCategoryChildren(cateChildId: number) {
    if(this.filterProductRequest.data.has(KeySearch.CATEGORY_CHILDREN)) {
      return this.filterProductRequest.data.get(KeySearch.CATEGORY_CHILDREN)
        ?.split(";")
        .includes(cateChildId + "");
    }
    return false;
  }

  setBrand(event: any) {
    const id = event.target.value;
    if(id === "-1") {
      if(this.filterProductRequest.data.has(KeySearch.BRAND)) {
        this.filterProductRequest.data.delete(KeySearch.BRAND)
      }
    } else {
      this.filterProductRequest.data.set(KeySearch.BRAND, id)
    }
    this.searchProduct()
  }
}


export interface CatePass {
  parentId?: number,
  childrenId?: number
}
