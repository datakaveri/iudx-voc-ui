import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DescriptorDetailsComponent } from './descriptor-details.component';

describe('DescriptorDetailsComponent', () => {
  let component: DescriptorDetailsComponent;
  let fixture: ComponentFixture<DescriptorDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
