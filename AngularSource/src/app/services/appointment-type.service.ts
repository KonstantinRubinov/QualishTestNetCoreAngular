import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgRedux } from 'ng2-redux';
import { Store } from '../redux/store';
import { Action } from '../redux/action';
import { ActionType } from '../redux/action-type';
import { LogService } from './log.service';
import { AppointmentType } from '../models/AppointmentType';
import { appointmentTypesUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentTypeService {

  public constructor(private http: HttpClient,
    private redux: NgRedux<Store>,
    private logger: LogService){}
    
    public GetAppointmentTypes(): void {
      let he = new HttpHeaders({'Content-Type':  'application/json'});
      let observable = this.http.get<AppointmentType[]>(appointmentTypesUrl, { headers: he });
      observable.subscribe(appointmentType=>{
        const action: Action={type:ActionType.GetAppointmentTypes, payload:appointmentType};
        this.redux.dispatch(action);
        this.logger.debug("GetAppointmentTypes: ", appointmentType);
      }, error => {
        const action: Action={type:ActionType.GetAppointmentTypesError, payload:error.message};
        this.redux.dispatch(action);
        this.logger.error("GetAppointmentTypesError: ", error.message);
      });
    }

    public GetAppointmentType(appointmentTypeId:number): void {
      let he = new HttpHeaders({'Content-Type':  'application/json'});
      let observable = this.http.get<AppointmentType>(appointmentTypesUrl + appointmentTypeId,{ headers: he });
      observable.subscribe(appointmentType=>{
        const action: Action={type:ActionType.GetAppointmentType, payload:appointmentType}; 
        this.redux.dispatch(action);
        this.logger.debug("GetAppointmentType: ", appointmentType);
      }, error => {
        const action: Action={type:ActionType.GetAppointmentTypeError, payload:error.message};
        this.redux.dispatch(action);
        this.logger.error("GetAppointmentTypeError: ", error.message);
      });
    }
    
    public AddAppointmentType(appointmentType:AppointmentType): void {
      let he = new HttpHeaders({'Content-Type':  'application/json'});
      let observable = this.http.post<AppointmentType>(appointmentTypesUrl, appointmentType, { headers: he });
      observable.subscribe(appointmentType=>{
        const action: Action={type:ActionType.AddAppointmentType, payload:appointmentType};
        this.redux.dispatch(action);
        this.logger.debug("AddAppointmentType: ", appointmentType);
      }, error => {
        const action: Action={type:ActionType.AddAppointmentTypeError, payload:error.message};
        this.redux.dispatch(action);
        this.logger.error("AddAppointmentTypeError: ", error.message);
      });
    }

    public UpdateAppointmentType(appointmentTypeId:number, appointmentType:AppointmentType): void {
      let he = new HttpHeaders({'Content-Type':  'application/json'});
      let observable = this.http.put<AppointmentType>(appointmentTypesUrl+appointmentTypeId, appointmentType, { headers: he });
      observable.subscribe(appointmentType=>{
        const action: Action={type:ActionType.UpdateAppointmentType, payload:appointmentType};
        this.redux.dispatch(action);
        this.logger.debug("UpdateAppointmentType: ", appointmentType);
      }, error => {
        const action: Action={type:ActionType.UpdateAppointmentTypeError, payload:error.message};
        this.redux.dispatch(action);
        this.logger.error("UpdateAppointmentTypeError: ", error.message);
      });
    }

    public DeleteAppointmentType(appointmentTypeId:number): void {
      let he = new HttpHeaders({'Content-Type':  'application/json'});
      let observable = this.http.delete<string>(appointmentTypesUrl+appointmentTypeId, { observe: 'response', headers: he});
      observable.subscribe(res =>{
        this.logger.debug("DeleteAppointmentType result status: ", res.status);
        if (res.status===204){
          const action: Action={type:ActionType.DeleteAppointmentType, payload:appointmentTypeId };
          this.redux.dispatch(action);
          this.logger.debug("DeleteAppointmentType: ", appointmentTypeId);
        }
      }, error => {
        const action: Action={type:ActionType.DeleteAppointmentTypeError, payload:error.message};
        this.redux.dispatch(action);
        this.logger.error("DeleteAppointmentTypeError: ", error.message);
      });
    }
}