import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentTypeTableComponent } from './appointment-type-table.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentTypeTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentTypeTableRoutingModule { }
