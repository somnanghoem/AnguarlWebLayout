import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomComponent} from '../home/hom.component';

const routes: Routes = [
  {
    path: '', component: HomComponent,
    children: [
      {
        path: '',
        loadChildren:() => import('../home/hom.module').then( m=> m.HomModule )
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
