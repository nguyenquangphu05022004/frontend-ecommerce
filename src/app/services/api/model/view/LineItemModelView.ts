import {ItemViewModel} from "./ItemViewModel";
import {VendorModelView} from "./VendorModelView";

export interface LineItemModelView {
  id: number;
  vendor: VendorModelView;
  items: Array<ItemViewModel>;
}
