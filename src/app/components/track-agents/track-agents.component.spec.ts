import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackAgentsComponent } from './track-agents.component';

describe('TrackAgentsComponent', () => {
  let component: TrackAgentsComponent;
  let fixture: ComponentFixture<TrackAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
