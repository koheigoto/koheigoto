import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseptComponent } from './consept.component';

describe('ConseptComponent', () => {
  let component: ConseptComponent;
  let fixture: ComponentFixture<ConseptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConseptComponent]
    });
    fixture = TestBed.createComponent(ConseptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
