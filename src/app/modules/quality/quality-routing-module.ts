import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QualityComponent } from './quality';
import { QualityDashboardComponent } from './components/quality-dashboard/quality-dashboard';

const routes: Routes = [
  {
    path: '',
    component: QualityComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: QualityDashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualityRoutingModule { }
