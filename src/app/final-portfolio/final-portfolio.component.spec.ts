import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalPortfolioComponent } from './final-portfolio.component';

describe('FinalPortfolioComponent', () => {
  let component: FinalPortfolioComponent;
  let fixture: ComponentFixture<FinalPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalPortfolioComponent]
    });
    fixture = TestBed.createComponent(FinalPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
