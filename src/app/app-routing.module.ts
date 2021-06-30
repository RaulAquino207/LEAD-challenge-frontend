import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlreadyAnsweredComponent } from './components/already-answered/already-answered.component';
import { AnswerSavedComponent } from './components/answer-saved/answer-saved.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { FakeInComponent } from './components/fake-in/fake-in.component';
import { FormNpsComponent } from './components/form-nps/form-nps.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path: '', redirectTo : 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: 'login', component : FakeInComponent},
  {path: 'nps', component : FormNpsComponent},
  {path: 'already-answered', component : AlreadyAnsweredComponent},
  {path: 'answer-saved', component : AnswerSavedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
