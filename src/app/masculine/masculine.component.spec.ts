import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasculineComponent } from './masculine.component';

describe('MasculineComponent', () => {
  let component: MasculineComponent;
  let fixture: ComponentFixture<MasculineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasculineComponent]
    });
    fixture = TestBed.createComponent(MasculineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
