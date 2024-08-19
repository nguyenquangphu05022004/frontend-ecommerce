import {VendorModelView} from "./VendorModelView";
import {CategoryModelView} from "./CategoryModelView";
import {BrandModelView} from "./BrandModelView";

export interface ProductModelView {
  name: string;
  price: number;
  description: string;
  category: CategoryModelView;
  productBrand: BrandModelView;
  imageUrl: string;
  slug: string;
  vendor: VendorModelView;
  id: number;
}
