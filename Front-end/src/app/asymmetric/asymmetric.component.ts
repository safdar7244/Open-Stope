import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForAllService } from '../services/for-all.service';
import { hrvalues } from '../services/hrvalues.service';
import {allResetValues} from "../services/All-Reset-Form.service";

@Component({
  selector: 'app-asymmetric',
  templateUrl: './asymmetric.component.html',
  styleUrls: ['./asymmetric.component.scss']
})
export class AsymmetricComponent implements OnInit {
  public stopeHeight2: number;
  public sideTopWidth: number;
  public sideBottomWidth: number;
  public sideLength: number;
  public fhWidth2: number;
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

  constructor(private router: Router, private route: ActivatedRoute, private service: ForAllService,private newService:hrvalues, private resetService:allResetValues) { }
  
  unsymmetric(stopeHeight2: number, sideTopWidth: number, sideBottomWidth: number, sideLength: number, fhWidth2: number) {
    this.router.navigate(['asym-res'], {relativeTo: this.route});


    this.resetService.sethrAsym(stopeHeight2,sideLength,fhWidth2,sideTopWidth,sideBottomWidth,2);


    this.stopeHeight2 = stopeHeight2;
    this.service.changeStopeHeight2(this.stopeHeight2);

    this.sideTopWidth = sideTopWidth;
    this.service.changeSideTopWidth(this.sideTopWidth);

    this.sideBottomWidth = sideBottomWidth;
    this.service.changeSideBottomWidth(this.sideBottomWidth);

    this.sideLength = sideLength;
    this.service.changeSideLength(this.sideLength);

    this.fhWidth2 = fhWidth2;
    this.service.changeFhWidth2(this.fhWidth2);

    this.volume = (sideTopWidth +sideBottomWidth) / 2 * stopeHeight2 * fhWidth2;
    this.volume = Math.round(this.volume * 1e1) / 1e1;
    this.service.changeVolume(this.volume);

    this.hrCrown = sideTopWidth * fhWidth2 / 2 / (sideTopWidth +fhWidth2);
    this.hrCrown = Math.round(this.hrCrown * 1e2) / 1e2;
    this.service.changeHrCrown(this.hrCrown);

    this.crownP = 2 * (sideTopWidth+fhWidth2);
    this.crownP = Math.round(this.crownP * 1e2) / 1e2;
    this.service.changeCrownP(this.crownP);

    this.crownA = sideTopWidth * fhWidth2;
    this.crownA = Math.round(this.crownA * 1e2) / 1e2;
    this.service.changeCrownA(this.crownA);

    this.hrFoot = stopeHeight2 * fhWidth2 / 2 / (stopeHeight2+fhWidth2);
    this.hrFoot = Math.round(this.hrFoot * 1e2) / 1e2;
    this.service.changeHrFoot(this.hrFoot);

    this.footP = 2 * (stopeHeight2 +fhWidth2);
    this.footP = Math.round(this.footP * 1e2) / 1e2;
    this.service.changeFootP(this.footP);

    this.footA = stopeHeight2 * fhWidth2;
    this.footA = Math.round(this.footA * 1e2) / 1e2;
    this.service.changeFootA(this.footA);

    this.hrHang = sideLength * fhWidth2 / 2 / (sideLength+fhWidth2);
    this.hrHang = Math.round(this.hrHang * 1e2) / 1e2;
    this.service.changeHrHang(this.hrHang);

    this.hangP = 2 * (sideLength +fhWidth2);
    this.hangP = Math.round(this.hangP * 1e2) / 1e2;
    this.service.changeHangP(this.hangP);

    this.hangA = sideLength * fhWidth2;
    this.hangA = Math.round(this.hangA * 1e2) / 1e2;
    this.service.changeHangA(this.hangA);

    this.hrSide = (sideTopWidth +sideBottomWidth) / 2 * stopeHeight2 / (stopeHeight2+sideTopWidth+sideBottomWidth+sideLength);
    this.hrSide = Math.round(this.hrSide * 1e2) / 1e2;
    this.service.changeHrSide(this.hrSide);

    this.sideP = stopeHeight2+sideTopWidth+sideBottomWidth+sideLength;
    this.sideP = Math.round(this.sideP * 1e2) / 1e2;
    this.service.changeSideP(this.sideP);

    this.sideA = (sideTopWidth+sideBottomWidth) / 2 * stopeHeight2;
    this.sideA = Math.round(this.sideA * 1e2) / 1e2;
    this.service.changeSideA(this.sideA);
    this.newService.set(this.hrCrown,this.hrHang,this.hrFoot,this.hrSide)

  }
  XstopeHeight = "";
  XsideLength="";
  XfhWidth="" ;
  XsideBottomWidth="";
  XsideTopWidth="";
  @ViewChild("abc") myNameElem: ElementRef;

  ngOnInit(): void {
    
if(this.resetService.getasym1()){
  console.log("000><><>");
  this.XstopeHeight=this.resetService.getasym1();
}
if(this.resetService.getasym2()){
  this.XsideLength=this.resetService.getasym2();
}
if(this.resetService.getasym3()){
  this.XfhWidth=this.resetService.getasym3();
}
if(this.resetService.getasym4()){
 this.XsideTopWidth=this.resetService.getasym4();
}
if(this.resetService.getasym5()){
  this.XsideBottomWidth=this.resetService.getasym5();
  this.router.navigate(['/hr/asymmetric/asym-res'], {relativeTo: this.route});

}


// this.myNameElem.nativeElement="32";
  }

}
