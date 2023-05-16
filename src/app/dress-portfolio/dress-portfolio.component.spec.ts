import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressPortfolioComponent } from './dress-portfolio.component';

describe('DressPortfolioComponent', () => {
  let component: DressPortfolioComponent;
  let fixture: ComponentFixture<DressPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DressPortfolioComponent]
    });
    fixture = TestBed.createComponent(DressPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
