import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyFloorDetailComponent } from './property-floor-detail.component';

describe('PropertyFloorDetailComponent', () => {
  let component: PropertyFloorDetailComponent;
  let fixture: ComponentFixture<PropertyFloorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyFloorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyFloorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
