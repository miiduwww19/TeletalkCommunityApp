import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamLeaderRoutingModule } from './team-leader-routing-module';
import { TeamLeaderComponent } from './team-leader';
import { TeamLeaderDashboardComponent } from './components/team-leader-dashboard/team-leader-dashboard';


@NgModule({
  declarations: [
    TeamLeaderComponent,
    TeamLeaderDashboardComponent
  ],
  imports: [
    CommonModule,
    TeamLeaderRoutingModule
  ]
})
export class TeamLeaderModule { }
