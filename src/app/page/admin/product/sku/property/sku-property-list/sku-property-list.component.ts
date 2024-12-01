import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sku-property-list',
  templateUrl: './sku-property-list.component.html',
  styleUrls: ['./sku-property-list.component.css']
})
export class SkuPropertyListComponent {
  @Input() skuId!: number | undefined;

}
