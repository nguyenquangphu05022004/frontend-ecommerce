import {Component, Input, OnInit} from '@angular/core';
import {ProductSkuService} from "../../../../../services/promotion/sku/product.sku.service";
import {ProductSkuResVO} from "../../../../../services/promotion/sku/product.sku.res.vo";

@Component({
  selector: 'app-sku-list',
  templateUrl: './sku-list.component.html',
  styleUrls: ['./sku-list.component.css']
})
export class SkuListComponent implements OnInit{
  @Input()
  spuId?: number
  skuList:Array<ProductSkuResVO> = new Array<ProductSkuResVO>()
  constructor(private skuService: ProductSkuService) {
  }

  ngOnInit(): void {
       this.skuService.getListByProductSpu(this.spuId)
         .subscribe({
           next: res => {
             this.skuList = res.data
           },
           error: err => {
             alert("error")
             console.error(err)
           }
         })
    }


}
