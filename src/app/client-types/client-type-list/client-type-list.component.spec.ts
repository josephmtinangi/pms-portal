import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTypeListComponent } from './client-type-list.component';

describe('ClientTypeListComponent', () => {
  let component: ClientTypeListComponent;
  let fixture: ComponentFixture<ClientTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
