import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuListComponent } from './sku-list.component';

describe('SkuListComponent', () => {
  let component: SkuListComponent;
  let fixture: ComponentFixture<SkuListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkuListComponent]
    });
    fixture = TestBed.createComponent(SkuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
