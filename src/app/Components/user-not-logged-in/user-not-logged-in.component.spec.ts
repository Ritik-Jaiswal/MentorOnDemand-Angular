import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserNotLoggedInComponent } from './user-not-logged-in.component';

describe('UserNotLoggedInComponent', () => {
  let component: UserNotLoggedInComponent;
  let fixture: ComponentFixture<UserNotLoggedInComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNotLoggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
