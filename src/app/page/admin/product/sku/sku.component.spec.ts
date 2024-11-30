import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuComponent } from './sku.component';

describe('SkuComponent', () => {
  let component: SkuComponent;
  let fixture: ComponentFixture<SkuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkuComponent]
    });
    fixture = TestBed.createComponent(SkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
