import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WardCreateComponent } from './ward-create.component';

describe('WardCreateComponent', () => {
  let component: WardCreateComponent;
  let fixture: ComponentFixture<WardCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WardCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
