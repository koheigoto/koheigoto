import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecadanceComponent } from './decadance.component';

describe('DecadanceComponent', () => {
  let component: DecadanceComponent;
  let fixture: ComponentFixture<DecadanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecadanceComponent]
    });
    fixture = TestBed.createComponent(DecadanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
