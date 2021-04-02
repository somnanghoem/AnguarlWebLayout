import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material';
import { SigRoutingModule } from './sig-routing.module';
import { Sig1000Component } from './sig1000/sig1000.component';
//import { SBSharedModule } from '../shared/shared.module';
//import { DialogsModule } from '@progress/kendo-angular-dialog';
//mport { Sig1100Component } from './sig1100/sig1100.component';
//import { Sig2200Component } from './sig2200/sig2200.component';
//import { Sig2100Component } from './sig2100/sig2100.component';

@NgModule({
  declarations: [
    Sig1000Component,
   // Sig1100Component,
   // Sig2100Component,
   // Sig2200Component,
  ],
  imports: [
    SigRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
   // SBSharedModule,
    //DialogsModule
  ],
  entryComponents: [
  //  Sig1100Component,
   // Sig2100Component,
   // Sig2200Component,
  ]
})
export class SigModule { }
