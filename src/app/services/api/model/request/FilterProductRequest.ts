export class FilterProductRequest {
  data: Map<String, String> = new Map<String, String>()
  sortType: String = "DEFAULT"
  page: Number = 1
  limit: number = 20
}
export enum KeySearch {
  CATEGORY_PARENT = "CateParentFilter",
  CATEGORY_CHILDREN = "CateChildrenFilter",
  NAME = "NameFilter",
  BRAND = "BrandFilter",
  PRICE = "PriceFilter",
  VENDOR = "VendorFilter"
}


const sortTypes = [
  {
    "key": "DEFAULT",
    "value": "Mac dinh"
  },
  {
    "key": "PRICE",
    "value": "Gia"
  },
  {
    "key": "RATE_AVERAGE",
    "value": "Trung binh danh gia"
  },
  {
    "key": "PRODUCT_SOLD",
    "value": "San pham ban chay"
  }
]
export default sortTypes;
