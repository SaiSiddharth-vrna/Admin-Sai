import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialApproveComponent } from './trial-approve.component';

describe('TrialApproveComponent', () => {
  let component: TrialApproveComponent;
  let fixture: ComponentFixture<TrialApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
