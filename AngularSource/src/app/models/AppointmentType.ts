export class AppointmentType {
    private _appointmentTypeId: number;
    private _appointmentTypeName: string;
    public constructor(
        appointmentTypeId?: number,
        appointmentTypeName?: string) {
        this.appointmentTypeId = appointmentTypeId;
        this.appointmentTypeName = appointmentTypeName;
    }

    get appointmentTypeId():number{
        console.debug("get appointmentTypeId: " + JSON.stringify(this._appointmentTypeId));
        return this._appointmentTypeId;
    }

    set appointmentTypeId(val){
        this._appointmentTypeId=val;
        console.debug("set appointmentTypeId: " + JSON.stringify(this._appointmentTypeId));
    }

    get appointmentTypeName():string{
        console.debug("get appointmentTypeName: " + JSON.stringify(this._appointmentTypeName));
        return this._appointmentTypeName;
    }

    set appointmentTypeName(val){
        this._appointmentTypeName=val;
        console.debug("set appointmentTypeName: " + JSON.stringify(this._appointmentTypeName));
    }
}