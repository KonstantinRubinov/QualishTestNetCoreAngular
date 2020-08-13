import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentTableRoutingModule } from './appointment-table-routing.module';
import { AppointmentTableComponent } from './appointment-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppointmentTableRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AppointmentTableComponent]
})
export class AppointmentTableModule { }
