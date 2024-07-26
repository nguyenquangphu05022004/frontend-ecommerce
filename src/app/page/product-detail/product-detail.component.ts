import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/api/product.service";
import {APIResponse} from "../../services/api/model/output.model";
import {Category, Product, Stock} from "../../services/api/model/object.model";
import {CategoryService} from "../../services/api/category.service";
import {CartService} from "../../services/api/cart.service";
import {CartRequest} from "../../services/api/model/input.model";
import {Token} from "@angular/compiler";
import {TokenService} from "../../services/token.service";

// @ts-ignore
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  productResponseAPI: APIResponse<Product> = {}
  categories: Array<Category> = new Array<Category>()
  imagesUrl: Array<String> = new Array<String>()
  indexImageUrl: number = 0
  defaultStock: Stock | undefined =  {}
  stockClassificationId: number | undefined;
  quantityProduct: number = 1;
  constructor(
    private activedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService: CartService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const productId = this.activedRoute.snapshot.params["id"]
    this.productService.getProductById(productId)
      .subscribe({
        next: (responseAPI) => {
          this.productResponseAPI = responseAPI
          this.defaultStock = this.productResponseAPI.data?.stocks?.at(0);
          this.stockClassificationId = this.defaultStock?.stockClassifications?.at(0)?.id
          this.productResponseAPI.data?.stocks?.forEach(stock => {
            stock.imageUrls?.forEach(imageUrl => {
              this.imagesUrl.push(imageUrl)
            })
          })
          console.log(this.productResponseAPI)
        },
        error: (err) => console.error(err)
      })

    this.categoryService.getAllCategory()
      .subscribe({
        next: (response) => {
          this.categories = response;
        },
        error: (err) => console.log(err)
      })
    }


  changeImage(i: number) {
    this.indexImageUrl = i;
  }


  changeDefaultStock(e: any) {
    this.defaultStock = this.productResponseAPI.data?.stocks?.at(e.target.value);
    this.stockClassificationId = this.defaultStock?.stockClassifications?.at(0)?.id
  }

  buyProduct() {
    if(TokenService.isExpired()) {
      window.location.href = "/login"
    }
    console.log("Token: ",TokenService.isExpired())
    const cartRequest: CartRequest = {
      stockId: this.stockClassificationId,
      quantity: this.quantityProduct,
      operation: '+',
      stockClassificationId: this.stockClassificationId
    }
   this.observableAddProduct().subscribe({
     next: () => {
       this.router.navigateByUrl("/cart", {
         state: {
           "itemOrder": cartRequest
         }
       })
     },
     error: (err) => {
       alert("Error")
       console.log(err)
     }
   })
  }

  increaseQuantity() {
    this.quantityProduct = this.quantityProduct + 1;
  }

  decreaseQuantity() {
    if(this.quantityProduct > 1) {
      this.quantityProduct = this.quantityProduct - 1;
    }
  }


  addProductIntoCart() {
    return this.observableAddProduct().subscribe({
      next: (operation) => {
        alert("You add a product into cart")
      },
      error: () => {
        alert("Error when add product into cart")
      }
    })
  }

  private observableAddProduct() {
    return this.cartService.addProductIntoCart({
      stockId: this.stockClassificationId,
      quantity: this.quantityProduct,
      operation: '+',
      stockClassificationId: this.stockClassificationId
    });
  }
}
