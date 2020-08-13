import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "AppointmentsTable",
  loadChildren: () => import('../components/data-elements/appointment-table/appointment-table.module').then(m => m.AppointmentTableModule) },
  { path: "AppointmentTypesTable",
  loadChildren: () => import('../components/data-elements/appointment-type-table/appointment-type-table.module').then(m => m.AppointmentTypeTableModule) },
  { path: "", redirectTo: "AppointmentsTable", pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
