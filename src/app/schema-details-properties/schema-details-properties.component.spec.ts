import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaDetailsPropertiesComponent } from './schema-details-properties.component';

describe('SchemaDetailsPropertiesComponent', () => {
  let component: SchemaDetailsPropertiesComponent;
  let fixture: ComponentFixture<SchemaDetailsPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemaDetailsPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaDetailsPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
