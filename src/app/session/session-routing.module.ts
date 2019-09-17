import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { SessionComponent } from './session.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'session', component: SessionComponent, data: { title: extract('Session') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SessionRoutingModule { }
