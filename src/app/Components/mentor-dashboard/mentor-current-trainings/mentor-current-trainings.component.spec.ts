import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MentorCurrentTrainingsComponent } from './mentor-current-trainings.component';

describe('MentorCurrentTrainingsComponent', () => {
  let component: MentorCurrentTrainingsComponent;
  let fixture: ComponentFixture<MentorCurrentTrainingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorCurrentTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorCurrentTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
