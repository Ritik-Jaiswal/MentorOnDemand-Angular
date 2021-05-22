import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserCurrentTrainingsComponent } from './user-current-trainings.component';

describe('UserCurrentTrainingsComponent', () => {
  let component: UserCurrentTrainingsComponent;
  let fixture: ComponentFixture<UserCurrentTrainingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCurrentTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCurrentTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
