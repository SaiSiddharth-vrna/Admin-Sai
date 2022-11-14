import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialActiveComponent } from './trial-active.component';

describe('TrialActiveComponent', () => {
  let component: TrialActiveComponent;
  let fixture: ComponentFixture<TrialActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
