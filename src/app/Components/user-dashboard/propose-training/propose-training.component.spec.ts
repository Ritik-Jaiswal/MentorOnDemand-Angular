import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProposeTrainingComponent } from './propose-training.component';

describe('ProposeTrainingComponent', () => {
  let component: ProposeTrainingComponent;
  let fixture: ComponentFixture<ProposeTrainingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposeTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposeTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
