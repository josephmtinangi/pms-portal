import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageCreateComponent } from './village-create.component';

describe('VillageCreateComponent', () => {
  let component: VillageCreateComponent;
  let fixture: ComponentFixture<VillageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
