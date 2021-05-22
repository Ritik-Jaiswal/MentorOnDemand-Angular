import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserCompletedTrainingsComponent } from './user-completed-trainings.component';

describe('UserCompletedTrainingsComponent', () => {
  let component: UserCompletedTrainingsComponent;
  let fixture: ComponentFixture<UserCompletedTrainingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCompletedTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompletedTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
