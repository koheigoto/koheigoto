import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolitudeComponent } from './solitude.component';

describe('SolitudeComponent', () => {
  let component: SolitudeComponent;
  let fixture: ComponentFixture<SolitudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolitudeComponent]
    });
    fixture = TestBed.createComponent(SolitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
