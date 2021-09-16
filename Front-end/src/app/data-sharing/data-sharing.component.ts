import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from "@angular/material/dialog";
import { Overlay} from '@angular/cdk/overlay';
import { abcfactor } from '../services/abcfactor.service'
import { hrvalues } from '../services/hrvalues.service'
import { qvaluefactor } from '../services/qvalue-factor.service'
import { stabilityService } from '../services/stability.service'
import { AboutDownloadService } from '../services/about-download.service'


@Component({
  selector: 'app-data-sharing',
  templateUrl: './data-sharing.component.html',
  styleUrls: ['./data-sharing.component.scss'],
})
export class DataSharingComponent implements OnInit {
  shareForm: FormGroup;
  constructor(private fb: FormBuilder,  private dialogRef: MatDialogRef<DataSharingComponent>, 
    private dialog:MatDialog,private overlay: Overlay,private abcService:abcfactor,private hrService:hrvalues,private qService:qvaluefactor,private sService:stabilityService,private dservice:AboutDownloadService) {
//  let sc=12
    this.shareForm = this.fb.group({
      mine:'', 
      location:'',
      method: '', 
      surface:this.qService.getlatestStope(),
      orebody:'',
      Qvalue: this.qService.getQ(),
      factorA: this.abcService.getA(), 
      factorB: this.abcService.getB(), 
      factorC: this.abcService.getC(), 
      factorF: this.abcService.getF(), 
      factorT: this.abcService.getT(), 
      hr: this.hrService.getLatestHr(this.qService.getlatestStope()),
      stabilityNumber:this.abcService.getLatestN(this.qService.getlatestStope()), 
      outcome:this.sService.getLatestOutcome(this.qService.getlatestStope())
      // mine:'123', 
      // location:'456',
      // method: '', 
      // surface:"Crown",
      // orebody:'',
      // Qvalue: 1,
      // factorA: 2,
      // factorB: 3,
      // factorC: 4,
      // factorF: 5,
      // factorT: 6,
      // hr: 7,
      // stabilityNumber:8, 
      // outcome:"STABLE"
    });
  }
  
  ngOnInit(): void {
    
    console.log("Data dharing -->",this.shareForm.value)
    this.shareForm.value.mine='123';
  }
  submit(val1 :any,val2 : any,val3 : any,val4 : any,val5 : any,val6 : any,val7 : any,val8 : any,val9 : any,val10 : any,val11 : any,val12 : any,val13 : any,val14 : any):void {



this.sService.datashareReq(val1 ,val2 ,val3 ,val4 ,val5 ,val6 ,val7 ,val8 ,val9 ,val10 ,val11 ,val12 ,val13 ,val14 ).subscribe(data=>console.log("done"))

// this.dservice.postReq("123","456","789");

this.dialogRef.close(this.shareForm.value);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width ='25%';
    dialogConfig.autoFocus = true;
    dialogConfig.position={top:'10%'}
    dialogConfig.backdropClass='no-backdrop';
    dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
    this.dialog.open(DataSharingComponentShared,dialogConfig )
}

close() {
    this.dialogRef.close();
}

}

@Component({
  selector: 'data-sharing-component-shared',
  templateUrl: './data-sharing.component-shared.html',
  styleUrls: ['./data-sharing.component-shared.scss']})
export class DataSharingComponentShared {

  constructor(
    public dialogRef: MatDialogRef<DataSharingComponentShared>,
   ) { }
}