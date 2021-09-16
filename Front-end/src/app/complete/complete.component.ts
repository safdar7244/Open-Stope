import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from "@angular/material/dialog";
import { DataSharingComponent } from '../data-sharing/data-sharing.component';
import { Overlay} from '@angular/cdk/overlay';
import pdfMake from "pdfmake/build/pdfmake";  
import pdfFonts from "pdfmake/build/vfs_fonts";  

import {abcfactor} from '../services/abcfactor.service'
import {qvaluefactor} from '../services/qvalue-factor.service'
import {hrvalues} from '../services/hrvalues.service'
import {stabilityService} from '../services/stability.service'

pdfMake.vfs = pdfFonts.pdfMake.vfs;  

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CompleteComponent>, private dialog: MatDialog,private overlay: Overlay,private abcService :abcfactor,private hrService :hrvalues,private sService :stabilityService,private qService :qvaluefactor) { }
  
  selectednew():void{
window.location.href="/";
  }
  selected(): void {
let cc=`Hydraulic Radius Calculation \n\n Crown : ${this.hrService.getcrown()} \n Hangwall : ${this.hrService.gethang()}\n Footwall : ${this.hrService.getfoot()}\n Sidewall : ${this.hrService.getside()} \n

`
if(this.qService.getStope().includes("Crown"))
{
cc=cc+`-----------------------------------------------\nCrown Stability Number(N) : ${this.abcService.getCrownN()}\n
Stress Factor(A) : ${this.abcService.getCrownA()}      \n
Joint Defect Factor(B) : ${this.abcService.getCrownB()}\n
Gravity Factor(C) : ${this.abcService.getCrownC()}\n
Time Factor(T) : ${this.abcService.getCrownT()}\n
Fault Factor(F) : ${this.abcService.getCrownF()}\n

Qvalue : ${this.qService.getCrownQ()} \n \n

Crown Outcome: ${this.sService.getCrownOutcome()}\n`

}
if(this.qService.getStope().includes("HW"))
{
cc=cc+`-----------------------------------------------\nHW Stability Number(N) : ${this.abcService.getHangN()}\n
Stress Factor(A) : ${this.abcService.getHangA()}      \n
Joint Defect Factor(B) : ${this.abcService.getHangB()}\n
Gravity Factor(C) : ${this.abcService.getHangC()}\n
Time Factor(T) : ${this.abcService.getHangT()}\n
Fault Factor(F) : ${this.abcService.getHangF()}\n

Qvalue : ${this.qService.getHangQ()} \n \n


HW Outcome: ${this.sService.getHWOutcome()}\n`
}
if(this.qService.getStope().includes("FW"))
{
cc=cc+`-----------------------------------------------\nFW Stability Number(N) : ${this.abcService.getFootN()}\n
Stress Factor(A) : ${this.abcService.getFootA()}      \n
Joint Defect Factor(B) : ${this.abcService.getFootB()}\n
Gravity Factor(C) : ${this.abcService.getFootC()}\n
Time Factor(T) : ${this.abcService.getFootT()}\n
Fault Factor(F) : ${this.abcService.getFootF()}\n

Qvalue : ${this.qService.getFootQ()} \n \n

FW Outcome: ${this.sService.getFWOutcome()}\n`
}
if(this.qService.getStope().includes("SW1"))
{
cc=cc+`-----------------------------------------------\nSW1 Stability Number(N) : ${this.abcService.getSide1N()}\n
Stress Factor(A) : ${this.abcService.getSide1A()}      \n
Joint Defect Factor(B) : ${this.abcService.getSide1B()}\n
Gravity Factor(C) : ${this.abcService.getSide1C()}\n
Time Factor(T) : ${this.abcService.getSide1T()}\n
Fault Factor(F) : ${this.abcService.getSide1F()}\n

Qvalue : ${this.qService.getSide1Q()} \n \n

SW1 Outcome: ${this.sService.getSW1Outcome()}\n`
}
if(this.qService.getStope().includes("SW2"))
{
cc=cc+`-----------------------------------------------\nSW2 Stability Number(N) : ${this.abcService.getSide2N()}\n
Stress Factor(A) : ${this.abcService.getSide2A()}      \n
Joint Defect Factor(B) : ${this.abcService.getSide2B()}\n
Gravity Factor(C) : ${this.abcService.getSide2C()}\n
Time Factor(T) : ${this.abcService.getSide2T()}\n
Fault Factor(F) : ${this.abcService.getSide2F()}\n

Qvalue : ${this.qService.getSide2Q()} \n \n

SW2 Outcome: ${this.sService.getSW2Outcome()}\n`
}
    let docDefinition = {  
      header: 'Calculations',  
      content:  cc
    };  
   console.log(" before ..")
    pdfMake.createPdf(docDefinition).download('Open Stope Stability Results.pdf'); 
    console.log(" After ..")

    this.dialogRef.close(true);
  }
  
  shareData() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
    this.dialog.open(DataSharingComponent, dialogConfig);
  }
  
  ngOnInit(): void {
  }

}
