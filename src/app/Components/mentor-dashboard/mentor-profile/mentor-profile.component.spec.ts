import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MentorProfileComponent } from './mentor-profile.component';

describe('MentorProfileComponent', () => {
  let component: MentorProfileComponent;
  let fixture: ComponentFixture<MentorProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
