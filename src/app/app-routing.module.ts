import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { MyreactiveComponent } from './myreactive/myreactive.component';

const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'},
  {path:'reactive', component:MyreactiveComponent},
  
   {path:'customer',loadChildren:'./app-customers/app-customers.module#AppCustomersModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
