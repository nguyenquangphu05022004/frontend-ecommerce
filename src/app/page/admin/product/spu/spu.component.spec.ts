import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpuComponent } from './spu.component';

describe('SpuComponent', () => {
  let component: SpuComponent;
  let fixture: ComponentFixture<SpuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpuComponent]
    });
    fixture = TestBed.createComponent(SpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
