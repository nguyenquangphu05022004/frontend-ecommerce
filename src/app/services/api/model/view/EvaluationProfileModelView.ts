import {EvaluationSimpleModelView} from "./EvaluationSimpleModelView";
import {ProductModelView} from "./ProductModelView";


export interface EvaluationProfileModelView extends EvaluationSimpleModelView{
  product: ProductModelView
}
