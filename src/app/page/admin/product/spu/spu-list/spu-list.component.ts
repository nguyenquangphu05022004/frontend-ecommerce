import {Component, OnInit} from '@angular/core';
import {ProductSpuResVO} from "../../../../../services/promotion/spu/product.spu.res.vo";
import {ProductSpuService} from "../../../../../services/promotion/spu/product.spu.service";
import {CommonResult} from "../../../../../services/common.result";
import {Utils} from "../../../../../services/utils";
import {PageResult} from "../../../../../services/page.result";

@Component({
  selector: 'app-spu-list',
  templateUrl: './spu-list.component.html',
  styleUrls: ['./spu-list.component.css']
})
export class SpuListComponent implements OnInit{
  spuList?: PageResult<ProductSpuResVO>
  constructor(private spuService: ProductSpuService) {
  }

  ngOnInit(): void {
    this.spuService.getListProductBySellerUserMemberId(Utils.getAuth().userId)
      .subscribe({
        next: res => {
          this.spuList = res.data
        },
        error: err => {
          alert("error")
          console.error(err)
        }
      })
    }


}
