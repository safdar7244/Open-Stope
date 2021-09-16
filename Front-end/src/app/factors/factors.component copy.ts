import { Component, OnInit ,AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForAllService } from '../services/for-all.service';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { FaultFactorComponent } from '../fault-factor/fault-factor.component';
import { Overlay} from '@angular/cdk/overlay';
import { qvaluefactor } from '../services/qvalue-factor.service'

@Component({
  selector: 'app-factors',
  templateUrl: './factors.component.html',
  styleUrls: ['./factors.component.scss']
})

export class FactorsComponent implements OnInit , AfterViewInit {
  public stopeHeight: number;
  public fhWidth: number;
  public sideWidth: number;

  public stopeHeight2: number;
  public fhWidth2: number;
  public sideTopWidth: number;
  public sideBottomWidth: number;
  public sideLength: number;

  public qRes_crown: number;
  public qRes_hw: number;
  public qRes_fw: number;
  public qRes_sw1: number;
  public qRes_sw2: number;

  public crownIndStress: number;
  public sideIndStress: number;
  public fwIndStress: number;
  public hwIndStress: number;

  public ucs: number;
  public ucs_crown: number;
  public ucs_hw: number;
  public ucs_fw: number;
  public ucs_sw1: number;
  public ucs_sw2: number;

  public diffDip: number;
  public diffDip_crown: number;
  public diffDip_hw: number;
  public diffDip_fw: number;
  public diffDip_sw1: number;
  public diffDip_sw2: number;

  public stopeDip: number;
  public stopeDip_crown: number;
  public stopeDip_hw: number;
  public stopeDip_fw: number;
  public stopeDip_sw1: number;
  public stopeDip_sw2: number;

  public crown_Afactor_original: number;
  public crown_Afactor_modified: number;
  public hw_Afactor_original: number;
  public hw_Afactor_modified: number;
  public fw_Afactor_original: number;
  public fw_Afactor_modified: number;
  public side1_Afactor_original: number;
  public side1_Afactor_modified: number;
  public side2_Afactor_original: number;
  public side2_Afactor_modified: number;

  public crown_Bfactor_original: number;
  public crown_Bfactor_modified: number;
  public hw_Bfactor_original: number;
  public hw_Bfactor_modified: number;
  public fw_Bfactor_original: number;
  public fw_Bfactor_modified: number;
  public side1_Bfactor_original: number;
  public side1_Bfactor_modified: number;
  public side2_Bfactor_original: number;
  public side2_Bfactor_modified: number;

  public crown_Cfactor_original: number;
  public crown_Cfactor_modified: number;
  public hw_Cfactor_original: number;
  public hw_Cfactor_modified: number;
  public fw_Cfactor_original: number;
  public fw_Cfactor_modified: number;
  public side1_Cfactor_original: number;
  public side1_Cfactor_modified: number;
  public side2_Cfactor_original: number;
  public side2_Cfactor_modified: number;

  public time: string = '';
  public timeFactor_crown: number;
  public timeFactor_hw: number;
  public timeFactor_fw: number;
  public timeFactor_sw1: number;
  public timeFactor_sw2: number;

  public faultFactor_crown: number;
  public faultFactor_hw: number;
  public faultFactor_fw: number;
  public faultFactor_sw1: number;
  public faultFactor_sw2: number;

  public crownN: number;
  public crownN_mod: number;
  public side1N: number;
  public side1N_mod: number;
  public side2N: number;
  public side2N_mod: number;
  public hwN: number;
  public hwN_mod: number;
  public fwN: number;
  public fwN_mod: number;


  public stopeClass: string;
  public aspectRatio: number;
  public ssurface: string;
  public fault_surface: string;
  isShow = true;

  constructor(private router: Router, private route: ActivatedRoute, private overlay: Overlay, 
    private service: ForAllService, private dialog: MatDialog, private newService: qvaluefactor ) { }

@ViewChild('qvalueInput') qvalueInput: ElementRef;

ngAfterViewInit() {
    console.log("Jjijiji- > ",this.newService.get());
}
    //stope surface selection 
  selectChangeHandler (event: any) {
    console.log("onChange...")
    this.ssurface = event.target.value;
    if (this.ssurface =='Crown') {
      this.isShow = false;
      this.faultFactor_crown=1.0;
      this.service.changeFaultFactor_crown(this.faultFactor_crown);
    } else {
      this.isShow = true;
    }
  }
  onClick(event:any){
    const service=this.newService.get()
    console.log("service : " , service)


    if(service=="Crown"){
      console.log("index 1")
      event.target.options[2].disabled=true
      event.target.options[3].disabled=true
      event.target.options[4].disabled=true
      event.target.options[5].disabled=true


    }
    else if(service =="HW")
    {
      console.log("index 2")
      event.target.options[1].disabled=true
      event.target.options[3].disabled=true
      event.target.options[4].disabled=true
      event.target.options[5].disabled=true


    }
    else if(service =="FW")
    {
      console.log("index 3")
      event.target.options[1].disabled=true
      event.target.options[2].disabled=true
      event.target.options[4].disabled=true
      event.target.options[5].disabled=true


    }
    else if(service =="SW1")
    {
      console.log("index 4")
      event.target.options[1].disabled=true
      event.target.options[2].disabled=true
      event.target.options[3].disabled=true
      event.target.options[5].disabled=true

    }
    else if(service =="SW2")
    {
      console.log("index 5")
      event.target.options[1].disabled=true
      event.target.options[2].disabled=true
      event.target.options[3].disabled=true
      event.target.options[4].disabled=true

    }
    // event.target.options.selectedIndex=2;
    // event.target.options[3].disabled=true
  }

    //Time selection
  selectChangeHandler2 (event: any) {
    this.time = event.target.value;
  }
  
