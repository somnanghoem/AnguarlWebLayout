import { NgModule } from '@angular/core';
import { HomComponent } from '../home/hom.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    HomComponent
],
  imports: [
    MainRoutingModule,

  ],
  entryComponents: [
  ]
})
export class MainModule { }
