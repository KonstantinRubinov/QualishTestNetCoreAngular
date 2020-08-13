import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentTypeTableRoutingModule } from './appointment-type-table-routing.module';
import { AppointmentTypeTableComponent } from './appointment-type-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppointmentTypeTableRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AppointmentTypeTableComponent]
})
export class AppointmentTypeTableModule { }
