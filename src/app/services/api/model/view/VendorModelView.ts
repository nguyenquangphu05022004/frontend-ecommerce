import {VendorUserProfileModelView} from "./VendorUserProfileModelView";

export interface VendorModelView extends VendorUserProfileModelView{
  createdAt: string;
  numberOfFollower: number;
  numberOfProducts: number
  percentRelyComment: number;

}
