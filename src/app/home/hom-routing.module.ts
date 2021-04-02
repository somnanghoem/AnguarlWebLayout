import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Hom1000Component } from './hom1000/hom1000.component';


const routes: Routes = [
  { path: '', redirectTo: '/main/home', pathMatch: 'full'},
  { path: 'home', component: Hom1000Component},
 /*  {
    path: 'setting',   component: Hom3200Component,
    children: [
      {
        path: '',
        loadChildren: './hom3200/hom3200.module#Hom3200Module'
      }
    ]
  }, */
 // { path: 'notification', component: Hom3100Component},
 // { path: 'detail/:id', component: Hom3110Component},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomRoutingModule { }
