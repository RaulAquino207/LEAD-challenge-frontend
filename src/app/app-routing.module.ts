import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlreadyAnsweredComponent } from './already-answered/already-answered.component';
import { AnswerSavedComponent } from './answer-saved/answer-saved.component';
import { DashboardNpsComponent } from './dashboard-nps/dashboard-nps.component';
import { FakeInComponent } from './fake-in/fake-in.component';
import { FormNpsComponent } from './form-nps/form-nps.component';

const routes: Routes = [
  {path: '', redirectTo : 'fake-in', pathMatch: 'full'},
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
