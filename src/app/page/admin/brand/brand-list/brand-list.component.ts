import {Component, OnInit} from '@angular/core';
import {BrandResVO} from "../../../../services/promotion/brand/brand.res.vo";
import {BrandService} from "../../../../services/promotion/brand/brand.service";

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit{
  brands: Array<BrandResVO>  = new Array<BrandResVO>()

  constructor(private brandService: BrandService) {
  }

  ngOnInit(): void {
        this.brandService.getListProductBrand()
          .subscribe({
            next: result => {
              this.brands = result.data
            },
            error: err => {
              alert("Access denied")
              console.error(err)
            }
          })
    }


}
