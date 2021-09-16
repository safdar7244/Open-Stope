import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from "@angular/material/dialog";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { ChartsModule } from 'ng2-charts';
import { ForAllService } from './services/for-all.service';
import { qvaluefactor } from './services/qvalue-factor.service'
import { abcfactor } from './services/abcfactor.service'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent, ContactComponentMessage } from './contact/contact.component';
import { HrComponent } from './hr/hr.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolNavComponent } from './tool-nav/tool-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StressComponent } from './stress/stress.component';
import { FactorsComponent } from './factors/factors.component';
import { SymmetricComponent } from './symmetric/symmetric.component';
import { AsymmetricComponent } from './asymmetric/asymmetric.component';
import { QvalueComponent, QvalueComponentRqd, QvalueComponentRoughness, QvalueComponentSets, QvalueComponentAlteration } from './qvalue/qvalue.component';
import {QfactorComponentStopSurface} from "./factors/factors.component"
import { OutcomeComponent } from './outcome/outcome.component';
import { StabilityComponent,QvalueComponentStopSurface } from './stability/stability.component';
import { SymResComponent } from './sym-res/sym-res.component';
import { QResComponent } from './q-res/q-res.component';
import { StressResComponent } from './stress-res/stress-res.component';
import { FactorsResComponent } from './factors-res/factors-res.component';
import { MinHeightDirective } from './directives/min-height.directive';
import { MaxHeightDirective } from './directives/max-height.directive';
import { MaxSideWidthDirective } from './directives/max-side-width.directive';
import { MinSideWidthDirective } from './directives/min-side-width.directive';
import { MaxFhWidthDirective } from './directives/max-fh-width.directive';
import { MinFhWidthDirective } from './directives/min-fh-width.directive';
import { MinRqdDirective } from './directives/min-rqd.directive';
import { MaxRqdDirective } from './directives/max-rqd.directive';
import { MinJnDirective } from './directives/min-jn.directive';
import { MaxJnDirective } from './directives/max-jn.directive';
import { MinJrDirective } from './directives/min-jr.directive';
import { MaxJrDirective } from './directives/max-jr.directive';
import { MinJaDirective } from './directives/min-ja.directive';
import { MaxJaDirective } from './directives/max-ja.directive';
import { MinDepthDirective } from './directives/min-depth.directive';
import { MaxDepthDirective } from './directives/max-depth.directive';
import { MinModulusDirective } from './directives/min-modulus.directive';
import { MaxModulusDirective } from './directives/max-modulus.directive';
import { MinVertStressDirective } from './directives/min-vert-stress.directive';
import { MinHorStressDirective } from './directives/min-hor-stress.directive';
import { MinUcsDirective } from './directives/min-ucs.directive';
import { MaxUcsDirective } from './directives/max-ucs.directive';
import { MinStopeDipDirective } from './directives/min-stope-dip.directive';
import { MaxStopeDipDirective } from './directives/max-stope-dip.directive';
import { MinDipDiffDirective } from './directives/min-dip-diff.directive';
import { MaxDipDiffDirective } from './directives/max-dip-diff.directive';
import { MaxSideTopWidthDirective } from './directives/max-side-top-width.directive';
import { MinSideTopWidthDirective } from './directives/min-side-top-width.directive';
import { MaxSideBottomWidthDirective } from './directives/max-side-bottom-width.directive';
import { MinSideBottomWidthDirective } from './directives/min-side-bottom-width.directive';
import { MaxSideLengthDirective } from './directives/max-side-length.directive';
import { MinSideLengthDirective } from './directives/min-side-length.directive';
import { CompleteComponent } from './complete/complete.component';
import { DataSharingComponent, DataSharingComponentShared } from './data-sharing/data-sharing.component';
import { FaultFactorComponent } from './fault-factor/fault-factor.component';
import {PredictService} from "./services/predict.service";
import {stabilityService} from "./services/stability.service";


import {hrvalues} from "./services/hrvalues.service";

import {AboutDownloadService} from "./services/about-download.service";

import {allResetValues} from "./services/All-Reset-Form.service";

import {PredictionService} from "./factors-res/predictesult.service";
import { AsymResComponent } from './asym-res/asym-res.component';

import {MathModule} from './math/math.module';
import {MathService, MathServiceImpl} from "./math/math.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ContactComponentMessage,
    HrComponent,
    ToolNavComponent,
    StressComponent,
    FactorsComponent,
    SymmetricComponent,
    AsymmetricComponent,
    QvalueComponent,
    QvalueComponentRqd,
    QvalueComponentSets,
    QvalueComponentRoughness,
    QvalueComponentAlteration,
    QvalueComponentStopSurface,
    QfactorComponentStopSurface,
    OutcomeComponent,
    StabilityComponent,
    SymResComponent,
    QResComponent,
    StressResComponent,
    FactorsResComponent,
    MinHeightDirective,
    MaxHeightDirective,
    MaxSideWidthDirective,
    MinSideWidthDirective,
    MaxFhWidthDirective,
    MinFhWidthDirective,
    MinRqdDirective,
    MaxRqdDirective,
    MinJnDirective,
    MaxJnDirective,
    MinJrDirective,
    MaxJrDirective,
    MinJaDirective,
    MaxJaDirective,
    MinDepthDirective,
    MaxDepthDirective,
    MinModulusDirective,
    MaxModulusDirective,
    MinVertStressDirective,
    MinHorStressDirective,
    MinUcsDirective,
    MaxUcsDirective,
    MinStopeDipDirective,
    MaxStopeDipDirective,
    MinDipDiffDirective,
    MaxDipDiffDirective,
    CompleteComponent,
    DataSharingComponent,
    DataSharingComponentShared,
    FaultFactorComponent,
    MaxSideTopWidthDirective,
    MinSideTopWidthDirective,
    MaxSideBottomWidthDirective,
    MinSideBottomWidthDirective,
    MaxSideLengthDirective,
    MinSideLengthDirective,
    AsymResComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MatDialogModule,
    MatExpansionModule,
    ChartsModule,
    MatFormFieldModule,
    MatTabsModule,
    MatTooltipModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MathModule.forRoot()  
 ],
  exports: [
    ToolNavComponent],
  entryComponents: [QvalueComponent, QvalueComponentRqd, QvalueComponentRoughness, QvalueComponentSets, QvalueComponentAlteration, QvalueComponentStopSurface,QfactorComponentStopSurface,
    DataSharingComponent, ContactComponentMessage, FaultFactorComponent,DataSharingComponentShared],
  providers: [
    ForAllService,
    qvaluefactor,
    abcfactor,
    MathServiceImpl,
    PredictService,
    stabilityService,
    hrvalues,
    AboutDownloadService,
    allResetValues,
    PredictionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
