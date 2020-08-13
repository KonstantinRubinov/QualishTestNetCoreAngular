import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppointmentType } from 'src/app/models/AppointmentType';
import { Unsubscribe } from 'redux';
import { NgRedux } from 'ng2-redux';
import { Store } from 'src/app/redux/store';
import { LogService } from 'src/app/services/log.service';
import { AppointmentTypeService } from 'src/app/services/appointment-type.service';

@Component({
  selector: 'app-appointment-type-table',
  templateUrl: './appointment-type-table.component.html',
  styleUrls: ['./appointment-type-table.component.css']
})
export class AppointmentTypeTableComponent implements OnInit, OnDestroy {

  private unsubscribe:Unsubscribe;

  public appointmentTypes:AppointmentType[] = [];
  public appointmentType:AppointmentType = new AppointmentType();
  public myHeaders = ["Appointment Type Name", "Edit Appointment Type", "Delete Appointment Type"];

  constructor(
    private appointmentTypeService: AppointmentTypeService,
    private redux:NgRedux<Store>,
    private logger:LogService) { }

  public ngOnInit(): void {
    this.appointmentTypes = this.redux.getState().appointmentTypes;
    this.unsubscribe = this.redux.subscribe(()=>{
      this.appointmentTypes = this.redux.getState().appointmentTypes;
      this.logger.debug("Get Appointment Types From Redux: ", this.appointmentTypes);
    });
  }

  public updateType(data){
    this.logger.debug("Update Type: ", this.appointmentTypes[data.target.value]);
    this.appointmentTypeService.UpdateAppointmentType(this.appointmentTypes[data.target.value].appointmentTypeId, this.appointmentTypes[data.target.value]);
  }

  public deleteType(data){
    this.logger.debug("Delete Type: ", this.appointmentTypes[data.target.value]);
    this.appointmentTypeService.DeleteAppointmentType( this.appointmentTypes[data.target.value].appointmentTypeId);
  }

  public addType(){
    this.logger.debug("Add Type: ", this.appointmentType);
    this.appointmentTypeService.AddAppointmentType(this.appointmentType);
    this.appointmentType = new AppointmentType();
  }
  
  public ngOnDestroy(): void {
    this.unsubscribe();
  }
}