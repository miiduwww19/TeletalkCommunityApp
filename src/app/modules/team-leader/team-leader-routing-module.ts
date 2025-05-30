import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamLeaderComponent } from './team-leader';
import { TeamLeaderDashboardComponent } from './components/team-leader-dashboard/team-leader-dashboard';

const routes: Routes = [
  {
    path: '',
    component: TeamLeaderComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: TeamLeaderDashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamLeaderRoutingModule { }
