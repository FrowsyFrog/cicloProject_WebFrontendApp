import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingDetailsComponent } from './parking-details.component';

describe('ParkingDetailsComponent', () => {
  let component: ParkingDetailsComponent;
  let fixture: ComponentFixture<ParkingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
