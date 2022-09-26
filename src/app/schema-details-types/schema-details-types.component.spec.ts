import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SchemaDetailsTypesComponent } from './schema-details-types.component';

describe('SchemaDetailsTypesComponent', () => {
  let component: SchemaDetailsTypesComponent;
  let fixture: ComponentFixture<SchemaDetailsTypesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemaDetailsTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaDetailsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
