import { Component, OnInit, OnDestroy } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';
import { Unsubscribe } from 'redux';
import { NgRedux } from 'ng2-redux';
import { Store } from 'src/app/redux/store';
import { LogService } from 'src/app/services/log.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AppointmentType } from 'src/app/models/AppointmentType';
import { AppointmentImportance } from 'src/app/models/AppointmentImportance';


@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css']
})
export class AppointmentTableComponent implements OnInit, OnDestroy {

  private unsubscribe:Unsubscribe;

  public appointments:Appointment[] = [];
  public appointmentTypes:AppointmentType[] = [];
  public appointmentImportances:AppointmentImportance[] = [];
  
  public appointment:Appointment = new Appointment();

  public appointmentDay:string;
  
  public myHeaders = [
		"Customer Name",
		"Appointment Date",
		"Appointment Day",
		"Start Time",
		"End Time",
		"Appointment Type",
		"Appointment Importance",
		"Edit Appointment",
		"Delete Appointment"
  ];
  
  constructor(
    private appointmentService: AppointmentService,
    private redux:NgRedux<Store>,
    private logger:LogService) { }

  public ngOnInit(): void {
    this.appointments = this.redux.getState().appointments;
    this.appointmentTypes = this.redux.getState().appointmentTypes;
    this.appointmentImportances = this.redux.getState().appointmentImportances;

    this.unsubscribe = this.redux.subscribe(()=>{
      this.appointments = this.redux.getState().appointments;
      this.appointmentTypes = this.redux.getState().appointmentTypes;
      this.appointmentImportances = this.redux.getState().appointmentImportances;
      this.logger.debug("Get Appointments From Redux: ", this.appointments);
      this.logger.debug("Get Appointment Types From Redux: ", this.appointmentTypes);
      this.logger.debug("Get Appointment Importances From Redux: ", this.appointmentImportances);
    });
  }

  public updateAppointment(data){
    try {
      let hours = this.CheckAppointmentTime(this.appointments[data.target.value]);
      if (hours) {
        let days = this.CheckAppointmentDay(this.appointments[data.target.value]);
        if (days) {
          this.logger.debug("Update Appointment: ", this.appointments[data.target.value]);
          this.appointmentService.UpdateAppointment(this.appointments[data.target.value].appointmentId, this.appointments[data.target.value]);
        } else {
          throw new Error("The Day Is Not Avaliable");
        }
      } else {
        throw new Error("The Duration Is Not Avaliable");
      }
    } catch (error){
      alert(error);
    }
  }

  public deleteAppointment(data){
    this.logger.debug("Delete Appointment: ", this.appointments[data.target.value]);
    this.appointmentService.DeleteAppointment( this.appointments[data.target.value].appointmentId);
  }

  private formatTime(){
    this.appointment.startTime = new Date(Date.prototype.setHours.apply(new Date(), this.appointment.startTime.toString().split(':')));
    this.appointment.endTime = new Date(Date.prototype.setHours.apply(new Date(), this.appointment.endTime.toString().split(':')));
  }

  public addAppointment(){
    try {
      this.formatTime();
      let hours = this.CheckAppointmentTime(this.appointment);
      if (hours) {
        let days = this.CheckAppointmentDay(this.appointment);
        if (days) {
          this.logger.debug("Add Appointment: ", this.appointment);
          this.appointmentService.AddAppointment(this.appointment);
          this.appointment = new Appointment();
        } else {
          throw new Error("The Day Is Not Avaliable");
        }
      } else {
        throw new Error("The Duration Is Not Avaliable");
      }
    } catch (error){
      alert(error);
    }
  }
  
  
  public ngOnDestroy(): void {
    this.unsubscribe();
  }


  public diff_minutes(start, end) {
    var diff = end.getTime() - start.getTime();
    var minutes = Math.floor(diff / 1000 / 60);
    return minutes;
  }
  
  public isRightMinutes(start, end) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
  
    if (endDate <= startDate) {
      return false;
    } else {
      return true;
      }
  }

  public CheckAppointmentTime(tmpAppointment)
  {
	  if (tmpAppointment.importanceId == 1) {
	  	let munutes = this.diff_minutes(new Date(tmpAppointment.startTime), new Date(tmpAppointment.endTime));
	  	if (munutes > 120) {
	  		return false;
	  	}
	  	return true;
	  }
	  return true;
  }

  public CheckAppointmentDay(tmpAppointment)
  {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

	  let date = new Date(tmpAppointment.appointmentDate);
	  let appDay = weekday[date.getDay()];

	  if ((tmpAppointment.importanceId != 3) && (appDay == "Friday" || appDay == "Saturday")) {
	  	return false;
	  }
	  else if ((tmpAppointment.importanceId == 3) && (appDay == "Saturday")) {
	  	return false;
	  }
	  return true;
  }
}