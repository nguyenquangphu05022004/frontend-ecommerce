import {Component, OnInit} from '@angular/core';
import {CategoryResVO} from "../../../../services/promotion/category/category.res.vo";
import {BrandResVO} from "../../../../services/promotion/brand/brand.res.vo";
import {CategoryService} from "../../../../services/promotion/category/category.service";
import {BrandService} from "../../../../services/promotion/brand/brand.service";
import {ProductSpuService} from "../../../../services/promotion/spu/product.spu.service";
interface Request {
  productCategoryId?: number
  productBrandId?: number
  name?: string
  description?: string
  maxPrice?: number
  minPrice?: number
}
@Component({
  selector: 'app-spu',
  templateUrl: './spu.component.html',
  styleUrls: ['./spu.component.css']
})
export class SpuComponent implements OnInit{
  request: Request = {}
  categories: Array<CategoryResVO> = new Array<CategoryResVO>();
  brands: Array<BrandResVO> = new Array<BrandResVO>()


  constructor(private cateService: CategoryService,
              private brandService: BrandService,
              private productSpuService: ProductSpuService) {
  }

  createSpu() {
    console.log(this.request)
    this.productSpuService.createProductSpu(this.request)
      .subscribe({
        next: res => {
          alert("OK")
          this.request = {}
        },
        error: err => {
          alert("Error")
          console.error(err)
        }
      })
  }



  ngOnInit(): void {
    this.cateService.getListProductCategory().subscribe({
      next: res => {
        this.categories = res.data
      }
    })
    this.brandService.getListProductBrand().subscribe({
      next: res => {
        this.brands = res.data
      }
    })
  }

}
