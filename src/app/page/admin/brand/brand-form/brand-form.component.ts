import { Component } from '@angular/core';
import {BrandService} from "../../../../services/promotion/brand/brand.service";

/**
 *   private String name;
 *     private String slug;
 *     private String thumbnail;
 */
interface  Request {
  name?: string
  slug?: string
  thumbnail?: string
}
@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.css']
})
export class BrandFormComponent {
  request: Request = {}
  constructor(private brandService: BrandService) {
  }

  createBrand() {
    this.brandService.createProductBrand(this.request)
      .subscribe({
        next: res => {
          alert("Ok")
          this.request = {}
        },
        error: err => {
          alert("Error")
          console.log("Error create brand: ", err)
        }
      })
  }
}
