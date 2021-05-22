import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MentorDashboardComponent } from './mentor-dashboard.component';

describe('MentorDashboardComponent', () => {
  let component: MentorDashboardComponent;
  let fixture: ComponentFixture<MentorDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
