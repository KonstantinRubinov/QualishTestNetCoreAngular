import { Store } from "./store";
import { Action } from "./action";
import { ActionType } from "./action-type";
import { Appointment } from '../models/Appointment';
import { AppointmentType } from '../models/AppointmentType';
import { AppointmentImportance } from '../models/AppointmentImportance';

export class Reducer{
    public static reduce(oldStore: Store, action:Action):Store{
        let newStore:Store = {...oldStore};
        let itemIndex;

        switch(action.type){
            case ActionType.GetAppointmentTypes:
                newStore.appointmentTypes = action.payload.map(x => new AppointmentType(x.appointmentTypeId, x.appointmentTypeName));
                break;
            case ActionType.GetAppointmentType:
                let getAppType = new AppointmentType(action.payload.appointmentTypeId, action.payload.appointmentTypeName);
                newStore.appointmentType=getAppType;
                break;
            case ActionType.AddAppointmentType:
                let addAppType = new AppointmentType(action.payload.appointmentTypeId, action.payload.appointmentTypeName);
                newStore.appointmentTypes.push(addAppType);
                alert("Appointment type has been Added");
                break;
            case ActionType.UpdateAppointmentType:
                let updateAppType = new AppointmentType(action.payload.appointmentTypeId, action.payload.appointmentTypeName);
                itemIndex = newStore.appointmentTypes.findIndex(item => item.appointmentTypeId === updateAppType.appointmentTypeId);
                newStore.appointmentTypes[itemIndex] = updateAppType;
                alert("Appointment type has been Updated");
                break;
            case ActionType.DeleteAppointmentType:
                newStore.appointmentTypes.forEach( (item, index) => {
                    if(item.appointmentTypeId === action.payload){
                        newStore.appointmentTypes.splice(index,1);
                        alert("Appointment type has been Deleted");
                    } 
                });
                break;
                
            case ActionType.GetAppointments:
                newStore.appointments = action.payload.map(x => new Appointment(x.appointmentId, x.customerName, x.appointmentDate, x.startTime, x.endTime, x.appointmentTypeId, x.importanceId));
                break;
            case ActionType.GetAppointmentsByDates:
                newStore.appointments = action.payload.map(x => new Appointment(x.appointmentId, x.customerName, x.appointmentDate, x.startTime, x.endTime, x.appointmentTypeId, x.importanceId));
                break;
            case ActionType.GetAppointment:
                let getApp = new Appointment(action.payload.appointmentId, action.payload.customerName, action.payload.appointmentDate, action.payload.startTime, action.payload.endTime, action.payload.appointmentTypeId, action.payload.importanceId);
                newStore.appointment=getApp;
                break;
            case ActionType.AddAppointment:
                let addApp = new Appointment(action.payload.appointmentId, action.payload.customerName, action.payload.appointmentDate, action.payload.startTime, action.payload.endTime, action.payload.appointmentTypeId, action.payload.importanceId);
                newStore.appointments.push(addApp);
                alert("Appointment has been Added");
                break;
            case ActionType.UpdateAppointment:
                let updateApp = new Appointment(action.payload.appointmentId, action.payload.customerName, action.payload.appointmentDate, action.payload.startTime, action.payload.endTime, action.payload.appointmentTypeId, action.payload.importanceId);
                itemIndex = newStore.appointments.findIndex(item => item.appointmentId === updateApp.appointmentId);
                newStore.appointments[itemIndex] = updateApp;
                alert("Appointment has been Updated");
                break;
            case ActionType.DeleteAppointment:
                newStore.appointments.forEach( (item, index) => {
                    if(item.appointmentId === action.payload){
                        newStore.appointments.splice(index,1);
                        alert("Appointment has been Deleted");
                    }
                });
                break;
                
            case ActionType.GetAllMyData:
                newStore.appointments = action.payload.appointments.map(x => new Appointment(x.appointmentId, x.customerName, x.appointmentDate, x.startTime, x.endTime, x.appointmentTypeId, x.importanceId));
                newStore.appointmentTypes = action.payload.appointmentTypes.map(x => new AppointmentType(x.appointmentTypeId, x.appointmentTypeName));
                newStore.appointmentImportances = action.payload.appointmentImportances.map(x => new AppointmentImportance(x.importanceId, x.importanceName));
                break;
                
            case ActionType.GetAppointmentTypesError:
                newStore.getTypesError = action.payload
                break;
            case ActionType.GetAppointmentTypeError:
                newStore.getTypeError=action.payload;
                break;
            case ActionType.AddAppointmentTypeError:
                newStore.addTypeError=action.payload;
                alert("Appointment type couldn't be added");
                break;
            case ActionType.UpdateAppointmentTypeError:
                newStore.updateTypeError=action.payload;
                alert("Appointment type couldn't be updated");
                break;
            case ActionType.DeleteAppointmentTypeError:
                newStore.deleteTypeError=action.payload;
                alert("Appointment type couldn't be deleted");
                break;
                
            case ActionType.GetAppointmentError:
                newStore.getAppointmentError = action.payload
                break;
            case ActionType.GetAppointmentsError:
                newStore.getAppointmentsError = action.payload
                break;
            case ActionType.GetAppointmentsByDatesError:
                newStore.getAppointmentsByDatesError=action.payload;
                break;
            case ActionType.AddAppointmentError:
                newStore.addAppointmentError=action.payload;
                alert("Appointment couldn't be added");
                break;
            case ActionType.UpdateAppointmentError:
                newStore.updateAppointmentError=action.payload;
                alert("Appointment couldn't be updated");
                break;
            case ActionType.DeleteAppointmentError:
                newStore.deleteAppointmentError=action.payload;
                alert("Appointment couldn't be deleted");
                break;
                
            case ActionType.GetAllMyDataError:
                newStore.getAllMyDataError=action.payload;
                break;
            default:
                break;
        }
        return newStore;
    }
}