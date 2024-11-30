import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpuListComponent } from './spu-list.component';

describe('SpuListComponent', () => {
  let component: SpuListComponent;
  let fixture: ComponentFixture<SpuListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpuListComponent]
    });
    fixture = TestBed.createComponent(SpuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
