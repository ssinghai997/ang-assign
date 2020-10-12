import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeightService } from '../weight/weight.service';

@Component({
  selector: 'app-weightdetails',
  templateUrl: './weightdetails.component.html',
  styleUrls: ['./weightdetails.component.css']
})
export class WeightdetailsComponent implements OnInit {

  constructor(private _weightService:WeightService,
    private _activatedRoute:ActivatedRoute,
    private _router:Router) { }

  ngOnInit(): void {
  }

}
