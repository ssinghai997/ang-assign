import { Component, OnInit } from '@angular/core';
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
  showBodyfat:boolean
  constructor(private _weightService:WeightService) {
    this.showBodyfat=this._weightService.toggleTable()
   }

  ngOnInit(): void {
     this._weightService.getWeights().subscribe({
       next:data=>{this.weights=data}
     });      
  }
  
  change():void{
    this.showBodyfat=this._weightService.toggleTable()
  }
}
