import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriHomeComponent } from './agri-home.component';

describe('AgriHomeComponent', () => {
  let component: AgriHomeComponent;
  let fixture: ComponentFixture<AgriHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
