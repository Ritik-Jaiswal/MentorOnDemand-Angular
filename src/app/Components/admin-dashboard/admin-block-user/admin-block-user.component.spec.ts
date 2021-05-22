import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminBlockUserComponent } from './admin-block-user.component';

describe('AdminBlockUserComponent', () => {
  let component: AdminBlockUserComponent;
  let fixture: ComponentFixture<AdminBlockUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBlockUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlockUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
