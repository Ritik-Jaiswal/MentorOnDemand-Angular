import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MentorCompletedTrainingsComponent } from './mentor-completed-trainings.component';

describe('MentorCompletedTrainingsComponent', () => {
  let component: MentorCompletedTrainingsComponent;
  let fixture: ComponentFixture<MentorCompletedTrainingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorCompletedTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorCompletedTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
