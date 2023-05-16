import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { ConseptComponent } from './consept/consept.component';
import { MovieComponent } from './movie/movie.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DressPortfolioComponent } from './dress-portfolio/dress-portfolio.component';
import { FinalPortfolioComponent } from './final-portfolio/final-portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { InsideComponent } from './inside/inside.component';
import { MonochromeComponent } from './monochrome/monochrome.component';
import { DecadanceComponent } from './decadance/decadance.component';
import { SolitudeComponent } from './solitude/solitude.component';
import { CalmComponent } from './calm/calm.component';
import { MasculineComponent } from './masculine/masculine.component';
import { DeathComponent } from './death/death.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ConseptComponent,
    MovieComponent,
    PortfolioComponent,
    DressPortfolioComponent,
    FinalPortfolioComponent,
    ContactComponent,
    HeaderComponent,
    InsideComponent,
    MonochromeComponent,
    DecadanceComponent,
    SolitudeComponent,
    CalmComponent,
    MasculineComponent,
    DeathComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    MatToolbarModule,
    RouterModule.forRoot([
      {path: '', component: TopComponent},
      {path:'top', component: TopComponent},
      {path:'concept', component: ConseptComponent},
      {path: 'movie', component: MovieComponent},
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'dress', component: DressPortfolioComponent},
      {path: 'finalPortfolio', component: FinalPortfolioComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'inside', component: InsideComponent},
      {path: 'monochrome', component: MonochromeComponent},
      {path: 'decadance', component: DecadanceComponent},
      {path: 'solitude', component: SolitudeComponent},
      {path: 'calm', component: CalmComponent},
      {path: 'masculine', component: MasculineComponent},
      {path: 'death', component: DeathComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
