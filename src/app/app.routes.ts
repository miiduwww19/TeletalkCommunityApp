import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' }, // Default route
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin-module').then(m => m.AdminModule)
  },
  {
    path: 'hr',
    loadChildren: () => import('./modules/hr/hr-module').then(m => m.HrModule)
  },
  {
    path: 'agent',
    loadChildren: () => import('./modules/agent/agent-module').then(m => m.AgentModule)
  },
  {
    path: 'team-leader',
    loadChildren: () => import('./modules/team-leader/team-leader-module').then(m => m.TeamLeaderModule)
  },
  {
    path: 'quality',
    loadChildren: () => import('./modules/quality/quality-module').then(m => m.QualityModule)
  },
  // TODO: Add a wildcard route for 404 page
];
