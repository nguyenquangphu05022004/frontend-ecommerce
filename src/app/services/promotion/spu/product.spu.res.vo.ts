import {CategoryResVO} from "../category/category.res.vo";
import {BrandResVO} from "../brand/brand.res.vo";

export interface ProductSpuResVO {
  id: number
  productCategory?:CategoryResVO,
  productBrand?:BrandResVO
  slider?: Array<string>
  rating?: number
  numberOfComment?: number
  numberOfSales?: number,
  name: string
  description: string
  maxPrice: number
  minPrice: number
}
