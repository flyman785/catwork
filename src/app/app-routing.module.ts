import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { ResolveGuard } from './guards/resolve.guard';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64]
};

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule),
    resolve: {config: ResolveGuard}
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
