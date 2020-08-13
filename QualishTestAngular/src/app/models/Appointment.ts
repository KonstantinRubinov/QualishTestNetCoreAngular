export class Appointment {
    // private _appointmentId: number;
    // private _customerName: string;
    // private _appointmentDate: Date;
    // private _startTime: Date;
    // private _endTime: Date;
    // private _appointmentTypeId: number;
    // private _importanceId: number;

    public constructor(
        public appointmentId: number =-1,
        public customerName: string="",
        public appointmentDate: Date=new Date(),
        public startTime: Date=new Date(),
        public endTime: Date=new Date(),
        public appointmentTypeId: number =-1,
        public importanceId: number =-1
    ) { 
        // this.appointmentId = appointmentId;
        // this.customerName = customerName;
        // this.appointmentDate = appointmentDate;
        // this.startTime = startTime;
        // this.endTime = endTime;
        // this.appointmentTypeId = appointmentTypeId;
        // this.importanceId = importanceId;
    }

    // get appointmentId():number{
    //     console.debug("get appointmentId: " + JSON.stringify(this._appointmentId));
    //     return this._appointmentId;
    // }

    // set appointmentId(val){
    //     this._appointmentId=val;
    //     console.debug("set appointmentId: " + JSON.stringify(this._appointmentId));
    // }

    // get customerName():string{
    //     console.debug("get customerName: " + JSON.stringify(this._customerName));
    //     return this._customerName;
    // }

    // set customerName(val){
    //     this._customerName=val;
    //     console.debug("set customerName: " + JSON.stringify(this._customerName));
    // }

    // get appointmentDate():Date{
    //     console.debug("get appointmentDate: " + JSON.stringify(this._appointmentDate));
    //     if(this._appointmentDate instanceof Date){
    //         return this._appointmentDate;
    //     }
	// 	return new Date();
    // }

    // set appointmentDate(val){
    //     this._appointmentDate=new Date(val);
    //     console.debug("set appointmentDate: " + JSON.stringify(this._appointmentDate));
    // }

    // get startTime():Date{
    //     console.debug("get startTime: " + JSON.stringify(this._startTime));
    //     if(this._startTime instanceof Date){
	// 		return this._startTime;
    //     }
	// 	return new Date();
    // }

    // set startTime(val){
    //     this._startTime=new Date(val);
    //     console.debug("set startTime: " + JSON.stringify(this._startTime));
    // }

    // get endTime():Date{
    //     console.debug("get endTime: " + JSON.stringify(this._endTime));
    //     if(this._endTime instanceof Date){
	// 		return this._endTime;
    //     }
	// 	return new Date();
    // }

    // set endTime(val){
    //     this._endTime=new Date(val);
    //     console.debug("set endTime: " + JSON.stringify(this._endTime));
    // }

    // get appointmentTypeId():number{
    //     console.debug("get appointmentTypeId: " + JSON.stringify(this._appointmentTypeId));
    //     return this._appointmentTypeId;
    // }

    // set appointmentTypeId(val){
    //     this._appointmentTypeId=val;
    //     console.debug("set appointmentTypeId: " + JSON.stringify(this._appointmentTypeId));
    // }

    // get importanceId():number{
    //     console.debug("get importanceId: " + JSON.stringify(this._importanceId));
    //     return this._importanceId;
    // }

    // set importanceId(val){
    //     this._importanceId=val;
    //     console.debug("set importanceId: " + JSON.stringify(this._importanceId));
    // }
}