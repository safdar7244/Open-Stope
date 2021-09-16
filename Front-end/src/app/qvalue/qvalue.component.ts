import { Component, OnInit,Inject, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from "@angular/material/dialog";
import { ForAllService } from '../services/for-all.service';
import { Overlay} from '@angular/cdk/overlay';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { retryWhen } from 'rxjs/operators';
import { qvaluefactor } from '../services/qvalue-factor.service'
import { allResetValues } from '../services/All-Reset-Form.service'

export interface DialogData {
  coreL: number;
  totalL: number;
}

@Component({
  selector: 'app-qvalue',
  templateUrl: './qvalue.component.html',
  styleUrls: ['./qvalue.component.scss']
})

export class QvalueComponent implements OnInit {
  qForm: FormGroup;
  public rqd: number;

  //temp values for calculation
  public rqdTemp: number;
  public jointSetTemp: number;
  public jointRoughnessTemp: number;
  public jointAlterationTemp: number;

  public jointSet: number;
  public jointRoughness: number;
  public jointAlteration: number;



  public qRes: number;
  public Jn: string;
  public Jr: string;
  public Ja: string;

  public qQuality: string;
  public qQuality_crown: string;
  public qQuality_hw: string;
  public qQuality_fw: string;
  public qQuality_sw1: string;
  public qQuality_sw2: string;

  public rqdQuality: string;
  public rqdQuality_crown: string;
  public rqdQuality_hw: string;
  public rqdQuality_fw: string;
  public rqdQuality_sw1: string;
  public rqdQuality_sw2: string;

  public coreL: number;
  public totalL: number;
  public description: string;
  public sendValue: number;

  public wallContact: string;
  public ssurface: string;

  public qRes_crown: number;
  public qRes_hw: number;
  public qRes_fw: number;
  public qRes_sw1: number;
  public qRes_sw2: number;

  public rqd_crown: number;
  public rqd_hw: number;
  public rqd_fw: number;
  public rqd_sw1: number;
  public rqd_sw2: number;
 
  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog, 
    private service: ForAllService, private overlay: Overlay, private newService: qvaluefactor,private resetService:allResetValues ) { }
    Xssurface="";
    Xrqd="";
    XjointSet="";
    XwallContact="";
    XjointRoughness="";
    XjointAlteration="";
  openModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width ='45%';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
    dialogConfig.data = {
  };
    this.dialog.open(QvalueComponentRqd,dialogConfig )
       .afterClosed().subscribe(result => {
    console.log('The dialog was closed', (result.coreL / result.totalL));

    ((<HTMLInputElement>document.getElementById("rqd")).value as unknown as number)=((result.coreL / result.totalL)*100);

    console.log("--->   ",(<HTMLInputElement>document.getElementById("rqd")).value )
    this.rqdTemp=(result.coreL / result.totalL)
    // console.log(<HTMLInputElement>document.getElementById("rqd"))
  });
  }

  openModal2(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width ='45%';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
    dialogConfig.data = {
    };
    this.dialog.open(QvalueComponentSets,dialogConfig )
    .afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.coreL);
  
      if(result.coreL ==1){
        this.jointSetTemp=0.75

      }
      else if(result.coreL ==2){
        this.jointSetTemp=2

      }
      else if(result.coreL ==3){
        this.jointSetTemp=3

      }
      else if(result.coreL ==4){
        this.jointSetTemp=4

      }
      else if(result.coreL ==5){
        this.jointSetTemp=6

      }
      else if(result.coreL ==6){
        this.jointSetTemp=9

      }
      else if(result.coreL ==7){
        this.jointSetTemp=12

      }
      else if(result.coreL ==8){
        this.jointSetTemp=15

      }
      else if(result.coreL ==9){
        this.jointSetTemp=20

      }
      else {
return;
      }
      ((<HTMLInputElement>document.getElementById("jointSet")).value as unknown as number)=this.jointSetTemp;
      // console.log(<HTMLInputElement>document.getElementById("rqd"))
    });
  }

  openModal3(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width ='45%';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
    dialogConfig.data = {
    };
    this.dialog.open(QvalueComponentRoughness,dialogConfig )
    .afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.coreL);
      this.jointRoughnessTemp=result.coreL;
      ((<HTMLInputElement>document.getElementById("jointRoughness")).value as unknown as number)=this.jointRoughnessTemp;

    }
    )
  }
  onChange(ee:any): void{
    console.log("onChnage...",ee)
  }
  openModal4(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width ='45%';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
    dialogConfig.data = {
    };
    this.dialog.open(QvalueComponentAlteration,dialogConfig )
    .afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.coreL);
      this.jointAlterationTemp=result.coreL;
      ((<HTMLInputElement>document.getElementById("jointAlteration")).value as unknown as number)=this.jointAlterationTemp;

    }
    )
  }
  submitReset():void{
    if((<HTMLInputElement>document.getElementById("ssurface"))){
      (<HTMLInputElement>document.getElementById("ssurface")).value="";}
      if((<HTMLInputElement>document.getElementById("rqd"))){
      (<HTMLInputElement>document.getElementById("rqd")).value="";}
      if((<HTMLInputElement>document.getElementById("jointSet"))){
      (<HTMLInputElement>document.getElementById("jointSet")).value="";}
      if((<HTMLInputElement>document.getElementById("wallContact"))){
      (<HTMLInputElement>document.getElementById("wallContact")).value="";}
       if((<HTMLInputElement>document.getElementById("jointRoughness"))){
      (<HTMLInputElement>document.getElementById("jointRoughness")).value="";}
      if((<HTMLInputElement>document.getElementById("jointAlteration"))){
      (<HTMLInputElement>document.getElementById("jointAlteration")).value="";}
      // this.router.navigate(['/hr/symmetric/sym-res'], {relativeTo: this.route});
  }
  // openModal5(): void {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.width ='45%';
  //   // dialogConfig.height='55%';

  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
  //   dialogConfig.data = {
  //   };
  //   this.dialog.open(QvalueComponentStopSurface,dialogConfig )
  //   .afterClosed().subscribe(result => {
  //     console.log('The dialog was closed', result.coreL);
  //     if(result.coreL=="1"){
  //       console.log("1--QCal call--",(<HTMLInputElement>document.getElementById("rqd")).value)
  //       this.QCalc((<HTMLInputElement>document.getElementById("rqd")).value as unknown as number,(<HTMLInputElement>document.getElementById("jointSet")).value as unknown as number,(<HTMLInputElement>document.getElementById("jointRoughness")).value as unknown as number,(<HTMLInputElement>document.getElementById("jointAlteration")).value as unknown as number)
  //     }
  //     else if(result.coreL=="2"){
  //       console.log("2-- form reset....--");
        
  //       // console.log("--->", (<HTMLInputElement>document.getElementById("ssurface")) );
  //     if((<HTMLInputElement>document.getElementById("ssurface"))){
  //      (<HTMLInputElement>document.getElementById("ssurface")).value="";}
  //      if((<HTMLInputElement>document.getElementById("rqd"))){
  //      (<HTMLInputElement>document.getElementById("rqd")).value="";}
  //      if((<HTMLInputElement>document.getElementById("jointSet"))){
  //      (<HTMLInputElement>document.getElementById("jointSet")).value="";}
  //      if((<HTMLInputElement>document.getElementById("wallContact"))){
  //      (<HTMLInputElement>document.getElementById("wallContact")).value="";}
  //       if((<HTMLInputElement>document.getElementById("jointRoughness"))){
  //      (<HTMLInputElement>document.getElementById("jointRoughness")).value="";}
  //      if((<HTMLInputElement>document.getElementById("jointAlteration"))){
  //      (<HTMLInputElement>document.getElementById("jointAlteration")).value="";}
  //      this.router.navigate(['/hr/symmetric/sym-res'], {relativeTo: this.route});
  //      this.router.navigate(['/qvalue'], {relativeTo: this.route});


  //     }
  //     else if(result.coreL=="3"){
  //       console.log("3----")
           
  //       // console.log("--->", (<HTMLInputElement>document.getElementById("ssurface")) );
  //     if((<HTMLInputElement>document.getElementById("ssurface"))){
  //       (<HTMLInputElement>document.getElementById("ssurface")).value="";}
  //       if((<HTMLInputElement>document.getElementById("rqd"))){
  //       (<HTMLInputElement>document.getElementById("rqd")).value="";}
  //       if((<HTMLInputElement>document.getElementById("jointSet"))){
  //       (<HTMLInputElement>document.getElementById("jointSet")).value="";}
  //       if((<HTMLInputElement>document.getElementById("wallContact"))){
  //       (<HTMLInputElement>document.getElementById("wallContact")).value="";}
  //        if((<HTMLInputElement>document.getElementById("jointRoughness"))){
  //       (<HTMLInputElement>document.getElementById("jointRoughness")).value="";}
  //       if((<HTMLInputElement>document.getElementById("jointAlteration"))){
  //       (<HTMLInputElement>document.getElementById("jointAlteration")).value="";}
  //       this.router.navigate(['/hr/symmetric/sym-res'], {relativeTo: this.route});
  //       this.router.navigate(['/qvalue'], {relativeTo: this.route});
 
 
    
  //     }
  //     else{
  //       console.log("else...")
  //     }
  //   }
  //   )
  // }

  selectChangeHandler1 (event: any) {
    this.wallContact = event.target.value;
  } 
  selectChangeHandler2 (event: any) {
    this.ssurface = event.target.value;

  } 
  selectChange(){
    console.log("SelectChna")
  }
  onSubmit() {
    if (this.qForm) {
      console.log("Form Submitted!");
      this.qForm.reset();
    }
    else
    console.log("not submitted")
  }

  QCalc(rqd: any, jointSet: number, jointRoughness: number, jointAlteration: number) {



    if((<HTMLInputElement>document.getElementById("ssurface")).value){
   
   if((<HTMLInputElement>document.getElementById("rqd")).value ){
     if((<HTMLInputElement>document.getElementById("jointSet")).value){
       if( (<HTMLInputElement>document.getElementById("wallContact")).value){
         if((<HTMLInputElement>document.getElementById("jointRoughness")).value){
            if((<HTMLInputElement>document.getElementById("jointAlteration")) .value){
              console.log("Form full: ",(<HTMLInputElement>document.getElementById("rqd")).value)
              this.newService.set((<HTMLInputElement>document.getElementById("ssurface")).value);
                this.resetService.setqval((<HTMLInputElement>document.getElementById("ssurface")).value,(<HTMLInputElement>document.getElementById("rqd")).value,(<HTMLInputElement>document.getElementById("jointSet")).value, (<HTMLInputElement>document.getElementById("wallContact")).value,(<HTMLInputElement>document.getElementById("jointRoughness")).value,(<HTMLInputElement>document.getElementById("jointAlteration")) .value);
            }
            else{
              console.log("form fields emoty...")
              return;
            }
         }
         else{
          console.log("form fields emoty...")
          return;
        }
       }
       else{
        console.log("form fields emoty...")
        return;
      }
     }
     else{
      console.log("form fields emoty...")
      return;
    }
   }
   else{
    console.log("form fields emoty...")
    return;
  }
   

    }
    else{
      console.log("form fields emoty...")
      return;
    }
  
   

    console.log("->",rqd,"--",jointSet,"--",jointRoughness,"--",jointAlteration)

  //  this.router.navigate(['/hr/symmetric/sym-res'], {relativeTo: this.route});
    // this.router.navigate(['/qvalue'], {relativeTo: this.route});    // this.router.navigate(['q-res'], {relativeTo: this.route});
    this.router.navigate(['/qvalue'], {relativeTo: this.route});
    setTimeout(() => {
      this.router.navigate(['/qvalue/q-res'], {relativeTo: this.route});

      // this.router.navigate(['/qvalue'], {relativeTo: this.route});

    }, 1000);

//     this.jointSet = jointSet;
//     this.jointRoughness = jointRoughness;
//     this.jointAlteration = jointAlteration;
    
//     if(rqd){    
//       this.rqd = rqd;
//       }
//       else{
//         this.rqd=this.rqdTemp;
//         this.rqdTemp=null;
//       }
//       console.log("CHECKXX   : ",this.rqd  )
//       if(jointSet){
//         this.jointSet = jointSet;

//       }
//       else{
//         this.jointSet = this.jointSetTemp;

//       }

// if(jointRoughness){
//   this.jointRoughness=jointRoughness
// }else{
//   this.jointRoughness=this.jointRoughnessTemp

// }

// if(jointAlteration){
//   this.jointAlteration=jointAlteration
// }else{
//   this.jointAlteration=this.jointAlterationTemp

// }
this.rqd=(<HTMLInputElement>document.getElementById("rqd")).value as unknown as number;

this.jointSet=(<HTMLInputElement>document.getElementById("jointSet")).value as unknown as number;
this.jointRoughness=(<HTMLInputElement>document.getElementById("jointRoughness")).value as unknown as number;
this.jointAlteration=(<HTMLInputElement>document.getElementById("jointAlteration")).value as unknown as number;
console.log(this.rqd,"--<QCal>->",this.jointSet,"--<QCal>->",this.jointRoughness,"--<QCal>->",this.jointAlteration)

      this.qRes = (this.rqd / this.jointSet * this.jointRoughness / this.jointAlteration);


      console.log("calculate..",this.rqd)
      

    if (this.ssurface=='Crown'){
      this.qRes_crown = this.qRes;
      this.qRes_crown = Math.round(this.qRes_crown * 1e2) / 1e2;
      this.service.changeQRes_crown(this.qRes_crown);
      this.newService.setQ(this.qRes_crown)
    } else if (this.ssurface=='HW'){
      this.qRes_hw = this.qRes;
      this.qRes_hw = Math.round(this.qRes_hw * 1e2) / 1e2;
      this.service.changeQRes_hw(this.qRes_hw);
      this.newService.setQ(this.qRes_hw)
    } else if (this.ssurface =='FW'){
      this.qRes_fw = this.qRes;
      this.qRes_fw = Math.round(this.qRes_fw * 1e2) / 1e2;
      this.service.changeQRes_fw(this.qRes_fw);
      this.newService.setQ(this.qRes_fw)
    } else if (this.ssurface=='SW1'){
      this.qRes_sw1=this.qRes;
      this.qRes_sw1 = Math.round(this.qRes_sw1 * 1e2) / 1e2;
      this.service.changeQRes_sw1(this.qRes_sw1);
      this.newService.setQ(this.qRes_sw1)
    } else if (this.ssurface=='SW2'){
      this.qRes_sw2=this.qRes;
      this.qRes_sw2 = Math.round(this.qRes_sw2 * 1e2) / 1e2;
      this.service.changeQRes_sw2(this.qRes_sw2);
      this.newService.setQ(this.qRes_sw2)
    } else if (this.ssurface=='same'){
      this.qRes = Math.round(this.qRes * 1e2) / 1e2;
      this.qRes_crown=this.qRes_fw=this.qRes_hw=this.qRes_sw1=this.qRes_sw2=this.qRes;
      this.service.changeQRes_crown(this.qRes_crown);
      this.newService.setQ(this.qRes)
      this.service.changeQRes_hw(this.qRes_hw);
      this.service.changeQRes_fw(this.qRes_fw);
      this.service.changeQRes_sw1(this.qRes_sw1);
      this.service.changeQRes_sw2(this.qRes_sw2);
    } else {
      "Please select stope surface"
    }
  
// Modified Q description
  if(0.001 < this.qRes && this.qRes <=0.01){
    this.qQuality = 'exceptionally poor';
  } else if (0.01 < this.qRes && this.qRes <=0.5) {
    this.qQuality = 'extremely poor';
  } else if (0.5 < this.qRes && this.qRes <=1) {
    this.qQuality = 'very poor';
  } else if (1 < this.qRes && this.qRes <=4) {
    this.qQuality = 'poor';
  } else if (4 < this.qRes && this.qRes <=10){
    this.qQuality = 'fair';
  } else if (10 < this.qRes && this.qRes <=40){
    this.qQuality = 'good';
  } else if (40 < this.qRes && this.qRes <=100){
    this.qQuality = 'very good';
  } else if (100 < this.qRes && this.qRes <=1000){
    this.qQuality = 'extremely good';
  } else {
    this.qQuality = 'Check modified Q value';
  }

  //Modified Q description for each stope surface 
  if (this.ssurface=='Crown'){
    this.qQuality_crown= this.qQuality;
    this.service.changeQQuality_crown(this.qQuality_crown);
  } else if (this.ssurface=='HW'){
    this.qQuality_hw= this.qQuality;
    this.service.changeQQuality_hw(this.qQuality_hw);
  } else if (this.ssurface =='FW'){
    this.qQuality_fw= this.qQuality;
    this.service.changeQQuality_fw(this.qQuality_fw);
  } else if (this.ssurface=='SW1'){
    this.qQuality_sw1= this.qQuality;
    this.service.changeQQuality_sw1(this.qQuality_sw1);
  } else if (this.ssurface=='SW2'){
    this.qQuality_sw2= this.qQuality;
    this.service.changeQQuality_sw2(this.qQuality_sw2);
  } else if (this.ssurface=='same'){
    this.qQuality_crown= this.qQuality_fw=this.qQuality_fw= this.qQuality_sw1=this.qQuality_sw2=this.qQuality;
    this.service.changeQQuality_crown(this.qQuality_crown);;
    this.service.changeQQuality_hw(this.qQuality_hw);
    this.service.changeQQuality_fw(this.qQuality_fw);
    this.service.changeQQuality_sw1(this.qQuality_sw1);
    this.service.changeQQuality_sw2(this.qQuality_sw2);
  } else {
    "Please check the modified Q values"
  }

// RQD for each stope surface 
  if (this.ssurface=='Crown'){
    this.rqd_crown = this.rqd;
    this.rqd_crown = Math.round(this.rqd_crown * 1e2) / 1e2;
    this.service.changeRqd_crown(this.rqd_crown);
  } else if (this.ssurface=='HW'){
    this.rqd_hw = this.rqd;
    this.rqd_hw = Math.round(this.rqd_hw * 1e2) / 1e2;
    this.service.changeRqd_hw(this.rqd_hw);
  } else if (this.ssurface =='FW'){
    this.rqd_fw = this.rqd;
    this.rqd_fw = Math.round(this.rqd_fw * 1e2) / 1e2;
    this.service.changeRqd_fw(this.rqd_fw);
  } else if (this.ssurface=='SW1'){
    this.rqd_sw1=this.rqd;
    this.rqd_sw1 = Math.round(this.rqd_sw1 * 1e2) / 1e2;
    this.service.changeRqd_sw1(this.rqd_sw1);
  } else if (this.ssurface=='SW2'){
    this.rqd_sw2=this.rqd;
    this.rqd_sw2 = Math.round(this.rqd_sw2 * 1e2) / 1e2;
    this.service.changeRqd_sw2(this.rqd_sw2);
  } else if (this.ssurface=='same'){
    this.rqd = Math.round(this.rqd * 1e2) / 1e2;
    this.rqd_crown=this.rqd_fw=this.rqd_hw=this.rqd_sw1=this.rqd_sw2=this.rqd;
    this.service.changeRqd_crown(this.rqd_crown);
    this.service.changeRqd_hw(this.rqd_hw);
    this.service.changeRqd_fw(this.rqd_fw);
    this.service.changeRqd_sw1(this.rqd_sw1);
    this.service.changeRqd_sw2(this.rqd_sw2);
  } else {
    "Please select stope surface"
  }

// RQD description
  if(0 < this.rqd && this.rqd <=25){
    this.rqdQuality = 'very poor';
  } else if (25 < this.rqd && this.rqd <=50) {
    this.rqdQuality = 'poor';
  } else if (50 < this.rqd && this.rqd <=75) {
    this.rqdQuality = 'fair';
  } else if (75 < this.rqd && this.rqd <=100) {
    this.rqdQuality = 'good';
  } else {
    this.rqdQuality = 'Check RQD value';
  }

// RQD description for each stope surface
  if (this.ssurface=='Crown'){
    this.rqdQuality_crown= this.rqdQuality;
    this.service.changeRqdQuality_crown(this.rqdQuality_crown);
  } else if (this.ssurface=='HW'){
    this.rqdQuality_hw= this.rqdQuality;
    this.service.changeRqdQuality_hw(this.rqdQuality_hw);
  } else if (this.ssurface =='FW'){
    this.rqdQuality_fw= this.rqdQuality;
    this.service.changeRqdQuality_fw(this.rqdQuality_fw);
  } else if (this.ssurface=='SW1'){
    this.rqdQuality_sw1= this.rqdQuality;
    this.service.changeRqdQuality_sw1(this.rqdQuality_sw1);
  } else if (this.ssurface=='SW2'){
    this.rqdQuality_sw2= this.rqdQuality;
    this.service.changeRqdQuality_sw2(this.rqdQuality_sw2);
  } else if (this.ssurface=='same'){
    this.rqdQuality_crown= this.rqdQuality_fw=this.rqdQuality_fw= this.rqdQuality_sw1=this.rqdQuality_sw2=this.rqdQuality;
    this.service.changeRqdQuality_crown(this.rqdQuality_crown);;
    this.service.changeRqdQuality_hw(this.rqdQuality_hw);
    this.service.changeRqdQuality_fw(this.rqdQuality_fw);
    this.service.changeRqdQuality_sw1(this.rqdQuality_sw1);
    this.service.changeRqdQuality_sw2(this.rqdQuality_sw2);
  } else {
    "Please check the RQD values"
  }


  // Joint set description
  if(jointSet >=0.75 && jointSet < 2){
    this.Jn = 'massive, no or few joints';
    this.service.changeJn(this.Jn);
  } else if (jointSet >=2 && jointSet < 3) {
    this.Jn = 'one joint set';
    this.service.changeJn(this.Jn);
  } else if (jointSet >= 3 && jointSet < 4) {
    this.Jn = 'one joint set plus random joints';
    this.service.changeJn(this.Jn);
  } else if (jointSet >= 4 && jointSet < 6) {
    this.Jn = 'two joint sets';
    this.service.changeJn(this.Jn);
  } else if (jointSet >= 6 && jointSet < 9) {
    this.Jn = 'two joint sets plus random joints';
    this.service.changeJn(this.Jn);
  } else if (jointSet >= 9 && jointSet < 12) {
    this.Jn = 'three joint sets';
    this.service.changeJn(this.Jn);
  } else if (jointSet >= 12 && jointSet < 15) {
    this.Jn = 'three joint sets plus random joints';
    this.service.changeJn(this.Jn);
  } else if (jointSet >= 15 && jointSet < 20) {
    this.Jn = 'four or more joint sets';
    this.service.changeJn(this.Jn);
  } else if (jointSet == 20) {
    this.Jn = 'crushed rock';
    this.service.changeJn(this.Jn);
  } else {
    this.Jn = 'Check joint set value';
    this.service.changeJn(this.Jn);
  } 

// Joint roughness description
  if(jointRoughness>=0.5 && jointRoughness < 1 && (this.wallContact=='contact' || this.wallContact=='contactBefore')){
    this.Jr = 'Joint surface is slickensided, planar';
    this.service.changeJr(this.Jr);
  } else if (jointRoughness>=1 && jointRoughness < 1.5 && (this.wallContact=='contact' || this.wallContact=='contactBefore')) {
    this.Jr = 'Joint surface is smooth, planar';
    this.service.changeJr(this.Jr);
  } else if (jointRoughness>=1.5 && jointRoughness < 2 && (this.wallContact=='contact' || this.wallContact=='contactBefore')) {
    this.Jr = 'Joint surface is either rough, irregular, planar or slickensided, undulating';
    this.service.changeJr(this.Jr);
  } else if (jointRoughness>=2 && jointRoughness < 3 && (this.wallContact=='contact' || this.wallContact=='contactBefore')) {
    this.Jr = 'Joint surface is smooth, undulating';
    this.service.changeJr(this.Jr);
  } else if (jointRoughness>=3 && jointRoughness < 4 && (this.wallContact=='contact' || this.wallContact=='contactBefore')) {
    this.Jr = 'Joint surface is rough or irregular, undulating';
    this.service.changeJr(this.Jr);
  } else if (jointRoughness==4 && (this.wallContact=='contact' || this.wallContact=='contactBefore')) {
    this.Jr = 'Joints are discontinuous';
    this.service.changeJr(this.Jr);
  } else if (jointRoughness>0.5 && jointRoughness <= 1 && this.wallContact=='noContact') {
    this.Jr = 'Joints have either zone containing clay minerals or sandy, gravelly or crushed zone thick enough to prevent rock-wall contact';
    this.service.changeJr(this.Jr);
  } else {
    this.Jr = 'Check joint roughness value';
    this.service.changeJr(this.Jr);
  }

// Joint alteration description
  if(jointAlteration>=0.75 && jointAlteration < 1 && this.wallContact=='contact'){
    this.Ja = 'Tightly healed joints with hard, non-softening, impermeable filling,i.e., quartz or epidote';
    this.service.changeJa(this.Ja);
  } else if (jointAlteration>=1 && jointAlteration < 2 && this.wallContact=='contact') {
    this.Ja = 'Joint walls are unaltered with no coating or filling except from staining';
    this.service.changeJa(this.Ja);
  } else if (jointAlteration>=2 && jointAlteration < 3 && this.wallContact=='contact') {
    this.Ja = 'Joint walls are slightly altered with non-softening mineral coatings, sandy particles,clay-free disintegrated rock';
    this.service.changeJa(this.Ja);
  } else if (jointAlteration>=3 && jointAlteration < 4 && this.wallContact=='contact') {
    this.Ja = 'Joint walls with silty- or sandy-clay coatings, small clay fraction (non-softening)';
    this.service.changeJa(this.Ja);
  } else if (jointAlteration== 4 && this.wallContact=='contact') {
    this.Ja = 'Joint walls with softening or low friction clay mineral coatings, i.e., kaolinite or mica';
    this.service.changeJa(this.Ja);
  } else if (jointAlteration>4 && jointAlteration <= 20 && this.wallContact=='contact') {
    this.Ja = 'Check rock wall contact case';
    this.service.changeJa(this.Ja);
  } else if (jointAlteration>0.75 && jointAlteration < 4 && this.wallContact=='contactBefore') {
    this.Ja = 'Check rock wall contact case';
    this.service.changeJa(this.Ja);
  } else if (jointAlteration==4 && this.wallContact=='contactBefore') {
    this.Ja = 'Some joint wall contact with sandy particles, clay-free disintegrated rock';
    this.service.changeJa(this.Ja);
  } else if (jointAlteration>4 && jointAlteration <= 6 && this.wallContact=='contactBefore') {
    this.Jr = 'Some joint wall contact with strongly over-consolidated, non-softening, clay mineral fillings (continuous, but &lt;5 mm thickness)';
    this.service.changeJa(this.Ja);
  } else if (jointAlteration>6 && jointAlteration <= 8 && this.wallContact=='contactBefore') {
    this.Jr = 'Some joint wall contact with medium or low over-consolidation, softening, clay mineral fillings (continuous,but &lt;5 mm thickness)';
    this.service.changeJa(this.Ja);
  } else if (jointAlteration>8 && jointAlteration <= 12 && this.wallContact=='contactBefore') {
    this.Jr = 'Some joint wall contact with swelling-clay fillings, i.e., montmorillonite (continuous, but &lt;5 mm thickness)';
    this.service.changeJa(this.Ja);
  } else if (jointAlteration>12 && jointAlteration <= 20 && this.wallContact=='contactBefore') {
    this.Jr = 'Check rock wall contact case';
    this.service.changeJa(this.Ja);
  } else if (jointAlteration>=0.75 && jointAlteration <5 && this.wallContact=='noContact') {
    this.Jr = 'Check rock wall contact case';
    this.service.changeJa(this.Ja);
   } else if (jointAlteration==5 && this.wallContact=='noContact') {
    this.Jr = 'No rock wall contact. There are zones or bands of silty- or sandy-clay, small clay fraction (non-softening)';
    this.service.changeJa(this.Ja);
   } else if (jointAlteration>5 && jointAlteration <=6 && this.wallContact=='noContact') {
    this.Jr = 'No rock wall contact. There are zones or bands of disintegrated or crushed rock; strongly over-consolidated';
    this.service.changeJa(this.Ja);
   } else if (jointAlteration>6 && jointAlteration <=8 && this.wallContact=='noContact') {
    this.Jr = 'No rock wall contact. There are zones or bands of clay, disintegrated or crushed rock; medium or low over-consolidation or softening fillings';
    this.service.changeJa(this.Ja);
  } else if (jointAlteration>8 && jointAlteration <= 10 && this.wallContact=='noContact') {
    this.Jr = 'No rock wall contact. There are thick, continuous zones or bands of clay; strong over-consolidation';
    this.service.changeJa(this.Ja);
  }  else if (jointAlteration>10 && jointAlteration <= 12 && this.wallContact=='noContact') {
    this.Jr = 'No rock wall contact. There are zones or bands of clay, disintegrated or crushed rock';
    this.service.changeJa(this.Ja);
  }  else if (jointAlteration>12 && jointAlteration <= 13 && this.wallContact=='noContact') {
    this.Jr = 'No rock wall contact. There are thick, continuous zones or bands of clay. Medium to low over-consolidation';
    this.service.changeJa(this.Ja);
  } else if (jointAlteration>13 && jointAlteration <= 20 && this.wallContact=='noContact') {
    this.Jr = 'No rock wall contact. There are thick, continuous zones or bands with clay; swelling clay';
    this.service.changeJa(this.Ja);
  } else {
  this.Jr = 'Check rock wall contact case';
  this.service.changeJa(this.Ja);
}
}

  ngOnInit(): void {
    if(this.resetService.getqval1()){
      this.Xssurface=this.resetService.getqval1();


    }
    if(this.resetService.getqval2()){
      this.Xrqd=this.resetService.getqval2();

    }
    if(this.resetService.getqval3()){
      this.XjointSet=this.resetService.getqval3();

    }
    if(this.resetService.getqval4()){
      this.XwallContact=this.resetService.getqval4();

    }
    if(this.resetService.getqval5()){
      this.XjointRoughness=this.resetService.getqval5();

    }
    if(this.resetService.getqval6()){
      this.XjointAlteration=this.resetService.getqval6();
           this.router.navigate(['/qvalue/q-res'], {relativeTo: this.route});


    }
  }

}
//Modal 1 component - RQD calculation
@Component({
  selector: 'qvalue-component-rqd',
  templateUrl: './qvalue.component-rqd.html',
  styleUrls: ['./qvalue.component-rqd.scss']
})
export class QvalueComponentRqd {

