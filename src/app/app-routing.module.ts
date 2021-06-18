import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakeInComponent } from './fake-in/fake-in.component';
import { FormNpsComponent } from './form-nps/form-nps.component';

const routes: Routes = [
  {path: '', redirectTo : 'fake-in', pathMatch: 'full'},
  {path: 'fake-in', component : FakeInComponent},
  {path: 'nps', component : FormNpsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
