import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormNpsComponent } from './form-nps/form-nps.component';
import { FakeInComponent } from './fake-in/fake-in.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlreadyAnsweredComponent } from './already-answered/already-answered.component';
import { AnswerSavedComponent } from './answer-saved/answer-saved.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardNpsComponent } from './dashboard-nps/dashboard-nps.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    FormNpsComponent,
    FakeInComponent,
    AlreadyAnsweredComponent,
    AnswerSavedComponent,
    ToolbarComponent,
    FooterComponent,
    DashboardNpsComponent
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
