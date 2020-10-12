import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommunityComponent } from './community/community.component';
import { ErrorComponent } from './error/error.component';
import { WeightModule } from './weight/weight.module';
import { ApproutingModule } from './approuting.module';

@NgModule({
  declarations: [
    AppComponent,    
    CommunityComponent,
    ErrorComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    WeightModule,
    ApproutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
