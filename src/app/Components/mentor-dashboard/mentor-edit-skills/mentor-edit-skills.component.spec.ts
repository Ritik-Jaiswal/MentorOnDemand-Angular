import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MentorEditSkillsComponent } from './mentor-edit-skills.component';

describe('MentorEditSkillsComponent', () => {
  let component: MentorEditSkillsComponent;
  let fixture: ComponentFixture<MentorEditSkillsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorEditSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorEditSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
