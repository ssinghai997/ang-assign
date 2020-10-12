import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iweight } from './iweight';
import { WeightService } from './weight.service';

@Component({
  selector: 'app-newweightentry',
  templateUrl: './newweightentry.component.html',
  styleUrls: ['./newweightentry.component.css']
})
export class NewweightentryComponent implements  OnChanges {
  com:Iweight
  showBodyfat:boolean
  date:string
  weight:number
  bodyfat:number
  weightForm:FormGroup
  weightUrl:string='assets/data/weight.json'

  constructor(private _weightService:WeightService, private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.weightForm=this.fb.group({
      date:['',Validators.required],
      bodyfat:['',Validators.required],
      weight:['',Validators.required]
    })
  }
  
  ngOnChanges(){
    this.showBodyfat=this._weightService.toggleTable()
  }
  saveCustForm():void{
    console.log(this.weightForm)
  }
  postData(){
    this.http.post(this.weightUrl,{
      com:this.weightForm}).toPromise().then((data:any)=>{
        console.log(data)
      })
  }
}
