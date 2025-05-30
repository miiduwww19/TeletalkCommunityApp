import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing-module';
import { HrComponent } from './hr';
import { HrDashboardComponent } from './components/hr-dashboard/hr-dashboard';


@NgModule({
  declarations: [
    HrComponent,
    HrDashboardComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule
  ]
})
export class HrModule { }
