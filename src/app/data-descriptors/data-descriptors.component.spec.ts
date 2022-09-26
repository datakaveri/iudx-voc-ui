import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DataDescriptorsComponent } from './data-descriptors.component';

describe('DataDescriptorsComponent', () => {
  let component: DataDescriptorsComponent;
  let fixture: ComponentFixture<DataDescriptorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDescriptorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDescriptorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
