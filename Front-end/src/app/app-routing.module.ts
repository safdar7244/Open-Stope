import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HrComponent } from './hr/hr.component';
import { ToolNavComponent } from './tool-nav/tool-nav.component';
import { StressComponent } from './stress/stress.component';
import { FactorsComponent } from './factors/factors.component';
import { SymmetricComponent } from './symmetric/symmetric.component';
import { AsymmetricComponent } from './asymmetric/asymmetric.component';
import { QvalueComponent } from './qvalue/qvalue.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { StabilityComponent } from './stability/stability.component';
import { SymResComponent } from './sym-res/sym-res.component';
import { QResComponent } from './q-res/q-res.component';
import { StressResComponent } from './stress-res/stress-res.component';
import { FactorsResComponent } from './factors-res/factors-res.component';
import { AsymResComponent } from './asym-res/asym-res.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tool-nav', component: ToolNavComponent},
  { path: 'hr', component: HrComponent,
    children: [
      { path: '', redirectTo: 'symmetric', pathMatch: 'full' },
      { path: 'symmetric', component: SymmetricComponent,
    children: [
      {path: 'sym-res', component: SymResComponent}
    ]},
      { path: 'asymmetric', component: AsymmetricComponent,
      children: [
        {path: 'asym-res', component: AsymResComponent}
      ]}]
  },
  { path: 'qvalue', component: QvalueComponent, 
  children: [
    {path: 'q-res', component: QResComponent}
  ] },
 
  { path: 'stress', component: StressComponent,
  children: [
    {path: 'stress-res', component: StressResComponent}
  ] },
  { path: 'factors', component: FactorsComponent,
  children: [
    {path: 'factors-res', component: FactorsResComponent}
  ] },
 
  { path: 'stability', component: StabilityComponent },
  { path: 'outcome', component: OutcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
