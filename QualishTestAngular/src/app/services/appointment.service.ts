import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgRedux } from 'ng2-redux';
import { Store } from '../redux/store';
import { Action } from '../redux/action';
import { ActionType } from '../redux/action-type';
import { LogService } from './log.service';
import { Appointment } from '../models/Appointment';
import { appointmentsUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  public constructor(private http: HttpClient,
    private redux: NgRedux<Store>,
    private logger: LogService){}

    public GetAppointment(appointmentId:number): void {
      let he = new HttpHeaders({'Content-Type':  'application/json'});
      let observable = this.http.get<Appointment>(appointmentsUrl + appointmentId,{ headers: he });
      observable.subscribe(appointment=>{
        const action: Action={type:ActionType.GetAppointment, payload:appointment}; 
        this.redux.dispatch(action);
        this.logger.debug("GetAppointment: ", appointment);
      }, error => {
        const action: Action={type:ActionType.GetAppointmentError, payload:error.message};
        this.redux.dispatch(action);
        this.logger.error("GetAppointmentError: ", error.message);
      });
    }

    public GetAppointments(): void {
      let he = new HttpHeaders({'Content-Type':  'application/json'});
      let observable = this.http.get<Appointment[]>(appointmentsUrl, { headers: he });
      observable.subscribe(appointments=>{
        const action: Action={type:ActionType.GetAppointments, payload:appointments};
        this.redux.dispatch(action);
        this.logger.debug("GetAppointments: ", appointments);
      }, error => {
        const action: Action={type:ActionType.GetAppointmentsError, payload:error.message};
        this.redux.dispatch(action);
        this.logger.error("GetAppointmentsError: ", error.message);
      });
    }
    
    public GetAppointmentsByDates(startDate:string, endDate:string): void {
      let he = new HttpHeaders({'Content-Type':  'application/json'});
      let theUrl = appointmentsUrl + startDate + '/' + endDate;
    
      if (startDate != "" && endDate == "") {
          theUrl = appointmentsUrl + 'start/' + startDate;
      }
      if (endDate != "" && startDate == "") {
          theUrl = appointmentsUrl + 'end/' + endDate;
      }
      
      let observable = this.http.get<Appointment[]>(theUrl, { headers: he });
      observable.subscribe(appointments=>{
        const action: Action={type:ActionType.GetAppointmentsByDates, payload:appointments};
        this.redux.dispatch(action);
        this.logger.debug("GetAppointmentsByDates: ", appointments);
      }, error => {
        const action: Action={type:ActionType.GetAppointmentsByDatesError, payload:error.message};
        this.redux.dispatch(action);
        this.logger.error("GetAppointmentsByDatesError: ", error.message);
      });
    }
    
    public AddAppointment(appointment:Appointment): void {
      let he = new HttpHeaders({'Content-Type':  'application/json'});
      let observable = this.http.post<Appointment>(appointmentsUrl, appointment, { headers: he });
      observable.subscribe(appointment=>{
        const action: Action={type:ActionType.AddAppointment, payload:appointment};
        this.redux.dispatch(action);
        this.logger.debug("AddAppointment: ", appointment);
      }, error => {
        const action: Action={type:ActionType.AddAppointmentError, payload:error.message};
        this.redux.dispatch(action);
        this.logger.error("AddAppointmentError: ", error.message);
      });
    }

    public UpdateAppointment(appointmentId:number, appointment:Appointment): void {
      let he = new HttpHeaders({'Content-Type':  'application/json'});
      let observable = this.http.put<Appointment>(appointmentsUrl+appointmentId, appointment, { headers: he });
      observable.subscribe(appointment=>{
        const action: Action={type:ActionType.UpdateAppointment, payload:appointment};
        this.redux.dispatch(action);
        this.logger.debug("UpdateAppointment: ", appointment);
      }, error => {
        const action: Action={type:ActionType.UpdateAppointmentError, payload:error.message};
        this.redux.dispatch(action);
        this.logger.error("UpdateAppointmentError: ", error.message);
      });
    }

    public DeleteAppointment(appointmentId:number): void {
      let he = new HttpHeaders({'Content-Type':  'application/json'});
      let observable = this.http.delete<string>(appointmentsUrl+appointmentId, { observe: 'response', headers: he});
      observable.subscribe(res =>{
        this.logger.debug("DeleteAppointment result status: ", res.status);
        if (res.status===204){
          const action: Action={type:ActionType.DeleteAppointment, payload:appointmentId };
          this.redux.dispatch(action);
          this.logger.debug("DeleteAppointment: ", appointmentId);
        }
      }, error => {
        const action: Action={type:ActionType.DeleteAppointmentError, payload:error.message};
        this.redux.dispatch(action);
        this.logger.error("DeleteAppointmentError: ", error.message);
      });
    }
}