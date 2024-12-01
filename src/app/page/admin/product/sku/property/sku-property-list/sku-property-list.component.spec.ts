import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuPropertyListComponent } from './sku-property-list.component';

describe('SkuPropertyListComponent', () => {
  let component: SkuPropertyListComponent;
  let fixture: ComponentFixture<SkuPropertyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkuPropertyListComponent]
    });
    fixture = TestBed.createComponent(SkuPropertyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
