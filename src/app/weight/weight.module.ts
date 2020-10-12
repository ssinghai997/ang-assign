import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeightdetailsComponent } from '../details/weightdetails.component';
import { WeightComponent } from './weight.component';
import { NewweightentryComponent } from './newweightentry.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    WeightComponent,
    WeightdetailsComponent,
    NewweightentryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})

export class WeightModule { }
