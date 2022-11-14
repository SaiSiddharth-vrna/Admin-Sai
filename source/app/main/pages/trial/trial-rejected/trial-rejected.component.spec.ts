import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialRejectedComponent } from './trial-rejected.component';

describe('TrialRejectedComponent', () => {
  let component: TrialRejectedComponent;
  let fixture: ComponentFixture<TrialRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialRejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
