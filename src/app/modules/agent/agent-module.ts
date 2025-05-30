import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing-module';
import { AgentComponent } from './agent';
import { AgentDashboardComponent } from './components/agent-dashboard/agent-dashboard';


@NgModule({
  declarations: [
    AgentComponent,
    AgentDashboardComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
