import {Component, Input} from '@angular/core';
import {EvaluationProfileModelView} from "../../services/api/model/view/EvaluationProfileModelView";


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent {
  @Input()
  evaluations?: Array<EvaluationProfileModelView>;
}
