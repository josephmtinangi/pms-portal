import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTypeCreateComponent } from './property-type-create.component';

describe('PropertyTypeCreateComponent', () => {
  let component: PropertyTypeCreateComponent;
  let fixture: ComponentFixture<PropertyTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
