import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateAgentsListComponent } from './real-estate-agents-list.component';

describe('RealEstateAgentsListComponent', () => {
  let component: RealEstateAgentsListComponent;
  let fixture: ComponentFixture<RealEstateAgentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealEstateAgentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateAgentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
