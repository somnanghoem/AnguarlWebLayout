import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';
import { LayoutTabComponent } from './layout/layout-tab/layout-tab.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./sig/sig.module').then( m => m.SigModule )
  },
  {
    path: '', component: LayoutTabComponent,
    children: [
     {
      path: 'main',
      loadChildren: () => import('./main/main.module').then( m=> m.MainModule )
     }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }
 }
