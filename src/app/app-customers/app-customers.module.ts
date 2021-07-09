import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { CommonModule } from '@angular/common';

const cutomerroutes: Routes = [
  { path: '', component: CustomerComponent, pathMatch: 'full' },
  { path: 'custDetail', component: CustomerDetailComponent }
];

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerDetailComponent,

  ],
  imports: [RouterModule.forChild(cutomerroutes),
    CommonModule,],
  exports: [RouterModule]
})
export class AppCustomersModule { }
