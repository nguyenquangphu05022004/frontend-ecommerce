import {UserSimpleModelView} from "./UserSimpleModelView";
import {EvaluationProfileModelView} from "./EvaluationProfileModelView";
import {OrderModelView} from "./OrderModelView";
import {VendorModelView} from "./VendorModelView";


export interface UserModelView extends UserSimpleModelView{
  evaluations: Array<EvaluationProfileModelView>
  orders: Array<OrderModelView>
  vendors: Array<VendorModelView>

}
