import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iweight } from './iweight';
import { WeightService } from './weight.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {
  weight:number
  date:string
  weights:Iweight[] 
  @Input() weightForm
  @Output() emitter=new EventEmitter<boolean>()
  showBodyfat:boolean
  constructor(private _weightService:WeightService) {}
  

  ngOnInit(): void {
     this._weightService.getWeights().subscribe({
       next:data=>{this.weights=data}
     });      
  }
  
  toggleTable():void{
    this.showBodyfat=!this.showBodyfat
    this.emitter.emit(this.showBodyfat);
 }
 createNewEntry(weightForm:Object):void{
  //  console.log("sdks")
   console.log(weightForm.valueOf())
 }
}
