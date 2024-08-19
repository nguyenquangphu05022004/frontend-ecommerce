import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/api/product.service";
import {CategoryService} from "../../services/api/category.service";
import {CartService} from "../../services/api/cart.service";
import {CategoryModelView} from "../../services/api/model/view/CategoryModelView";
import {ProductDetailsViewModel} from "../../services/api/model/view/ProductDetailsViewModel";
import {CartRequest} from "../../services/api/model/request/CartRequest";
import {ProductInventoryModelView} from "../../services/api/model/view/ProductInventoryModelView";
import {AttributeKey} from "../../services/api/model/view/AttributeKey";
import {Utils} from "../../services/utils";

// @ts-ignore
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  attributeKeys : Array<AttributeKey> = new Array<AttributeKey>()
  productInventory?: ProductInventoryModelView
  categories: Array<CategoryModelView> = new Array<CategoryModelView>();
  product?: ProductDetailsViewModel
  cartRequest: CartRequest = new CartRequest()
  imageUrl? : string ;
  constructor(
    private activedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService: CartService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const productId: string = this.activedRoute.snapshot.params["id"]
    const productSlug: string = this.activedRoute.snapshot.params["slug"]
    this.productService.getProductById(productId, productSlug)
      .subscribe({
        next: (response) => {
          if (response.status === 200) {
            this.product = response.data;
          } else {
            alert("Product not found")
          }
        }
      })
    this.productService.getAllAttributeKey()
      .subscribe({
        next: response => {
          if(response.status == 200) {
            this.attributeKeys = response.data;
          }
        }
      })
    this.categoryService.getAllCategoryParent(null, null)
      .subscribe({
        next: (response) => {
          if (response.status === 200) {
            this.categories = response.data;
          } else {
            alert("get categories error")
          }
        }
      })
    this.imageUrl = this.product?.imageUrl;
  }

  buyProduct() {
    if (Utils.isTokenExpired()) {
      window.location.href = "/login"
    }
    this.observableAddProduct().subscribe({
      next: (response) => {
        if(response.status == 200) {
          this.router.navigateByUrl("/cart", {
            state: {
              "itemOrder": this.cartRequest
            }
          })
        }
      },
    })
  }

  increaseQuantity() {
      this.cartRequest.quantity += 1;
  }

  decreaseQuantity() {
    if (this.cartRequest.quantity > 1) {
      this.cartRequest.quantity = this.cartRequest.quantity - 1;
    }
  }


  addProductIntoCart() {
    if(this.productInventory === undefined) {
      alert("Please choose product before action")
    } else {
      this.observableAddProduct().subscribe({
        next: (response) => {
          if(response.status === 200) {
            alert("You add a product into cart")
          } else {
            alert("Error add product into cart")
          }
        }
      })
    }
  }

  private observableAddProduct() {
    return this.cartService.addProduct(this.cartRequest);
  }

  changeImage(i: number) {
    // @ts-ignore
    this.imageUrl = this.product?.imageUrls?.at(i);
  }
}
