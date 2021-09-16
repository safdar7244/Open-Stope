import { Component, OnInit,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForAllService } from '../services/for-all.service';
import {hrvalues} from "../services/hrvalues.service";
import {allResetValues} from "../services/All-Reset-Form.service";

@Component({
  selector: 'app-symmetric',
  templateUrl: './symmetric.component.html',
  styleUrls: ['./symmetric.component.scss']
})
export class SymmetricComponent implements OnInit,AfterViewInit {
  public stopeHeight: number;
  public sideWidth: number;
  public fhWidth: number;

  public volume: number;
  public hrCrown: number;
  public hrFoot: number;
  public hrHang: number;
  public hrSide: number;

  public crownP: number;
  public crownA: number;
  public footP: number;
  public footA: number;
  public hangP: number;
  public hangA: number;
  public sideP: number;
  public sideA: number;

  constructor(private router: Router, private route: ActivatedRoute, private service: ForAllService, private hrService : hrvalues , private resetService:allResetValues) { }
  onChange(eve:any):void{

  console.log("Smth changed",eve);
  // ((<HTMLInputElement>document.getElementById("S_stopeHeight")).value as unknown as number)=24;
// eve.target.value=33

    }  
    calculate(stopeHeight: number, sideWidth: number, fhWidth: number,event:any) {
   console.log("calculate called...",stopeHeight,"->",sideWidth,"->",fhWidth)
  //  event.target.form[0].value=22
    this.router.navigate(['sym-res'], {relativeTo: this.route});
    
this.resetService.sethrsym(stopeHeight,sideWidth,fhWidth,1);




    this.stopeHeight = stopeHeight;
    this.service.changeStopeHeight(this.stopeHeight);
    this.sideWidth = sideWidth;
    this.service.changeSideWidth(this.sideWidth);
    this.fhWidth = fhWidth;
    this.service.changeFhWidth(this.fhWidth);
    
    this.volume = stopeHeight * sideWidth * fhWidth;
    this.volume = Math.round(this.volume * 1e1) / 1e1;
    this.service.changeVolume(this.volume);

    this.hrCrown = sideWidth * fhWidth / 2 / (sideWidth +fhWidth);
    this.hrCrown = Math.round(this.hrCrown * 1e2) / 1e2;
    this.service.changeHrCrown(this.hrCrown);

    this.crownP = 2 * (sideWidth+fhWidth);
    this.crownP = Math.round(this.crownP * 1e2) / 1e2;
    this.service.changeCrownP(this.crownP);

    this.crownA = sideWidth * fhWidth;
    this.crownA = Math.round(this.crownA * 1e2) / 1e2;
    this.service.changeCrownA(this.crownA);

    this.hrFoot = stopeHeight * fhWidth / 2 / (stopeHeight +fhWidth);
    this.hrFoot = Math.round(this.hrFoot * 1e2) / 1e2;
    this.service.changeHrFoot(this.hrFoot);

    this.footP = 2 * (stopeHeight+fhWidth);
    this.footP = Math.round(this.footP * 1e2) / 1e2;
    this.service.changeFootP(this.footP);

    this.footA = stopeHeight * fhWidth;
    this.footA = Math.round(this.footA * 1e2) / 1e2;
    this.service.changeFootA(this.footA);

    this.hrHang = stopeHeight * fhWidth / 2 / (stopeHeight +fhWidth);
    this.hrHang = Math.round(this.hrHang * 1e2) / 1e2;
    this.service.changeHrHang(this.hrHang);

    this.hangP = 2 * (stopeHeight +fhWidth);
    this.hangP = Math.round(this.hangP * 1e2) / 1e2;
    this.service.changeHangP(this.hangP);

    this.hangA = stopeHeight * fhWidth;
    this.hangA = Math.round(this.hangA * 1e2) / 1e2;
    this.service.changeHangA(this.hangA);

    this.hrSide = sideWidth * stopeHeight / 2 / (sideWidth +stopeHeight);
    this.hrSide = Math.round(this.hrSide * 1e2) / 1e2;
    this.service.changeHrSide(this.hrSide);

    this.sideP = 2 * (stopeHeight+sideWidth);
    this.sideP = Math.round(this.sideP * 1e2) / 1e2;
    this.service.changeSideP(this.sideP);

    this.sideA = stopeHeight * sideWidth;
    this.sideA = Math.round(this.sideA * 1e2) / 1e2;
    this.service.changeSideA(this.sideA);

    this.hrService.set(this.hrCrown,this.hrHang,this.hrFoot,this.hrSide)
  }
  @ViewChild("sva") myNameElem: ElementRef;
  XstopeHeight = "";
  XsideWidth="";
  XfhWidth="" 
  onPercentChange(percent: number) {
    console.log('hereQWERYy');  

//    this.percent = percent;
  }
  ngAfterViewInit():void{
  //  ( <HTMLInputElement>document.getElementById('stopeHeight')).value = '15';
  //  console.log("element ref:",this.myNameElem.nativeElement);
  //  this.myNameElem.nativeElement=22;
  // //  this.myNameElem.nativeElement.value=22;

  //  this.myNameElem.nativeElement.form[2].value="22"

  
  // ((<HTMLInputElement>document.getElementById("S_stopeHeight")).value as unknown as number)=12;
  // console.log("getvalue : ",(<HTMLInputElement>document.getElementById("S_stopeHeight")).value)
  // console.log("-> : ",(<HTMLInputElement>document.getElementById("S_stopeHeight")))

  }
  ngOnInit(): void {

// console.log("--><>",(<HTMLInputElement>document.getElementById("stopeHeight")));
// ((<HTMLInputElement>document.getElementById("stopeHeight")).value )="42";
   //this.myNameElem.nativeElement.value=22;

  //  this.myNameElem.nativeElement.form[2].value="22"
  //  console.log("PP2P->",this.myNameElem);


    // console.log("PPP->",this.myNameElem);
    //((document.getElementById("stopeHeight"))["value"] )="24";
// (<HTMLInputElement>document.getElementById("fhWidth")).value="12";
//   (<HTMLInputElement>document.getElementById("fhWidth")).textContent="12";

//   (<HTMLInputElement>document.getElementById("fhWidth")).innerText="12";
//   (<HTMLInputElement>document.getElementById("fhWidth")).innerHTML="12";
if(this.resetService.getsym1()){
  console.log("000><><>",this.resetService.getsym1());
  
  this.XstopeHeight=this.resetService.getsym1();
}
if(this.resetService.getsym2()){
  console.log("2000><><>",this.resetService.getsym2());

  this.XsideWidth=this.resetService.getsym2();

}
if(this.resetService.getsym3()){
  console.log("3000><><>",this.resetService.getsym3());

  this.XfhWidth=this.resetService.getsym3();
  this.router.navigate(['/hr/symmetric/sym-res'], {relativeTo: this.route});

}
// this.myNameElem.nativeElement="32";

     }

}
