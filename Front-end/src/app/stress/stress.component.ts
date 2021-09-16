import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForAllService } from '../services/for-all.service';
import { FormControl, FormGroup, FormBuilder, FormsModule } from '@angular/forms';
import { allResetValues } from '../services/All-Reset-Form.service';


@Component({
  selector: 'app-stress',
  templateUrl: './stress.component.html',
  styleUrls: ['./stress.component.scss']
})
export class StressComponent implements OnInit {

  public depth: number;
  public modulus: number;

  public Verticalstress: number;
  public Horizontalstress: number;
  public vertStr: number;
  public horStr: number;

  public stopeHeight: number;
  public sideWidth: number;
  public fhWidth: number;
  public stopeHeight2: number;
  public sideTopWidth: number;
  public sideBottomWidth: number;
  public sideLength: number;
  public fhWidth2: number;

  public Kratio: number;
  public HSratio: number; 
  public HSratio2: number; 
  public HSratio3: number; 
  public HSratio4: number; 

  public crownIndStress: number;
  public sideIndStress: number;
  public fw1IndStress: number;
  public fw2IndStress: number;
  public fwIndStress: number;
  public hw1IndStress: number;
  public hw2IndStress: number;
  public hwIndStress: number;

  public selectedIndex: number;
  public enableDepth: boolean;
  public enableModulus: boolean;
  public enableVertStress: boolean;
  public enableHorStress: boolean;
  
  constructor(private router: Router, private route: ActivatedRoute, private service: ForAllService,private resetService:allResetValues) {
    }
    Aval="";
    Bval="";
    Cval="";
    Dval="";
    option1(){
      this.enableHorStress=false;
      this.enableVertStress=false;
      this.enableDepth=true;
      this.enableModulus=true;
    }
    option2(){
      this.enableHorStress=true;
      this.enableVertStress=true;
      this.enableDepth=false;
      this.enableModulus=false;
   
  }

  enableDisableRule(selectedIndex:number){
    if(this.selectedIndex = 1){
       this.selectedIndex = selectedIndex;
    } else{
       this.selectedIndex = 2;
    }
 }
 
