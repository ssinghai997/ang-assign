import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IComments } from './IComments';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  commentsUrl:string="assets/data/comments.json"
  comment:IComments
  constructor(private _http:HttpClient) { }
  getComments():Observable<IComments[]>{
    return this._http.get<IComments[]>(this.commentsUrl)
  }
}
