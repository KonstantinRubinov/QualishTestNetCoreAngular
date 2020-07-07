export class AppointmentImportance {
    private _importanceId: number;
    private _importanceName: string;
    public constructor(
        importanceId?: number,
        importanceName?: string
    ) { 
        this.importanceId = importanceId;
        this.importanceName = importanceName;
    }

    get importanceId():number{
        console.debug("get importanceId: " + JSON.stringify(this._importanceId));
        return this._importanceId;
    }

    set importanceId(val){
        this._importanceId=val;
        console.debug("set importanceId: " + JSON.stringify(this._importanceId));
    }

    get importanceName():string{
        console.debug("get importanceName: " + JSON.stringify(this._importanceName));
        return this._importanceName;
    }

    set importanceName(val){
        this._importanceName=val;
        console.debug("set importanceName: " + JSON.stringify(this._importanceName));
    }
}