import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iweight } from './iweight';
import { catchError,map,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeightService {
  weightUrl:string='https://localhost:44387/api/weightapi'
  weight:Iweight
  showBodyfat: boolean=true;

  constructor(private _httpclient:HttpClient) { }

  getWeights():Observable<Iweight[]>{
    return this._httpclient.get<Iweight[]>(this.weightUrl)
  }

  // toggleTable():boolean{
  //    this.showBodyfat=!this.showBodyfat
  //    return this.showBodyfat
  // }
  // createService(param: Iweight): Observable<Iweight> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let body = JSON.stringify(param);
  //   let options = new RequestOptions({ headers: headers });
  //   return this._httpclient
  //     .post(this.weightUrl, body, options)
  //     .map(this.extractData)
  //     .catchError(this.ha);
  // }
}
