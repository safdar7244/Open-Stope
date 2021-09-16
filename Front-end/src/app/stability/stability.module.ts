import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StabilityComponent } from './stability.component';




@NgModule({
  declarations: [

    StabilityComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatDialogModule,
    MatExpansionModule,
    ChartsModule,
    MatFormFieldModule,
    MatTabsModule
 ],
  exports: [],
  entryComponents: [],
  providers: [],
  bootstrap: []
})
export class AppModule { }
