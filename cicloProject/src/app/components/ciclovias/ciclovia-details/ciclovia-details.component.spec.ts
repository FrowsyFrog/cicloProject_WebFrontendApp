import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloviaDetailsComponent } from './ciclovia-details.component';

describe('CicloviaDetailsComponent', () => {
  let component: CicloviaDetailsComponent;
  let fixture: ComponentFixture<CicloviaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloviaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloviaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
