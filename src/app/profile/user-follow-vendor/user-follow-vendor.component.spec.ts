import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowVendorComponent } from './user-follow-vendor.component';

describe('UserFollowVendorComponent', () => {
  let component: UserFollowVendorComponent;
  let fixture: ComponentFixture<UserFollowVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFollowVendorComponent]
    });
    fixture = TestBed.createComponent(UserFollowVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
