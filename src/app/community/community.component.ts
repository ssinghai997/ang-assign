import { Component, OnInit } from '@angular/core';
import { CommunityService } from './community.service';
import { IComments } from './IComments';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  comments:IComments[]
  constructor(private cService:CommunityService) { }

  ngOnInit(): void {
    this.cService.getComments().subscribe({
      next:data=>{this.comments=data}
    });

  }

}
