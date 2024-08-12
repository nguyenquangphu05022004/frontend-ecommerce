import {EvaluationSimpleModelView} from "./EvaluationSimpleModelView";

export interface EvaluationDetailsModelView extends EvaluationSimpleModelView{
  children: Array<EvaluationDetailsModelView>
}
