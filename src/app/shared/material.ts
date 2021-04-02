import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';


@NgModule({

  imports: [
    MatBadgeModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatChipsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
   ],
  exports: [
    MatBadgeModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatChipsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
      ]
})
export class MaterialModule { }