  calcStress(depth:number, modulus:number, vertStr: number, horStr:number) {
      this.router.navigate(['stress-res'], {relativeTo: this.route});
console.log("-->",vertStr,"-->",horStr,"-->",depth,"-->",modulus)
if(depth){
  this.resetService.setstress(vertStr,horStr,depth,modulus,2);

}
else
{
  this.resetService.setstress(vertStr,horStr,depth,modulus,1);

}
    if (this.vertStr=vertStr) {
      this.Verticalstress = vertStr;
      this.Verticalstress = Math.round(this.Verticalstress * 1e2) / 1e2;
      this.service.changeVerticalstress(this.Verticalstress);
    } else {this.Verticalstress = 0.027 * depth;
      this.Verticalstress = Math.round(this.Verticalstress * 1e2) / 1e2;
      this.service.changeVerticalstress(this.Verticalstress);
    } if (this.horStr=horStr) {
      this.Horizontalstress =horStr;
      this.Horizontalstress = Math.round(this.Horizontalstress * 1e3) / 1e3;
      this.service.changeHorizontalstress(this.Horizontalstress);
    } else if (0 < modulus && modulus <= 10) {
      this.Horizontalstress = this.Verticalstress * Math.pow((2.6/(depth-88.4)), (1/6.2889));
      this.Horizontalstress = Math.round(this.Horizontalstress * 1e3) / 1e3;
      this.service.changeHorizontalstress(this.Horizontalstress);
    } else if (10 < modulus && modulus <= 25) {
      this.Horizontalstress = this.Verticalstress * Math.pow((57.57656/(depth-157.456)), (1/5.18684));
      this.Horizontalstress = Math.round(this.Horizontalstress * 1e3) / 1e3;
      this.service.changeHorizontalstress(this.Horizontalstress);
    } else if (25 < modulus && modulus <= 50) {
      this.Horizontalstress = this.Verticalstress * Math.pow((660.07/(depth-203.52)), (1/4.22));
      this.Horizontalstress = Math.round(this.Horizontalstress * 1e2) / 1e2;
      this.service.changeHorizontalstress(this.Horizontalstress);
    } else if (50 < modulus && modulus <= 75) {
      this.Horizontalstress = this.Verticalstress * Math.pow((2122.08/(depth-232.81)), (1/3.91));
      this.Horizontalstress = Math.round(this.Horizontalstress * 1e2) / 1e2;
      this.service.changeHorizontalstress(this.Horizontalstress);
    } else if (75 < modulus && modulus <= 100) {
      this.Horizontalstress = this.Verticalstress * Math.pow((5067.4775/(depth-290.74867)), (1/4));
      this.Horizontalstress = Math.round(this.Horizontalstress * 1e2) / 1e2;
      this.service.changeHorizontalstress(this.Horizontalstress);
    } else {
      "Check Elastic Modulus!";
    }

    this.Kratio = this.Horizontalstress / this.Verticalstress;

    if (this.stopeHeight2==0 && this.sideTopWidth==0) {
      this.HSratio = this.stopeHeight / this.sideWidth;
    } else {
      this.HSratio = this.stopeHeight2 / this.sideTopWidth;
    }
    

  // CROWN - estimation of induced stress
  if (this.Kratio <= 2 && this.Kratio > 1.5) {
    this.crownIndStress = (1.5978 + 1.0266 * this.HSratio - 0.0506* Math.pow(this.HSratio, 2))*this.Verticalstress;
    this.crownIndStress = Math.round(this.crownIndStress * 1e2) / 1e2;
    this.service.changeCrownIndStress(this.crownIndStress);
  } else if (this.Kratio <= 1.5 && this.Kratio > 1) {
    this.crownIndStress = (1.1827 + 0.6904 * this.HSratio - 0.0301* Math.pow(this.HSratio, 2))*this.Verticalstress;
    this.crownIndStress = Math.round(this.crownIndStress * 1e2) / 1e2;
    this.service.changeCrownIndStress(this.crownIndStress);
  } else if (this.Kratio <= 1 && this.Kratio > 0.5) {
    this.crownIndStress = (0.465 + 0.4687 * this.HSratio - 0.0219* Math.pow(this.HSratio, 2))*this.Verticalstress;
    this.crownIndStress = Math.round(this.crownIndStress * 1e2) / 1e2;
    this.service.changeCrownIndStress(this.crownIndStress);
  } else if (this.Kratio <= 0.5 && this.Kratio > 0) {
    this.crownIndStress = (0.509* this.HSratio - 0.3822 - 0.0761* Math.pow(this.HSratio, 2) + 0.0042* Math.pow(this.HSratio, 3))*this.Verticalstress;
    this.crownIndStress = Math.round(this.crownIndStress * 1e2) / 1e2;
    this.service.changeCrownIndStress(this.crownIndStress);
  } else {
        "Check Elastic Modulus!"
  }

  // SIDEWALL - estimation of induced stress
  if (this.fhWidth2==0 && this.sideTopWidth==0 && this.sideBottomWidth==0) {
    this.HSratio2 = this.fhWidth / this.sideWidth;
  } else {
    this.HSratio2 = 2*this.fhWidth2 / (this.sideTopWidth+this.sideBottomWidth);
  }

  this.sideIndStress = (0.465 + 0.4687 * this.HSratio2 - 0.0219*Math.pow(this.HSratio2,2))*this.Horizontalstress;
  this.sideIndStress = Math.round(this.sideIndStress * 1e2) / 1e2;
  this.service.changeSideIndStress(this.sideIndStress);

  // Hangingwall - estimation of induced stress - 1
  if (this.sideLength==0 && this.sideTopWidth==0 && this.sideBottomWidth==0) {
    this.HSratio3 = this.stopeHeight / this.sideWidth;
  } else {
    this.HSratio3 = 2*this.sideLength / (this.sideTopWidth+this.sideBottomWidth);
  }

  if (this.Kratio <= 2 && this.Kratio > 1.5) {
    this.hw1IndStress = (0.4634 - 0.6002 * this.HSratio3 - 0.0061*Math.pow(this.HSratio3, 3) + 0.1046*Math.pow(this.HSratio3, 2))*this.Verticalstress;
  } else if (this.Kratio <= 1.5 && this.Kratio > 1) {
    this.hw1IndStress = (0.9854- 0.634 * this.HSratio3 - 0.0057*Math.pow(this.HSratio3, 3) + 0.1026*Math.pow(this.HSratio3, 2))*this.Verticalstress;
  } else if (this.Kratio <= 1 && this.Kratio > 0.5) {
    this.hw1IndStress = (1.689 - 1.0667 * this.HSratio3 - 0.0371*Math.pow(this.HSratio3, 3) + 0.2998*Math.pow(this.HSratio3, 2) + 0.0017*Math.pow(this.HSratio3, 4))*this.Verticalstress;
  } else if (this.Kratio <= 0.5 && this.Kratio > 0) {
    this.hw1IndStress = (1.8302 - 0.6558* this.HSratio3 - 0.007*Math.pow(this.HSratio3, 3)+0.1199*Math.pow(this.HSratio3, 2))*this.Verticalstress;
  } else {
    "Check Elastic Modulus!"
  }
       
  // Hangingwall - estimation of induced stress - 2
  this.hw2IndStress = (1.689 - 1.0667 * this.HSratio2 - 0.0371*Math.pow(this.HSratio2, 3) +0.2998*Math.pow(this.HSratio2, 2))*this.Horizontalstress;
  if (this.hw1IndStress > this.hw2IndStress) {
    this.hwIndStress = this.hw1IndStress;
    this.hwIndStress = Math.round(this.hwIndStress * 1e2) / 1e2;
    this.service.changeHwIndStress(this.hwIndStress);
  } else {
    this.hwIndStress = this.hw2IndStress;
    this.hwIndStress = Math.round(this.hwIndStress * 1e2) / 1e2;
    this.service.changeHwIndStress(this.hwIndStress);
  }

  // Footwall - estimation of induced stress - 1
  if (this.stopeHeight2==0 && this.sideTopWidth==0 && this.sideBottomWidth==0) {
    this.HSratio4 = this.stopeHeight / this.sideWidth;
  } else {
    this.HSratio4 = 2*this.stopeHeight2 / (this.sideTopWidth+this.sideBottomWidth);
  } 
  
  if (this.Kratio <= 2 && this.Kratio > 1.5) {
    this.hw1IndStress = (0.4634 - 0.6002 * this.HSratio4 - 0.0061*Math.pow(this.HSratio4, 3) + 0.1046*Math.pow(this.HSratio4, 2))*this.Verticalstress;
  } else if (this.Kratio <= 1.5 && this.Kratio > 1) {
    this.fw1IndStress = (0.9854- 0.634 * this.HSratio4 - 0.0057*Math.pow(this.HSratio4, 3) + 0.1026*Math.pow(this.HSratio4, 2))*this.Verticalstress;
  } else if (this.Kratio <= 1 && this.Kratio > 0.5) {
    this.fw1IndStress = (1.689 - 1.0667 * this.HSratio4 - 0.0371*Math.pow(this.HSratio4, 3) + 0.2998*Math.pow(this.HSratio4, 2) + 0.0017*Math.pow(this.HSratio4, 4))*this.Verticalstress;
  } else if (this.Kratio <= 0.5 && this.Kratio > 0) {
    this.fw1IndStress = (1.8302 - 0.6558* this.HSratio4 - 0.007*Math.pow(this.HSratio4, 3)+0.1199*Math.pow(this.HSratio4, 2))*this.Verticalstress;
  } else {
    "Check Elastic Modulus!"
  }

  // Footwall - estimation of induced stress - 2
   
  this.fw2IndStress = (1.689 - 1.0667 * this.HSratio2 - 0.0371*Math.pow(this.HSratio2, 3) +0.2998*Math.pow(this.HSratio2, 2))*this.Horizontalstress;
  if (this.fw1IndStress > this.fw2IndStress) {
    this.fwIndStress = this.fw1IndStress;
    this.fwIndStress = Math.round(this.fwIndStress * 1e2) / 1e2;
    this.service.changeFwIndStress(this.fwIndStress);
  } else {
    this.fwIndStress = this.fw2IndStress;
    this.fwIndStress = Math.round(this.fwIndStress * 1e2) / 1e2;
    this.service.changeFwIndStress(this.fwIndStress);
  }
}

