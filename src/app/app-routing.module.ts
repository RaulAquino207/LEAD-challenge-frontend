import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlreadyAnsweredComponent } from './components/already-answered/already-answered.component';
import { AnswerSavedComponent } from './components/answer-saved/answer-saved.component';
import { DashboardNpsComponent } from './components/dashboard-nps/dashboard-nps.component';
import { FakeInComponent } from './components/fake-in/fake-in.component';
import { FormNpsComponent } from './components/form-nps/form-nps.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path: '', redirectTo : 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'fake-in', component : FakeInComponent},
  {path: 'nps', component : FormNpsComponent},
  {path: 'already-answered', component : AlreadyAnsweredComponent},
  {path: 'answer-saved', component : AnswerSavedComponent},
  {path: 'doughnutchart', component : DashboardNpsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
