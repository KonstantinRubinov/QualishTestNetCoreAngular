import { Appointment } from '../models/Appointment';
import { AppointmentImportance } from '../models/AppointmentImportance';
import { AppointmentType } from '../models/AppointmentType';

export class Store{
    public appointments:Appointment[] = [];
    public appointment:Appointment;
    public getAppointmentError:string;
    public getAppointmentsError:string;
    public getAppointmentsByDatesError:string;
    public addAppointmentError:string;
    public updateAppointmentError:string;
    public deleteAppointmentError:string;
    
    public appointmentImportances:AppointmentImportance[] = [];
    public appointmentImportance:AppointmentImportance;
    
    public appointmentTypes:AppointmentType[] = [];
    public appointmentType:AppointmentType;
    public getTypesError:string;
    public getTypeError:string;
    public addTypeError:string;
    public updateTypeError:string;
    public deleteTypeError:string;

    public getAllMyDataError:string;
}