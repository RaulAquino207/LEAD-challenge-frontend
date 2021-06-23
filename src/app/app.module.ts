import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormNpsComponent } from './components/form-nps/form-nps.component';
import { FakeInComponent } from './components/fake-in/fake-in.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlreadyAnsweredComponent } from './components/already-answered/already-answered.component';
import { AnswerSavedComponent } from './components/answer-saved/answer-saved.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardNpsComponent } from './components/dashboard-nps/dashboard-nps.component';
import { ChartsModule } from 'ng2-charts';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FormNpsComponent,
    FakeInComponent,
    AlreadyAnsweredComponent,
    AnswerSavedComponent,
    ToolbarComponent,
    FooterComponent,
    DashboardNpsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
