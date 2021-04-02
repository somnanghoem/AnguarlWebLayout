import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sig1000Component } from './sig1000/sig1000.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',   component : Sig1000Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigRoutingModule { }
