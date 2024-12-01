import {Component, Input} from '@angular/core';
import {ProductSkuService} from "../../../../../services/promotion/sku/product.sku.service";

interface Request {
  productSpuId?: number
  price?: number
image?: string
quantity?:number
}
@Component({
  selector: 'app-sku-form',
  templateUrl: './sku-form.component.html',
  styleUrls: ['./sku-form.component.css']
})
export class SkuFormComponent {
  @Input()
  productSpu?: number
  request: Request = {}
  constructor(private skuService:ProductSkuService) {
  }
  createSku() {
    this.request.productSpuId = this.productSpu
    this.skuService.createProductSku(this.request)
      .subscribe({
        next: res => {
          alert("Ok")
          this.request = {}
        },
        error: err => {
          alert("Error")
          console.error(err)
        }
      })
  }
}
