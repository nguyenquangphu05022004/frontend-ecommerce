import {VendorModelView} from "./VendorModelView";
import {ItemCartModelView} from "./ItemCartModelView";

export interface VendorCartModelView extends VendorModelView{
  items?: Array<ItemCartModelView>;
}
