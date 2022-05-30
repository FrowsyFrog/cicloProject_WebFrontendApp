import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloviasComponent } from './ciclovias.component';

describe('CicloviasComponent', () => {
  let component: CicloviasComponent;
  let fixture: ComponentFixture<CicloviasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloviasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloviasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
