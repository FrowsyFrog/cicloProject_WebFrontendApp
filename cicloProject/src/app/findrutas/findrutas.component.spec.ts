import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindrutasComponent } from './findrutas.component';

describe('FindrutasComponent', () => {
  let component: FindrutasComponent;
  let fixture: ComponentFixture<FindrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindrutasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