  ngOnInit(): void {
    console.log("stress: ",this.resetService.getstress1())
    console.log("-->",this.vertStr,"-->",this.horStr,"-->",this.depth,"-->",this.modulus)
console.log("stress5:   ,",this.resetService.getstress5())
    if(this.resetService.getstress5()==1){
    if(this.resetService.getstress1()){
this.Aval=this.resetService.getstress1();
this.selectedIndex=1;

    }
    if(this.resetService.getstress2()){
this.Bval=this.resetService.getstress2();
this.router.navigate(['/stress/stress-res'], {relativeTo: this.route});

    }}
    else  if(this.resetService.getstress5()==1){
      this.selectedIndex=2;

    if(this.resetService.getstress3()){
      this.Cval=this.resetService.getstress3();

          }
          if(this.resetService.getstress4()){
      this.Dval=this.resetService.getstress4();
      this.router.navigate(['/stress/stress-res'], {relativeTo: this.route});

          }
        }
        else
        {
          this.selectedIndex=1;

        }
    this.enableDepth=true;
    this.enableModulus=true;;
    this.enableVertStress=false;
    this.enableHorStress=false;
    
    this.service.currentStopeHeight.subscribe(stopeHeight => this.stopeHeight = stopeHeight);
    this.service.currentSideWidth.subscribe(sideWidth => this.sideWidth = sideWidth);
    this.service.currentFhWidth.subscribe(fhWidth => this.fhWidth = fhWidth);

    this.service.currentStopeHeight2.subscribe(stopeHeight2 => this.stopeHeight2 = stopeHeight2);
    this.service.currentSideTopWidth.subscribe(sideTopWidth => this.sideTopWidth = sideTopWidth);
    this.service.currentSideBottomWidth.subscribe(sideBottomWidth => this.sideBottomWidth = sideBottomWidth);
    this.service.currentSideLength.subscribe(sideLength => this.sideLength = sideLength);
    this.service.currentFhWidth2.subscribe(fhWidth2 => this.fhWidth2 = fhWidth2);
  }

}
