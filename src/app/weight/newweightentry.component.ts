import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iweight } from './iweight';
import { WeightService } from './weight.service';

@Component({
  selector: 'app-newweightentry',
  templateUrl: './newweightentry.component.html',
  styleUrls: ['./newweightentry.component.css']
})
export class NewweightentryComponent implements OnInit{
  com:Iweight
  @Input() showBodyfat
  @Output() emitter=new EventEmitter<object>()
  date:string
  weight:number
  bodyfat:number
  weightForm:FormGroup
  // weightUrl:string='assets/data/weight.json'

  constructor(private _weightService:WeightService, private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.weightForm=this.fb.group({
      date:['',Validators.required],
      bodyfat:['',Validators.required],
      weight:['',Validators.required]
    })
  }

  saveWeightForm():void{
    //console.log("child")
    this.emitter.emit(this.weightForm.value)
  }
  // postData(){
  //   this.emitter.emit(this.weightForm.value)
    
  // }
  //saveData(custForm:NgForm):void{
    //    console.log(custForm.form)
    //    console.log(`Saved Cust Data: ${JSON.stringify(custForm.value)}`)
    //    this.create.emit(custForm.value)
    //    }
}
