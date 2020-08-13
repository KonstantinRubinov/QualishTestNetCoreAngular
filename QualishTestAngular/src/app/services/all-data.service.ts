import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgRedux } from 'ng2-redux';
import { Store } from '../redux/store';
import { Action } from '../redux/action';
import { ActionType } from '../redux/action-type';
import { LogService } from './log.service';
import { alldataUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllDataService {

  public constructor(private http: HttpClient,
    private redux: NgRedux<Store>,
    private logger: LogService){}

  public GetAllMyData(): void {
    let he = new HttpHeaders({'Content-Type':  'application/json'});
    let observable = this.http.get<any>(alldataUrl,{ headers: he });
    observable.subscribe(allData=>{
      const action: Action={type:ActionType.GetAllMyData, payload:allData}; 
      this.redux.dispatch(action);
      this.logger.debug("GetAllMyData: ", allData);
    }, error => {
      const action: Action={type:ActionType.GetAllMyDataError, payload:error.message};
      this.redux.dispatch(action);
      this.logger.error("GetAllMyDataError: ", error.message);
    });
  }
}
