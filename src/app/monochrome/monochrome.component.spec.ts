import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonochromeComponent } from './monochrome.component';

describe('MonochromeComponent', () => {
  let component: MonochromeComponent;
  let fixture: ComponentFixture<MonochromeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonochromeComponent]
    });
    fixture = TestBed.createComponent(MonochromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
