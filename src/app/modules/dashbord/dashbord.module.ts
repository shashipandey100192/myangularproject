import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MyfeatureComponent } from './myfeature/myfeature.component';


@NgModule({
  declarations: [
    LandingpageComponent,
    MyfeatureComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule
  ]
})
export class DashbordModule { }
