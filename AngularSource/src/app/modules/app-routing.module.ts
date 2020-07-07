import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentTableComponent } from '../components/data-elements/appointment-table/appointment-table.component';
import { AppointmentTypeTableComponent } from '../components/data-elements/appointment-type-table/appointment-type-table.component';


const routes: Routes = [
  { path: "AppointmentsTable", component: AppointmentTableComponent },
  { path: "AppointmentTypesTable", component: AppointmentTypeTableComponent },
  { path: "", redirectTo: "AppointmentsTable", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
