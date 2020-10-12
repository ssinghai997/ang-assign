import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { WeightComponent } from './weight/weight.component';
import { WeightdetailsComponent } from './details/weightdetails.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([     
      {path:'home',component:WeightComponent},
      {path:'community',component:CommunityComponent},
      {path:'home/:id',component:WeightdetailsComponent},
      {path:'',component:WeightComponent},
      {path:'**',component:ErrorComponent}
    ]),    
  ],
  exports:[
    RouterModule
  ]
})
export class ApproutingModule { }
