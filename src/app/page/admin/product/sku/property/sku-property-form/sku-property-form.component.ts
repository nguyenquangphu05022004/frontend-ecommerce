import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sku-property-form',
  templateUrl: './sku-property-form.component.html',
  styleUrls: ['./sku-property-form.component.css']
})
export class SkuPropertyFormComponent {
  @Input() productSku!: number | undefined;

}
