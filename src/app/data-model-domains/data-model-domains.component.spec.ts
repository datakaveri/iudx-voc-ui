import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DataModelDomainsComponent } from './data-model-domains.component';

describe('DataModelDomainsComponent', () => {
  let component: DataModelDomainsComponent;
  let fixture: ComponentFixture<DataModelDomainsComponent>;

  beforeEach(waitForAsync(() => {
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
