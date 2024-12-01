import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuPropertyFormComponent } from './sku-property-form.component';

describe('SkuPropertyFormComponent', () => {
  let component: SkuPropertyFormComponent;
  let fixture: ComponentFixture<SkuPropertyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkuPropertyFormComponent]
    });
    fixture = TestBed.createComponent(SkuPropertyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
