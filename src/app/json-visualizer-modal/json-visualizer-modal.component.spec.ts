import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonVisualizerModalComponent } from './json-visualizer-modal.component';

describe('JsonVisualizerModalComponent', () => {
  let component: JsonVisualizerModalComponent;
  let fixture: ComponentFixture<JsonVisualizerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonVisualizerModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonVisualizerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