  // sending values to fault factor estimation on button click
  faultFactorCalc(stopeDip:number) {

    // aspect ratio definition 
    if (this.ssurface=='HW'){
      if (this.fhWidth2==0 && this.sideLength==0){
        this.aspectRatio=this.fhWidth/this.stopeHeight;
        this.aspectRatio = Math.round(this.aspectRatio * 1e1) / 1e1;
        this.service.changeAspectRatio(this.aspectRatio);
      } else {
        this.aspectRatio=this.fhWidth2/this.sideLength;
        this.aspectRatio = Math.round(this.aspectRatio * 1e1) / 1e1;
        this.service.changeAspectRatio(this.aspectRatio);
      }
    } else if (this.ssurface=='FW'){
      if (this.fhWidth2==0 && this.stopeHeight2==0){
        this.aspectRatio=this.fhWidth/this.stopeHeight;
        this.aspectRatio = Math.round(this.aspectRatio * 1e1) / 1e1;
        this.service.changeAspectRatio(this.aspectRatio);
      } else {
        this.aspectRatio=this.fhWidth2/this.stopeHeight2;
        this.aspectRatio = Math.round(this.aspectRatio * 1e1) / 1e1;
        this.service.changeAspectRatio(this.aspectRatio);
      }
    } else if (this.ssurface=='SW1' || this.ssurface=='SW2'){
      if (this.sideTopWidth==0 && this.sideBottomWidth==0 && this.stopeHeight2==0){
        this.aspectRatio=this.sideWidth/this.stopeHeight;
        this.aspectRatio = Math.round(this.aspectRatio * 1e1) / 1e1;
        this.service.changeAspectRatio(this.aspectRatio);
      } else {
        this.aspectRatio=(this.sideTopWidth+this.sideBottomWidth)/2/this.stopeHeight2;
        this.aspectRatio = Math.round(this.aspectRatio * 1e1) / 1e1;
        this.service.changeAspectRatio(this.aspectRatio);
      }
    }
    // stope surface definition for fault factor estimation 
    if (this.ssurface=='HW'){
      this.fault_surface='hangingwall';
      this.service.changeFault_surface(this.fault_surface);
    } else if (this.ssurface =='FW'){
      this.fault_surface='footwall';
      this.service.changeFault_surface(this.fault_surface);
    } else if (this.ssurface=='SW1'){
      this.fault_surface='sidewall 1';
      this.service.changeFault_surface(this.fault_surface);
    } else if (this.ssurface=='SW2'){
      this.fault_surface='sidewall 2';
      this.service.changeFault_surface(this.fault_surface);
    } else {
      "undefined"
    }
  
    this.ssurface = this.ssurface;
    this.service.changeSsurface(this.ssurface);
    this.stopeDip = stopeDip;
    this.service.changeStopeDip(this.stopeDip);

    if (0.1 <= this.aspectRatio && this.aspectRatio <=0.3) {
      this.stopeClass="tall";
      this.service.changeStopeClass(this.stopeClass);
    } else if (0.3 < this.aspectRatio && this.aspectRatio <=0.6) {
      this.stopeClass="regular";
      this.service.changeStopeClass(this.stopeClass);
    } else if (0.6 < this.aspectRatio) {
      this.stopeClass="short wide";
      this.service.changeStopeClass(this.stopeClass);
    } else {
      this.stopeClass="not classified";
      this.service.changeStopeClass(this.stopeClass);
    };

    const dialogConfig = new MatDialogConfig();
    dialogConfig.width ='40%';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
    this.dialog.open(FaultFactorComponent,dialogConfig )
}



// FACTORS' CALCULATIONS 
CalcFactors(ucs: number, diffDip: number, stopeDip: number) {
  
  this.router.navigate(['factors-res'], {relativeTo: this.route});

  if (this.ssurface=='Crown'){
    this.ucs_crown = ucs;
    this.diffDip_crown = diffDip;
    this.stopeDip_crown = stopeDip;
  } else if (this.ssurface=='HW'){
    this.ucs_hw = ucs;
    this.diffDip_hw = diffDip;
    this.stopeDip_hw = stopeDip;
  } else if (this.ssurface =='FW'){
    this.ucs_fw = ucs;
    this.diffDip_fw = diffDip;
    this.stopeDip_fw = stopeDip;
  } else if (this.ssurface=='SW1'){
    this.ucs_sw1 = ucs;
    this.diffDip_sw1 = diffDip;
    this.stopeDip_sw1 = stopeDip;
  } else if (this.ssurface=='SW2'){
    this.ucs_sw2 = ucs;
    this.diffDip_sw2 = diffDip;
     this.stopeDip_sw2 = stopeDip;
  } else {
    "Please select stope surface"
  }

  //A FACTOR Calculation - CROWN_original

  this.crownIndStress = Math.abs(this.crownIndStress);
  this.sideIndStress = Math.abs(this.sideIndStress);
  this.hwIndStress = Math.abs(this.hwIndStress);
  this.fwIndStress = Math.abs(this.fwIndStress);

  if (0 < (this.ucs_crown / this.crownIndStress) && (this.ucs_crown / this.crownIndStress) <= 10) {
    this.crown_Afactor_original = 9/80*this.ucs_crown/this.crownIndStress-0.125;
    this.crown_Afactor_original = Math.round(this.crown_Afactor_original * 1e2) / 1e2;
    this.service.changeCrown_Afactor_original(this.crown_Afactor_original);
  } else if ( (this.ucs_crown / this.crownIndStress) >= 10) {
    this.crown_Afactor_original = 1;
    this.service.changeCrown_Afactor_original(this.crown_Afactor_original);
  }
      
  //A FACTOR Calculation - CROWN_modified

  if ( (this.ucs_crown / this.crownIndStress) >= 10) {
    this.crown_Afactor_modified = 1;
    this.service.changeCrown_Afactor_modified(this.crown_Afactor_modified);
  } else if ((this.ucs_crown / this.crownIndStress) <= 2) {
    this.crown_Afactor_modified = 0.1;
    this.service.changeCrown_Afactor_modified(this.crown_Afactor_modified);
  } else if (2 < (this.ucs_crown/this.crownIndStress) && (this.ucs_crown / this.crownIndStress) < 10) {
    this.crown_Afactor_modified = 9/80*this.ucs_crown/this.crownIndStress-0.125;
    this.crown_Afactor_modified = Math.round(this.crown_Afactor_modified * 1e2) / 1e2;
    this.service.changeCrown_Afactor_modified(this.crown_Afactor_modified);
  }

  //A FACTOR Calculation - HANGINGWALL_original

  if (0 < (this.ucs_hw / this.hwIndStress) && (this.ucs_hw / this.hwIndStress) <= 10 ) {
    this.hw_Afactor_original = 9/80*this.ucs_hw/this.hwIndStress-0.125;
    this.hw_Afactor_original = Math.round(this.hw_Afactor_original * 1e2) / 1e2;
    this.service.changeHw_Afactor_original(this.hw_Afactor_original);
  } else if ((this.ucs_hw / this.hwIndStress) >= 10) {
    this.hw_Afactor_original = 1;
    this.service.changeHw_Afactor_original(this.hw_Afactor_original);
  }
    
  //A FACTOR Calculation - HANGINGWALL_modified

  if ((this.ucs_hw / this.hwIndStress) >= 10) {
    this.hw_Afactor_modified = 1;
    this.service.changeHw_Afactor_modified(this.hw_Afactor_modified);
  } else if ((this.ucs_hw / this.hwIndStress) <= 2) {
    this.hw_Afactor_modified = 0.1;
    this.service.changeHw_Afactor_modified(this.hw_Afactor_modified);
  } else if (2 < (this.ucs_hw / this.hwIndStress) && (this.ucs_hw / this.hwIndStress) < 10) {
    this.hw_Afactor_modified = 9/80*this.ucs_hw/this.hwIndStress-0.125;
    this.hw_Afactor_modified = Math.round(this.hw_Afactor_modified * 1e2) / 1e2;
    this.service.changeHw_Afactor_modified(this.hw_Afactor_modified);
  }

  //A FACTOR Calculation - FOOTWALL_original

  if (0 < (this.ucs_fw / this.fwIndStress) && (this.ucs_fw / this.fwIndStress) <= 10 ) {
    this.fw_Afactor_original = 9/80*this.ucs_fw/this.fwIndStress-0.125;
    this.fw_Afactor_original = Math.round(this.fw_Afactor_original * 1e2) / 1e2;
    this.service.changeFw_Afactor_original(this.fw_Afactor_original);
  } else if ((this.ucs_fw / this.fwIndStress) >= 10) {
    this.fw_Afactor_original = 1;
    this.service.changeFw_Afactor_original(this.fw_Afactor_original);
  }
        
  //A FACTOR Calculation - FOOTWALL_modified

  if ((this.ucs_fw / this.fwIndStress) >= 10) {
    this.fw_Afactor_modified = 1;
    this.service.changeFw_Afactor_modified(this.fw_Afactor_modified);
  } else if ((this.ucs_fw / this.fwIndStress) <= 2) {
    this.fw_Afactor_modified = 0.1;
    this.service.changeFw_Afactor_modified(this.fw_Afactor_modified);
  } else if (2 < (this.ucs_fw / this.fwIndStress) && (this.ucs_fw / this.fwIndStress) <= 10) {
    this.fw_Afactor_modified = 9/80*this.ucs_fw/this.fwIndStress-0.125;
    this.fw_Afactor_modified = Math.round(this.fw_Afactor_modified * 1e2) / 1e2;
    this.service.changeFw_Afactor_modified(this.fw_Afactor_modified);
  }

  //A FACTOR Calculation - SIDEWALL1_original
  
  if (0 < (this.ucs_sw1/this.sideIndStress) && (this.ucs_sw1 / this.sideIndStress) <= 10 ) {
    this.side1_Afactor_original = 9/80*this.ucs_sw1/this.sideIndStress-0.125;
    this.side1_Afactor_original = Math.round(this.side1_Afactor_original * 1e2) / 1e2;
    this.service.changeSide1_Afactor_original(this.side1_Afactor_original);
  } else if ((this.ucs_sw1 / this.sideIndStress) >= 10) {
    this.side1_Afactor_original = 1;
    this.service.changeSide1_Afactor_original(this.side1_Afactor_original);
  }

  //A FACTOR Calculation - SIDEWALL1_modified

  if ((this.ucs_sw1 / this.sideIndStress) >= 10) {
    this.side1_Afactor_modified =1;
    this.service.changeSide1_Afactor_modified(this.side1_Afactor_modified);
  } else if ((this.ucs_sw1/this.sideIndStress) <= 2) {
    this.side1_Afactor_modified = 0.1;
    this.service.changeSide1_Afactor_modified(this.side1_Afactor_modified);
  } else if ((2 < this.ucs_sw1/this.sideIndStress) && (this.ucs_sw1 / this.sideIndStress) < 10) {
    this.side1_Afactor_modified = 9/80*this.ucs_sw1/this.sideIndStress-0.125;
    this.side1_Afactor_modified = Math.round(this.side1_Afactor_modified * 1e2) / 1e2;
    this.service.changeSide1_Afactor_modified(this.side1_Afactor_modified);
  }

  //A FACTOR Calculation - SIDEWALL2_original

  if (0 < (this.ucs_sw2/this.sideIndStress) && (this.ucs_sw2 / this.sideIndStress) <= 10 ) {
    this.side2_Afactor_original = 9/80*this.ucs_sw2/this.sideIndStress-0.125;
    this.side2_Afactor_original = Math.round(this.side2_Afactor_original * 1e2) / 1e2;
    this.service.changeSide2_Afactor_original(this.side2_Afactor_original);
  } else if ((this.ucs_sw2 / this.sideIndStress) >= 10) {
    this.side2_Afactor_original = 1;
    this.service.changeSide2_Afactor_original(this.side2_Afactor_original);
  }

  //A FACTOR Calculation - SIDEWALL2_modified

  if ((this.ucs_sw2 / this.sideIndStress) >= 10) {
    this.side2_Afactor_modified =1;
    this.service.changeSide2_Afactor_modified(this.side2_Afactor_modified);
  } else if ((this.ucs_sw2/this.sideIndStress) <= 2) {
    this.side2_Afactor_modified = 0.1;
    this.service.changeSide2_Afactor_modified(this.side2_Afactor_modified);
  } else if ((2 < this.ucs_sw2/this.sideIndStress) && (this.ucs_sw2 / this.sideIndStress) < 10) {
    this.side2_Afactor_modified = 9/80*this.ucs_sw2/this.sideIndStress-0.125;
    this.side2_Afactor_modified = Math.round(this.side2_Afactor_modified * 1e2) / 1e2;
    this.service.changeSide2_Afactor_modified(this.side2_Afactor_modified);
  }

  // B FACTOR Calculation - CROWN Original

  if (0 <= this.diffDip_crown && this.diffDip_crown <= 20) {
    this.crown_Bfactor_original = 0.5 - 0.01*this.diffDip_crown;
    this.crown_Bfactor_original = Math.round(this.crown_Bfactor_original * 1e2) / 1e2;
    this.service.changeCrown_Bfactor_original(this.crown_Bfactor_original);
  } else if ( 20 < this.diffDip_crown && this.diffDip_crown <= 45) {
    this.crown_Bfactor_original = 0.004*this.diffDip_crown + 0.22;
    this.crown_Bfactor_original = Math.round(this.crown_Bfactor_original * 1e2) / 1e2;
    this.service.changeCrown_Bfactor_original(this.crown_Bfactor_original);
  } else if (45 < this.diffDip_crown && this.diffDip_crown <= 60) {
    this.crown_Bfactor_original = 2/75*this.diffDip_crown - 0.8;
    this.crown_Bfactor_original = Math.round(this.crown_Bfactor_original * 1e2) / 1e2;
    this.service.changeCrown_Bfactor_original(this.crown_Bfactor_original);
  } else if (60 < this.diffDip_crown && this.diffDip_crown <= 90) {
    this.crown_Bfactor_original = 1/150*this.diffDip_crown + 0.4;
    this.crown_Bfactor_original = Math.round(this.crown_Bfactor_original * 1e2) / 1e2;
    this.service.changeCrown_Bfactor_original(this.crown_Bfactor_original);
  }

  // B FACTOR Calculation - CROWN Modified

 if (0 < this.diffDip_crown && this.diffDip_crown <= 10) {
    this.crown_Bfactor_modified = 0.3 - 0.01*this.diffDip_crown;
    this.crown_Bfactor_modified = Math.round(this.crown_Bfactor_modified * 1e2) / 1e2;
    this.service.changeCrown_Bfactor_modified(this.crown_Bfactor_modified);
  } else if (10 < this.diffDip_crown && this.diffDip_crown <= 30) {
    this.crown_Bfactor_modified = 0.2;
    this.service.changeCrown_Bfactor_modified(this.crown_Bfactor_modified);
  } else if (30 < this.diffDip_crown && this.diffDip_crown <= 60 ) {
    this.crown_Bfactor_modified = 0.02*this.diffDip_crown - 0.4;
    this.crown_Bfactor_modified = Math.round(this.crown_Bfactor_modified * 1e2) / 1e2;
    this.service.changeCrown_Bfactor_modified(this.crown_Bfactor_modified);
  } else if (60 < this.diffDip_crown && this.diffDip_crown <= 90){
    this.crown_Bfactor_modified = 1/150*this.diffDip_crown + 0.4;
    this.crown_Bfactor_modified = Math.round(this.crown_Bfactor_modified * 1e2) / 1e2;
    this.service.changeCrown_Bfactor_modified(this.crown_Bfactor_modified);
  }

  // B FACTOR Calculation - HANGINGWALL Original

  if (0 <= this.diffDip_hw && this.diffDip_hw <= 20) {
    this.hw_Bfactor_original = 0.5 - 0.01*this.diffDip_hw;
    this.hw_Bfactor_original = Math.round(this.hw_Bfactor_original * 1e2) / 1e2;
    this.service.changeHw_Bfactor_original(this.hw_Bfactor_original);
  } else if ( 20 < this.diffDip_hw && this.diffDip_hw <= 45) {
    this.hw_Bfactor_original = 0.004*this.diffDip_hw + 0.22;
    this.hw_Bfactor_original = Math.round(this.hw_Bfactor_original * 1e2) / 1e2;
    this.service.changeHw_Bfactor_original(this.hw_Bfactor_original);
  } else if (45 < this.diffDip_hw && this.diffDip_hw <= 60) {
    this.hw_Bfactor_original = 2/75*this.diffDip_hw - 0.8;
    this.hw_Bfactor_original = Math.round(this.hw_Bfactor_original * 1e2) / 1e2;
    this.service.changeHw_Bfactor_original(this.hw_Bfactor_original);
  } else if (60 < this.diffDip_hw && this.diffDip_hw <= 90) {
    this.hw_Bfactor_original = 1/150*this.diffDip_hw + 0.4;
    this.hw_Bfactor_original = Math.round(this.hw_Bfactor_original * 1e2) / 1e2;
    this.service.changeHw_Bfactor_original(this.hw_Bfactor_original);
  }

  // B FACTOR Calculation - HANGINGWALL Modified

  if (0 < this.diffDip_hw && this.diffDip_hw <= 10) {
    this.hw_Bfactor_modified = 0.3 - 0.01*this.diffDip_hw;
    this.hw_Bfactor_modified = Math.round(this.hw_Bfactor_modified * 1e2) / 1e2;
    this.service.changeHw_Bfactor_modified(this.hw_Bfactor_modified);
  } else if (10 < this.diffDip_hw && this.diffDip_hw <= 30) {
    this.hw_Bfactor_modified = 0.2;
    this.service.changeHw_Bfactor_modified(this.hw_Bfactor_modified);
  } else if (30 < this.diffDip_hw && this.diffDip_hw <= 60 ) {
    this.hw_Bfactor_modified = 0.02*this.diffDip_hw - 0.4;
    this.hw_Bfactor_modified = Math.round(this.hw_Bfactor_modified * 1e2) / 1e2;
    this.service.changeHw_Bfactor_modified(this.hw_Bfactor_modified);
  }  else if  (60 < this.diffDip_hw && this.diffDip_hw <= 90){
    this.hw_Bfactor_modified = 1/150*this.diffDip_hw + 0.4;
    this.hw_Bfactor_modified = Math.round(this.hw_Bfactor_modified * 1e2) / 1e2;
    this.service.changeHw_Bfactor_modified(this.hw_Bfactor_modified);
  }

  // B FACTOR Calculation - FOOTWALL Original 

  if (0 <= this.diffDip_fw && this.diffDip_fw <= 20) {
    this.fw_Bfactor_original = 0.5 - 0.01*this.diffDip_fw;
    this.fw_Bfactor_original = Math.round(this.fw_Bfactor_original * 1e2) / 1e2;
    this.service.changeFw_Bfactor_original(this.fw_Bfactor_original);
  } else if ( 20 < this.diffDip_fw && this.diffDip_fw <= 45) {
    this.fw_Bfactor_original = 0.004*this.diffDip_fw + 0.22;
    this.fw_Bfactor_original = Math.round(this.fw_Bfactor_original * 1e2) / 1e2;
    this.service.changeFw_Bfactor_original(this.fw_Bfactor_original);
  } else if (45 < this.diffDip_fw && this.diffDip_fw <= 60) {
    this.fw_Bfactor_original = 2/75*this.diffDip_fw - 0.8;
    this.fw_Bfactor_original = Math.round(this.fw_Bfactor_original * 1e2) / 1e2;
    this.service.changeFw_Bfactor_original(this.fw_Bfactor_original);
  } else if (60 < this.diffDip_fw && this.diffDip_fw <= 90) {
    this.fw_Bfactor_original = 1/150*this.diffDip_fw + 0.4;
    this.fw_Bfactor_original = Math.round(this.fw_Bfactor_original * 1e2) / 1e2;
    this.service.changeFw_Bfactor_original(this.fw_Bfactor_original);
  }

 // B FACTOR Calculation - FOOTWALL Modified

  if (0 < this.diffDip_fw && this.diffDip_fw <= 10) {
    this.fw_Bfactor_modified = 0.3 - 0.01*this.diffDip_fw;
    this.fw_Bfactor_modified = Math.round(this.fw_Bfactor_modified * 1e2) / 1e2;
    this.service.changeFw_Bfactor_modified(this.fw_Bfactor_modified);
  } else if (10 < this.diffDip_fw && this.diffDip_fw <= 30) {
    this.fw_Bfactor_modified = 0.2;
    this.service.changeFw_Bfactor_modified(this.fw_Bfactor_modified);
  } else if (30 < this.diffDip_fw && this.diffDip_fw <= 60 ) {
    this.fw_Bfactor_modified = 0.02*this.diffDip_fw - 0.4;
    this.fw_Bfactor_modified = Math.round(this.fw_Bfactor_modified * 1e2) / 1e2;
    this.service.changeFw_Bfactor_modified(this.fw_Bfactor_modified);
  } else if (60 < this.diffDip_fw && this.diffDip_fw <= 90) {
    this.fw_Bfactor_modified = 1/150*this.diffDip_fw + 0.4;
    this.fw_Bfactor_modified = Math.round(this.fw_Bfactor_modified * 1e2) / 1e2;
    this.service.changeFw_Bfactor_modified(this.fw_Bfactor_modified);
  }

 // B FACTOR Calculation - SIDEWALL1 Original

  if (0 <= this.diffDip_sw1 && this.diffDip_sw1 <= 20) {
    this.side1_Bfactor_original = 0.5 - 0.01*this.diffDip_sw1;
    this.side1_Bfactor_original = Math.round(this.side1_Bfactor_original * 1e2) / 1e2;
    this.service.changeSide1_Bfactor_original(this.side1_Bfactor_original);
  } else if ( 20 < this.diffDip_sw1 && this.diffDip_sw1 <= 45) {
    this.side1_Bfactor_original = 0.004*this.diffDip_sw1 + 0.22;
    this.side1_Bfactor_original = Math.round(this.side1_Bfactor_original * 1e2) / 1e2;
    this.service.changeSide1_Bfactor_original(this.side1_Bfactor_original);
  } else if (45 < this.diffDip_sw1 && this.diffDip_sw1 <= 60) {
    this.side1_Bfactor_original = 2/75*this.diffDip_sw1 - 0.8;
    this.side1_Bfactor_original = Math.round(this.side1_Bfactor_original * 1e2) / 1e2;
    this.service.changeSide1_Bfactor_original(this.side1_Bfactor_original);
  } else if (60 < this.diffDip_sw1 && this.diffDip_sw1 <= 90) {
    this.side1_Bfactor_original = 1/150*this.diffDip_sw1 + 0.4;
    this.side1_Bfactor_original = Math.round(this.side1_Bfactor_original * 1e2) / 1e2;
    this.service.changeSide1_Bfactor_original(this.side1_Bfactor_original);
  }

// B FACTOR Calculation - SIDEWALL1 Modified

  if (0 < this.diffDip_sw1 && this.diffDip_sw1 <= 10) {
    this.side1_Bfactor_modified = 0.3 - 0.01*this.diffDip_sw1;
    this.side1_Bfactor_modified = Math.round(this.side1_Bfactor_modified * 1e2) / 1e2;
    this.service.changeSide1_Bfactor_modified(this.side1_Bfactor_modified);
  } else if (10 < this.diffDip_sw1 && this.diffDip_sw1 <= 30) {
    this.side1_Bfactor_modified = 0.2;
    this.service.changeSide1_Bfactor_modified(this.side1_Bfactor_modified);
  } else if (30 < this.diffDip_sw1 && this.diffDip_sw1 <= 60 ) {
    this.side1_Bfactor_modified = 0.02*this.diffDip_sw1 - 0.4;
    this.side1_Bfactor_modified = Math.round(this.side1_Bfactor_modified * 1e2) / 1e2;
    this.service.changeSide1_Bfactor_modified(this.side1_Bfactor_modified);
  } else if (60 < this.diffDip_sw1 && this.diffDip_sw1 <= 90) {
    this.side1_Bfactor_modified = 1/150*this.diffDip_sw1 + 0.4;
    this.side1_Bfactor_modified = Math.round(this.side1_Bfactor_modified * 1e2) / 1e2;
    this.service.changeSide1_Bfactor_modified(this.side1_Bfactor_modified);
  }

// B FACTOR Calculation - SIDEWALL2 Original 

  if (0 <= this.diffDip_sw2 && this.diffDip_sw2 <= 20) {
    this.side2_Bfactor_original = 0.5 - 0.01*this.diffDip_sw2;
    this.side2_Bfactor_original = Math.round(this.side2_Bfactor_original * 1e2) / 1e2;
    this.service.changeSide2_Bfactor_original(this.side2_Bfactor_original);
  } else if ( 20 < this.diffDip_sw2 && this.diffDip_sw2 <= 45) {
    this.side2_Bfactor_original = 0.004*this.diffDip_sw2 + 0.22;
    this.side2_Bfactor_original = Math.round(this.side2_Bfactor_original * 1e2) / 1e2;
    this.service.changeSide2_Bfactor_original(this.side2_Bfactor_original);
  } else if (45 < this.diffDip_sw2 && this.diffDip_sw2 <= 60) {
    this.side2_Bfactor_original = 2/75*this.diffDip_sw2 - 0.8;
    this.side2_Bfactor_original = Math.round(this.side2_Bfactor_original * 1e2) / 1e2;
    this.service.changeSide2_Bfactor_original(this.side2_Bfactor_original);
  } else if (60 < this.diffDip_sw2 && this.diffDip_sw2 <= 90) {
    this.side2_Bfactor_original = 1/150*this.diffDip_sw2 + 0.4;
    this.side2_Bfactor_original = Math.round(this.side2_Bfactor_original * 1e2) / 1e2;
    this.service.changeSide2_Bfactor_original(this.side2_Bfactor_original);
  }

// B FACTOR Calculation - SIDEWALL2 Modified

  if (0 < this.diffDip_sw2 && this.diffDip_sw2 <= 10) {
    this.side2_Bfactor_modified = 0.3 - 0.01*this.diffDip_sw2;
    this.side2_Bfactor_modified = Math.round(this.side2_Bfactor_modified * 1e2) / 1e2;
    this.service.changeSide2_Bfactor_modified(this.side2_Bfactor_modified);
  } else if (10 < this.diffDip_sw2 && this.diffDip_sw2 <= 30) {
    this.side2_Bfactor_modified = 0.2;
    this.service.changeSide2_Bfactor_modified(this.side2_Bfactor_modified);
  } else if (30 < this.diffDip_sw2 && this.diffDip_sw2 <= 60 ) {
    this.side2_Bfactor_modified = 0.02*this.diffDip_sw2 - 0.4;
    this.side2_Bfactor_modified = Math.round(this.side2_Bfactor_modified * 1e2) / 1e2;
    this.service.changeSide2_Bfactor_modified(this.side2_Bfactor_modified);
  } else if (60 < this.diffDip_sw2 && this.diffDip_sw2 <= 90) {
    this.side2_Bfactor_modified = 1/150*this.diffDip_sw2 + 0.4;
    this.side2_Bfactor_modified = Math.round(this.side2_Bfactor_modified * 1e2) / 1e2;
    this.service.changeSide2_Bfactor_modified(this.side2_Bfactor_modified);
  }
  
//C FACTOR Calculations 

  //CROWN - original
  this.crown_Cfactor_original = 8 - 7 * Math.cos(this.stopeDip_crown/180*Math.PI);
  this.crown_Cfactor_original = Math.round(this.crown_Cfactor_original * 1e2) / 1e2;
  this.service.changeCrown_Cfactor_original(this.crown_Cfactor_original);

  // CROWN - modified 
  this.crown_Cfactor_modified = 8 - 6 * Math.cos(this.stopeDip_crown/180*Math.PI);
  this.crown_Cfactor_modified = Math.round(this.crown_Cfactor_modified * 1e2) / 1e2;
  this.service.changeCrown_Cfactor_modified(this.crown_Cfactor_modified);

  //HANGINGWALL - original 
  this.hw_Cfactor_original = 8 - 7 * Math.cos(this.stopeDip_hw/180*Math.PI);
  this.hw_Cfactor_original = Math.round(this.hw_Cfactor_original * 1e2) / 1e2;
  this.service.changeHw_Cfactor_original(this.hw_Cfactor_original);

  // HANGINGWALL - modified 
  this.hw_Cfactor_modified = 8 - 6 * Math.cos(this.stopeDip_hw/180*Math.PI);
  this.hw_Cfactor_modified = Math.round(this.hw_Cfactor_modified * 1e2) / 1e2;
  this.service.changeHw_Cfactor_modified(this.hw_Cfactor_modified);

  //FOOTWALL - original 
  this.fw_Cfactor_original = 8 - 7 * Math.cos(this.stopeDip_fw/180*Math.PI);
  this.fw_Cfactor_original = Math.round(this.fw_Cfactor_original * 1e2) / 1e2;
  this.service.changeFw_Cfactor_original(this.fw_Cfactor_original);

  //FOOTWALL - modified 
  this.fw_Cfactor_modified = 8 - 6 * Math.cos(this.stopeDip_fw/180*Math.PI);
  this.fw_Cfactor_modified = Math.round(this.fw_Cfactor_modified * 1e2) / 1e2;
  this.service.changeFw_Cfactor_modified(this.fw_Cfactor_modified);

  //SIDEWALL 1 - original 
  this.side1_Cfactor_original = 8 - 7 * Math.cos(this.stopeDip_sw1/180*Math.PI);
  this.side1_Cfactor_original = Math.round(this.side1_Cfactor_original * 1e2) / 1e2;
  this.service.changeSide1_Cfactor_original(this.side1_Cfactor_original);

  //SIDEWALL 1 - modified 
  this.side1_Cfactor_modified = 8 - 6 * Math.cos(this.stopeDip_sw1/180*Math.PI);
  this.side1_Cfactor_modified = Math.round(this.side1_Cfactor_modified * 1e2) / 1e2;
  this.service.changeSide1_Cfactor_modified(this.side1_Cfactor_modified);

  //SIDEWALL 2 - original 
  this.side2_Cfactor_original = 8 - 7 * Math.cos(this.stopeDip_sw2/180*Math.PI);
  this.side2_Cfactor_original = Math.round(this.side2_Cfactor_original * 1e2) / 1e2;
  this.service.changeSide2_Cfactor_original(this.side2_Cfactor_original);

  //SIDEWALL 2 - modified 
  this.side2_Cfactor_modified = 8 - 6 * Math.cos(this.stopeDip_sw2/180*Math.PI);
  this.side2_Cfactor_modified = Math.round(this.side2_Cfactor_modified * 1e2) / 1e2;
  this.service.changeSide2_Cfactor_modified(this.side2_Cfactor_modified);

  //Time factor calculation -- CROWN
  if (this.time=='3month' && this.qRes_crown>10 && this.ssurface=='Crown' ) {
    this.timeFactor_crown = 1.0;
    this.service.changeTimeFactor_crown(this.timeFactor_crown);
  } else  if ((this.time=='3month' && this.qRes_crown < 10 && this.ssurface=='Crown') || (this.time=='35month' && this.qRes_crown > 10 && this.ssurface=='Crown')) {
    this.timeFactor_crown = 0.8;
    this.service.changeTimeFactor_crown(this.timeFactor_crown);
  } else if ((this.time=='35month' && this.qRes_crown < 10 && this.ssurface=='Crown') || (this.time=='512month' && this.qRes_crown > 10 && this.ssurface=='Crown')) {
    this.timeFactor_crown = 0.5;
    this.service.changeTimeFactor_crown(this.timeFactor_crown);
  } else if ((this.time=='512month' && this.qRes_crown < 10 && this.ssurface=='Crown') || (this.time=='12month' && this.qRes_crown > 10 && this.ssurface=='Crown')) {
    this.timeFactor_crown = 0.3;
    this.service.changeTimeFactor_crown(this.timeFactor_crown);
  } else if (this.time=='12month' && this.qRes_crown < 10 && this.ssurface=='Crown') {
    this.timeFactor_crown = 0.2;
    this.service.changeTimeFactor_crown(this.timeFactor_crown);
  } else if (this.time == '' && this.ssurface=='Crown') {
    this.timeFactor_crown = 1.0;
    this.service.changeTimeFactor_crown(this.timeFactor_crown);
  } else {
    "Check Q' value";
  }

  //Time factor calculation -- HANGINGWALL
  if (this.time=='3month' && this.qRes_hw>10 && this.ssurface=='HW') {
    this.timeFactor_hw = 1.0;
    this.service.changeTimeFactor_hw(this.timeFactor_hw);
  } else  if ((this.time=='3month' && this.qRes_hw < 10 && this.ssurface=='HW') || (this.time=='35month' && this.qRes_hw > 10 && this.ssurface=='HW')) {
    this.timeFactor_hw = 0.8;
    this.service.changeTimeFactor_hw(this.timeFactor_hw);
  } else if ((this.time=='35month' && this.qRes_hw < 10 && this.ssurface=='HW') || (this.time=='512month' && this.qRes_hw > 10 && this.ssurface=='HW')) {
    this.timeFactor_hw = 0.5;
    this.service.changeTimeFactor_hw(this.timeFactor_hw);
  } else if ((this.time=='512month' && this.qRes_hw < 10 && this.ssurface=='HW') || (this.time=='12month' && this.qRes_hw > 10 && this.ssurface=='HW')) {
    this.timeFactor_hw = 0.3;
    this.service.changeTimeFactor_hw(this.timeFactor_hw);
  } else if (this.time=='12month' && this.qRes_hw < 10 && this.ssurface=='HW') {
    this.timeFactor_hw = 0.2;
    this.service.changeTimeFactor_hw(this.timeFactor_hw);
  } else if (this.time == '' && this.ssurface=='HW') {
    this.timeFactor_hw = 1.0;
    this.service.changeTimeFactor_hw(this.timeFactor_hw);
  } else {
    "Check Q' value";
  }

  //Time factor calculation -- FOOTWALL
  if (this.time=='3month' && this.qRes_fw>10 && this.ssurface=='FW') {
    this.timeFactor_fw = 1.0;
    this.service.changeTimeFactor_fw(this.timeFactor_fw);
  } else  if ((this.time=='3month' && this.qRes_fw < 10 && this.ssurface=='FW') || (this.time=='35month' && this.qRes_fw > 10 && this.ssurface=='FW')) {
    this.timeFactor_fw = 0.8;
    this.service.changeTimeFactor_fw(this.timeFactor_fw);
  } else if ((this.time=='35month' && this.qRes_fw < 10 && this.ssurface=='FW') || (this.time=='512month' && this.qRes_fw > 10 && this.ssurface=='FW')) {
    this.timeFactor_fw = 0.5;
    this.service.changeTimeFactor_fw(this.timeFactor_fw);
  } else if ((this.time=='512month' && this.qRes_fw < 10 && this.ssurface=='FW') || (this.time=='12month' && this.qRes_fw > 10 && this.ssurface=='FW')) {
    this.timeFactor_fw = 0.3;
    this.service.changeTimeFactor_fw(this.timeFactor_fw);
  } else if (this.time=='12month' && this.qRes_fw < 10 && this.ssurface=='FW') {
    this.timeFactor_fw = 0.2;
    this.service.changeTimeFactor_fw(this.timeFactor_fw);
  } else if (this.time == '' && this.ssurface=='FW') {
    this.timeFactor_fw = 1.0;
    this.service.changeTimeFactor_fw(this.timeFactor_fw);
  } else {
    "Check Q' value";
  }
      
  //Time factor calculation -- SIDEWALL 1
  if (this.time=='3month' && this.qRes_sw1>10 && this.ssurface=='SW1') {
    this.timeFactor_sw1 = 1.0;
    this.service.changeTimeFactor_sw1(this.timeFactor_sw1);
  } else  if ((this.time=='3month' && this.qRes_sw1 < 10 && this.ssurface=='SW1') || (this.time=='35month' && this.qRes_sw1 > 10 && this.ssurface=='SW1')) {
    this.timeFactor_sw1 = 0.8;
    this.service.changeTimeFactor_sw1(this.timeFactor_sw1);
  } else if ((this.time=='35month' && this.qRes_sw1 < 10 && this.ssurface=='SW1') || (this.time=='512month' && this.qRes_sw1 > 10 && this.ssurface=='SW1')) {
    this.timeFactor_sw1 = 0.5;
    this.service.changeTimeFactor_sw1(this.timeFactor_sw1);
  } else if ((this.time=='512month' && this.qRes_sw1 < 10 && this.ssurface=='SW1') || (this.time=='12month' && this.qRes_sw1 > 10 && this.ssurface=='SW1')) {
    this.timeFactor_sw1 = 0.3;
    this.service.changeTimeFactor_sw1(this.timeFactor_sw1);
  } else if (this.time=='12month' && this.qRes_sw1 < 10 && this.ssurface=='SW1') {
    this.timeFactor_sw1 = 0.2;
    this.service.changeTimeFactor_sw1(this.timeFactor_sw1);
  } else if (this.time == '' && this.ssurface=='SW1') {
    this.timeFactor_sw1 = 1.0;
    this.service.changeTimeFactor_sw1(this.timeFactor_sw1);
  } else {
    "Check Q' value";
  }    
  //Time factor calculation -- SIDEWALL 2
  if (this.time=='3month' && this.qRes_sw2>10 && this.ssurface=='SW2') {
    this.timeFactor_sw2 = 1.0;
    this.service.changeTimeFactor_sw2(this.timeFactor_sw2);
  } else  if ((this.time=='3month' && this.qRes_sw2 < 10 && this.ssurface=='SW2') || (this.time=='35month' && this.qRes_sw2 > 10 && this.ssurface=='SW2')) {
    this.timeFactor_sw2 = 0.8;
    this.service.changeTimeFactor_sw2(this.timeFactor_sw2);
  } else if ((this.time=='35month' && this.qRes_sw2 < 10 && this.ssurface=='SW2') || (this.time=='512month' && this.qRes_sw2 > 10 && this.ssurface=='SW2')) {
    this.timeFactor_sw2 = 0.5;
    this.service.changeTimeFactor_sw2(this.timeFactor_sw2);
  } else if ((this.time=='512month' && this.qRes_sw2 < 10 && this.ssurface=='SW2') || (this.time=='12month' && this.qRes_sw2 > 10 && this.ssurface=='SW2')) {
    this.timeFactor_sw2 = 0.3;
    this.service.changeTimeFactor_sw2(this.timeFactor_sw2);
  } else if (this.time=='12month' && this.qRes_sw2 < 10 && this.ssurface=='SW2') {
    this.timeFactor_sw2 = 0.2;
    this.service.changeTimeFactor_sw2(this.timeFactor_sw2);
  } else if (this.time == '' && this.ssurface=='SW2') {
    this.timeFactor_sw2 = 1.0;
    this.service.changeTimeFactor_sw2(this.timeFactor_sw2);
  } else {
    "Check Q' value";
  }

  // if fault factor estimation skipped 
  if (this.ssurface =='HW' && this.faultFactor_hw == 0) {
    this.faultFactor_hw = 1.0;
    this.service.changeFaultFactor_hw(this.faultFactor_hw);
  } else if (this.ssurface =='FW' && this.faultFactor_fw == 0) {
    this.faultFactor_fw = 1.0;
    this.service.changeFaultFactor_fw(this.faultFactor_fw);
  } else if (this.ssurface =='SW1' && this.faultFactor_sw1 == 0) {
    this.faultFactor_sw1 = 1.0;
    this.service.changeFaultFactor_sw1(this.faultFactor_sw1);
  } else if (this.ssurface =='SW2' && this.faultFactor_sw2 == 0) {
    this,this.faultFactor_sw2 = 1.0;
    this.service.changeFaultFactor_sw2(this.faultFactor_sw2);
  }
  //Stability Number calculation 
  this.crownN = this.qRes_crown * this.crown_Afactor_original * this.crown_Bfactor_original * this.crown_Cfactor_original * this.timeFactor_crown;
  this.crownN = Math.round(this.crownN * 1e2) / 1e2;
  this.service.changeCrownN(this.crownN);

  this.crownN_mod = this.qRes_crown * this.crown_Afactor_modified * this.crown_Bfactor_modified * this.crown_Cfactor_modified * this.timeFactor_crown;
  this.crownN_mod = Math.round(this.crownN_mod * 1e2) / 1e2;
  this.service.changeCrownN_mod(this.crownN_mod);

  this.hwN = this.qRes_hw * this.hw_Afactor_original * this.hw_Bfactor_original * this.hw_Cfactor_original * this.timeFactor_hw * this.faultFactor_hw;
  this.hwN = Math.round(this.hwN * 1e2) / 1e2;
  this.service.changeHwN(this.hwN);

  this.hwN_mod = this.qRes_hw * this.hw_Afactor_modified * this.hw_Bfactor_modified * this.hw_Cfactor_modified * this.timeFactor_hw * this.faultFactor_hw;
  this.hwN_mod = Math.round(this.hwN_mod * 1e2) / 1e2;
  this.service.changeHwN_mod(this.hwN_mod);
  
  this.fwN = this.qRes_fw * this.fw_Afactor_original * this.fw_Bfactor_original * this.fw_Cfactor_original * this.timeFactor_fw * this.faultFactor_fw;
  this.fwN = Math.round(this.fwN * 1e2) / 1e2;
  this.service.changeFwN(this.fwN);
  
  this.fwN_mod = this.qRes_fw * this.fw_Afactor_modified * this.fw_Bfactor_modified * this.fw_Cfactor_modified * this.timeFactor_fw * this.faultFactor_fw;
  this.fwN_mod = Math.round(this.fwN_mod * 1e2) / 1e2;
  this.service.changeFwN_mod(this.fwN_mod);

  this.side1N = this.qRes_sw1 * this.side1_Afactor_original * this.side1_Bfactor_original * this.side1_Cfactor_original * this.timeFactor_sw1 * this.faultFactor_sw1;
  this.side1N = Math.round(this.side1N * 1e2) / 1e2;
  this.service.changeSide1N(this.side1N);

  this.side1N_mod = this.qRes_sw1 * this.side1_Afactor_modified * this.side1_Bfactor_modified * this.side1_Cfactor_modified * this.timeFactor_sw1 * this.faultFactor_sw1;
  this.side1N_mod = Math.round(this.side1N_mod * 1e2) / 1e2;
  this.service.changeSide1N_mod(this.side1N_mod);

  this.side2N = this.qRes_sw2 * this.side2_Afactor_original * this.side2_Bfactor_original * this.side2_Cfactor_original * this.timeFactor_sw2 * this.faultFactor_sw2;
  this.side2N = Math.round(this.side2N * 1e2) / 1e2;
  this.service.changeSide2N(this.side2N);

  this.side2N_mod = this.qRes_sw2 * this.side2_Afactor_modified * this.side2_Bfactor_modified * this.side2_Cfactor_modified * this.timeFactor_sw2 * this.faultFactor_sw2;
  this.side2N_mod = Math.round(this.side2N_mod * 1e2) / 1e2;
  this.service.changeSide2N_mod(this.side2N_mod);
}


