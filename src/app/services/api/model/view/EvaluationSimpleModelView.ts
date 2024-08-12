import {UserSimpleModelView} from "./UserSimpleModelView";

export interface EvaluationSimpleModelView {
  id: number;
  user: UserSimpleModelView;
  rating: number;
  evalParentId: number;
  imageUrls: Array<String>

}
