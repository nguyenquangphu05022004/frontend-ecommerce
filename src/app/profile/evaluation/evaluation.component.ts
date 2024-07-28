import {Component, Input} from '@angular/core';
import {Evaluation} from "../../services/api/model/UserProfile";


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent {
  @Input()
  evaluations: Array<Evaluation> | undefined;
}
