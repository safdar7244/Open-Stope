import { Component, OnInit } from '@angular/core';
import { ForAllService } from '../services/for-all.service';
import { abcfactor} from '../services/abcfactor.service';

import { qvaluefactor} from '../services/qvalue-factor.service';

@Component({
  selector: 'app-fault-factor',
  templateUrl: './fault-factor.component.html',
  styleUrls: ['./fault-factor.component.scss']
})
export class FaultFactorComponent implements OnInit {
  public stopeHeight: number;
  public fhWidth: number;
  public stopeHeight2: number;
  public sideLength: number;

  public stopeClass: string;
  public aspectRatio: number;
  public stopeDip: number;

  public friction: string = '';
  public intersect: string = '';
  public inclAngle: number;
  public faultDist: number;
  public normDist: number;

  public ssurface: string;
  public fault_surface: string;

  public faultFactor: number;
  public faultFactor_crown: number;
  public faultFactor_hw: number;
  public faultFactor_fw: number;
  public faultFactor_sw1: number;
  public faultFactor_sw2: number;
  
  constructor(private service: ForAllService,private newservice:abcfactor,private qservice:qvaluefactor) { }

  onClick(event:any){
  }
  selectChangeHandler1 (event: any) {
    this.intersect = event.target.value;
    console.log("event Changed....",event.target.options.selectedIndex)
    
if(event.target.options.selectedIndex==1 || event.target.options.selectedIndex==2 || event.target.options.selectedIndex==3 ){
  console.log("disable last field");
  console.log("->",(<HTMLInputElement>document.getElementById("faultDist")));
  (<HTMLInputElement>document.getElementById("faultDist")).disabled=true;
  (<HTMLInputElement>document.getElementById("inclAngle")).disabled=false;

}
else if(event.target.options.selectedIndex==4){
  
  console.log("disable angle  field");
  (<HTMLInputElement>document.getElementById("inclAngle")).disabled=true;
  (<HTMLInputElement>document.getElementById("faultDist")).disabled=false;



}

  }
  selectChangeHandler2 (event: any) {
    this.friction = event.target.value;}