  constructor(
    public dialogRef: MatDialogRef<QvalueComponentRqd>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    onClick(core : any , total :any){
      this.data.coreL=core;
      this.data.totalL=total;
      this.dialogRef.close(this.data);

    }
}

// Modal 2 - Joint Sets
@Component({
  selector: 'qvalue-component-sets',
  templateUrl: './qvalue.component-sets.html',
  styleUrls: ['./qvalue.component-sets.scss']
})

export class QvalueComponentSets {
  constructor(
    public dialogRef: MatDialogRef<QvalueComponentSets>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    onClick(e) {
      console.log(e.srcElement.value)
    //  this.data.value=e.srcElement.value;
    this.data.coreL=e.srcElement.value
    console.log("datas:",this.data)

      this.dialogRef.close(this.data);
      }
  }
// Modal 3 - Joint Roughness
@Component({
  selector: 'qvalue-component-roughness',
  templateUrl: './qvalue.component-roughness.html',
  styleUrls: ['./qvalue.component-roughness.scss']
})
export class QvalueComponentRoughness {

  constructor(
    public dialogRef: MatDialogRef<QvalueComponentRoughness>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    onClick(e){
      console.log("event : ",e.target.value)
      this.data.coreL=e.target.value
      console.log("datas:",this.data)
  
        this.dialogRef.close(this.data);    }
}

// Modal 4 - Joint Alteration
@Component({
  selector: 'qvalue-component-alteration',
  templateUrl: './qvalue.component-alteration.html',
  styleUrls: ['./qvalue.component-alteration.scss']
})
export class QvalueComponentAlteration {

  constructor(
    public dialogRef: MatDialogRef<QvalueComponentAlteration>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    onClick(e){
      console.log("event : ",e.target.value)
      this.data.coreL=e.target.value
      console.log("datas:",this.data)
  
        this.dialogRef.close(this.data);
    }
}

// //Modal 5 New Stope Surface
// @Component({
//   selector: 'qvalue-component-stope-surface',
//   templateUrl: './qvalue.component-stope-surface.html',
//   styleUrls: ['./qvalue.component-stope-surface.scss']
// })
// export class QvalueComponentStopSurface {

//   constructor(
//     public dialogRef: MatDialogRef<QvalueComponentStopSurface>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
//     onClick(e){
//       console.log("event : ",e.target.value)
//       this.data.coreL=e.target.value
//       console.log("datas:",this.data)
  
//         this.dialogRef.close(this.data);

//     }
//}

