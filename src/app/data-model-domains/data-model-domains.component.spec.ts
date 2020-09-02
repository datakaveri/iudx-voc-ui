import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataModelDomainsComponent } from './data-model-domains.component';

describe('DataModelDomainsComponent', () => {
  let component: DataModelDomainsComponent;
  let fixture: ComponentFixture<DataModelDomainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataModelDomainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataModelDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
