import {ProductGalleryModelView} from "./ProductGalleryModelView";
import {EvaluationDetailsModelView} from "./EvaluationDetailsModelView";
import {VendorModelView} from "./VendorModelView";

export interface ProductDetailsViewModel extends ProductGalleryModelView{
  evaluations: Array<EvaluationDetailsModelView>;
  attributeMaps: Map<String, Array<String>>
  imageUrls: Array<String>;
  vendor: VendorModelView;

}
