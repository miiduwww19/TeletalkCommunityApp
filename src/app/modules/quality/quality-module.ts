import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualityRoutingModule } from './quality-routing-module';
import { QualityComponent } from './quality';
import { QualityDashboardComponent } from './components/quality-dashboard/quality-dashboard';


@NgModule({
  declarations: [
    QualityComponent,
    QualityDashboardComponent
  ],
  imports: [
    CommonModule,
    QualityRoutingModule
  ]
})
export class QualityModule { }
