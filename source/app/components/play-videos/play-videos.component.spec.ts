import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayVideosComponent } from './play-videos.component';

describe('PlayVideosComponent', () => {
  let component: PlayVideosComponent;
  let fixture: ComponentFixture<PlayVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