  calcFault (inclAngle: number, faultDist:number, intersect:string, friction: string) {

  if (this.ssurface=='HW' || this.ssurface=='FW' || this.ssurface=='SW1' || this.ssurface=='SW2'&& (this.stopeHeight2==0 && this.sideLength==0)){
    this.normDist=faultDist/this.stopeHeight;
  } else if (this.ssurface=='FW' || this.ssurface=='SW1' || this.ssurface=='SW2' && this.stopeHeight==0){
    this.normDist=faultDist/this.stopeHeight2;
  } else if (this.ssurface=='HW' && this.stopeHeight==0){
    this.normDist=faultDist/this.sideLength;
  } 

    //  General fault factor calculation 
    if(this.stopeClass=="tall" && intersect=="bottom" && friction=="1520") {
      if (inclAngle > 0  && inclAngle <=52) {
        this.faultFactor=-8e-11*Math.pow(inclAngle,6) + 1e-8*Math.pow(inclAngle,5) - 1E-6*Math.pow(inclAngle,4) + 6E-5*Math.pow(inclAngle,3) - 0.0009*Math.pow(inclAngle,2) - 0.0066*inclAngle + 0.2387;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      } else if (inclAngle >52 && inclAngle <=56) {
        this.faultFactor = 0.9;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      } else {
        this.faultFactor = 1.0;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      }
    } else if (this.stopeClass=="regular" && intersect=="top" && friction=="1520") {
      if (inclAngle>0 && inclAngle<=5) {
        this.faultFactor=0.447;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      } else if (inclAngle >5 && inclAngle <=30) {
        this.faultFactor=0.0011*Math.pow(inclAngle,2) - 0.0162*inclAngle+0.5015;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      } else {
        this.faultFactor=1.0;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      }
    } else if (this.stopeClass=="regular" && intersect=="bottom" && friction=="1520" && this.stopeDip>=60) {
      if (inclAngle > 0 && inclAngle <= 78) {
        this.faultFactor=0.0003*Math.pow(inclAngle,2)-0.0136*inclAngle+0.2129;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      } else {
        this.faultFactor=1.0;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      }
    } else if (this.stopeClass=="regular" && intersect=="bottom" && friction=="2030") {
      if (inclAngle >0 && inclAngle <=77) {
        this.faultFactor=-9e-8*Math.pow(inclAngle,4)+1e-5*Math.pow(inclAngle,3)+9e-5*Math.pow(inclAngle,2)-0.0205*inclAngle+0.4602;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      } else {
        this.faultFactor=1.0;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      }
    } else if ((this.stopeClass=="regular" && intersect=="middle" && friction=="1520") ||(this.stopeClass=="short wide" && intersect=="bottom" && friction=="1520")) {
      if (inclAngle >0 && inclAngle <=20) {
        this.faultFactor=-2e-5*Math.pow(inclAngle,3)+0.0026*Math.pow(inclAngle,2)-0.064*inclAngle+0.6344;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      } else if (inclAngle >20 && inclAngle <=49) {
        this.faultFactor=0.0007*Math.pow(inclAngle,2)-0.0217*inclAngle+0.3883;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      } else {
        this.faultFactor=1.0;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      }
    } else if ((this.stopeClass=="regular" && intersect=="bottom") || (friction=="8") || (friction=="1520" && this.stopeDip<60)) {
      if (inclAngle >0 && inclAngle <= 42.5) {
        this.faultFactor=9e-6*Math.pow(inclAngle,3)-0.0004*Math.pow(inclAngle,2) - 0.0003*inclAngle+0.1404;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      } else if (inclAngle >42.5 && inclAngle <=63) {
        this.faultFactor=0.0006*Math.pow(inclAngle,2) - 0.0204*inclAngle - 0.0946;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      } else {
        this.faultFactor=1.0;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      }
    } else {
      this.faultFactor=1.0;
      this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
    }

    if (this.stopeClass=="regular" && intersect=="nonintersection" && friction=="1520") {
      if (this.normDist > 0 && this.normDist <=0.32) {
        this.faultFactor=33152*Math.pow(this.normDist,6)-39737*Math.pow(this.normDist,5)+19246*Math.pow(this.normDist,4)-4702.4*Math.pow(this.normDist,3)+616.79*Math.pow(this.normDist,2)-42.239*this.normDist+1.3078;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      } else {
        this.faultFactor = 1.0;
        this.newservice.setF(this.faultFactor,this.qservice.getlatestStope())
      }}
    
    // Specific fault factor calculation
    if (this.ssurface=='HW'){
      this.faultFactor_hw= this.faultFactor;
      this.faultFactor_hw = Math.round(this.faultFactor_hw * 1e2) / 1e2;
      
      this.newservice.setF(this.faultFactor_hw,this.qservice.getlatestStope())
      this.service.changeFaultFactor_hw(this.faultFactor_hw);
    } else if (this.ssurface =='FW'){
      this.faultFactor_fw= this.faultFactor;
      this.faultFactor_fw = Math.round(this.faultFactor_fw * 1e2) / 1e2;
      
      this.newservice.setF(this.faultFactor_fw,this.qservice.getlatestStope())
      this.service.changeFaultFactor_fw(this.faultFactor_fw);
    } else if (this.ssurface=='SW1'){
      this.faultFactor_sw1= this.faultFactor;
      this.faultFactor_sw1 = Math.round(this.faultFactor_sw1 * 1e2) / 1e2;
      
      this.newservice.setF(this.faultFactor_sw1,this.qservice.getlatestStope())
      this.service.changeFaultFactor_sw1(this.faultFactor_sw1);
    } else if (this.ssurface=='SW2'){
      this.faultFactor_sw2= this.faultFactor;
      this.faultFactor_sw2 = Math.round(this.faultFactor_sw2 * 1e2) / 1e2;
      
      this.newservice.setF(this.faultFactor_sw2,this.qservice.getlatestStope())
      this.service.changeFaultFactor_sw2(this.faultFactor_sw2);
    } 
  }

  ngOnInit(): void {
    this.service.currentStopeHeight.subscribe(stopeHeight => this.stopeHeight = stopeHeight);
    this.service.currentStopeHeight2.subscribe(stopeHeight2 => this.stopeHeight2 = stopeHeight2);
    this.service.currentSideLength.subscribe(sideLength => this.sideLength = sideLength);
    this.service.currentFhWidth.subscribe(fhWidth => this.fhWidth = fhWidth);

    this.service.currentStopeClass.subscribe(stopeClass => this.stopeClass = stopeClass);
    this.service.currentAspectRatio.subscribe(aspectRatio => this.aspectRatio = aspectRatio);
    this.service.currentStopeDip.subscribe(stopeDip => this.stopeDip = stopeDip);
    this.service.currentSsurface.subscribe(ssurface => this.ssurface = ssurface);
    this.service.currentFault_surface.subscribe(fault_surface => this.fault_surface = fault_surface);
  }
}
