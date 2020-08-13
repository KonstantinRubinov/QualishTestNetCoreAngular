import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentTableComponent } from './appointment-table.component';


const routes: Routes = [
  {
    path: '',
    component: AppointmentTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentTableRoutingModule { }
