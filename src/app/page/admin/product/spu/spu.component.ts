import { Component } from '@angular/core';
import {CategoryResVO} from "../../../../services/promotion/category/category.res.vo";
import {BrandResVO} from "../../../../services/promotion/brand/brand.res.vo";
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
export class SpuComponent {
  request: Request = {}
  categories: Array<CategoryResVO> = new Array<CategoryResVO>();
  brands: Array<BrandResVO> = new Array<BrandResVO>()
  createSpu() {
    console.log(this.request)
  }

}