  ngOnInit(): void {
    // console.log("Fault Factor...");
    console.log("->",(<HTMLInputElement>document.getElementById("ssurface")))
        // console.log("->>>>",service.get())
    this.service.currentCrownIndStress.subscribe(crownIndStress => this.crownIndStress = crownIndStress);
    this.service.currentSideIndStress.subscribe(sideIndStress => this.sideIndStress = sideIndStress);
    this.service.currentFwIndStress.subscribe(fwIndStress => this.fwIndStress = fwIndStress);
    this.service.currentHwIndStress.subscribe(hwIndStress => this.hwIndStress = hwIndStress);

    this.service.currentQRes_crown.subscribe(qRes_crown => this.qRes_crown = qRes_crown);
    this.service.currentQRes_hw.subscribe(qRes_hw => this.qRes_hw = qRes_hw);
    this.service.currentQRes_fw.subscribe(qRes_fw => this.qRes_fw = qRes_fw);
    this.service.currentQRes_sw1.subscribe(qRes_sw1 => this.qRes_sw1 = qRes_sw1);
    this.service.currentQRes_sw2.subscribe(qRes_sw2 => this.qRes_sw2 = qRes_sw2);

    this.service.currentFaultFactor_hw.subscribe(faultFactor_hw => this.faultFactor_hw = faultFactor_hw);
    this.service.currentFaultFactor_fw.subscribe(faultFactor_fw => this.faultFactor_fw = faultFactor_fw);
    this.service.currentFaultFactor_sw1.subscribe(faultFactor_sw1 => this.faultFactor_sw1 = faultFactor_sw1);
    this.service.currentFaultFactor_sw2.subscribe(faultFactor_sw2 => this.faultFactor_sw2 = faultFactor_sw2);

    this.service.currentStopeHeight.subscribe(stopeHeight => this.stopeHeight = stopeHeight);
    this.service.currentFhWidth.subscribe(fhWidth => this.fhWidth = fhWidth);
    this.service.currentSideWidth.subscribe(sideWidth => this.sideWidth = sideWidth);

    this.service.currentSideTopWidth.subscribe(sideTopWidth => this.sideTopWidth = sideTopWidth);
    this.service.currentSideBottomWidth.subscribe(sideBottomWidth => this.sideBottomWidth = sideBottomWidth);
    this.service.currentSideLength.subscribe(sideLength => this.sideLength = sideLength);
    this.service.currentStopeHeight2.subscribe(stopeHeight2 => this.stopeHeight2 = stopeHeight2);
    this.service.currentFhWidth2.subscribe(fhWidth2 => this.fhWidth2 = fhWidth2);
  }
}
