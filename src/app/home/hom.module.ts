import { NgModule } from '@angular/core';
import { HomRoutingModule } from './hom-routing.module';
import { Hom1000Component } from './hom1000/hom1000.component';

// import { NgxUsefulSwiperModule } from '../../../node_modules/ngx-useful-swiper';

@NgModule({
  declarations: [
    Hom1000Component,
],
  imports: [
    HomRoutingModule,
    // NgxUsefulSwiperModule
  ],
  entryComponents: [

  ],
})
export class HomModule { }
