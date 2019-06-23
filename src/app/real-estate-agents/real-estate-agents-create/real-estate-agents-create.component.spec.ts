import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateAgentsCreateComponent } from './real-estate-agents-create.component';

describe('RealEstateAgentsCreateComponent', () => {
  let component: RealEstateAgentsCreateComponent;
  let fixture: ComponentFixture<RealEstateAgentsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealEstateAgentsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateAgentsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
