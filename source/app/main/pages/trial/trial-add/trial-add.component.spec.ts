import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialAddComponent } from './trial-add.component';

describe('TrialAddComponent', () => {
  let component: TrialAddComponent;
  let fixture: ComponentFixture<TrialAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
