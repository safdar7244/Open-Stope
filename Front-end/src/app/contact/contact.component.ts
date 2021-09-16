import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from "@angular/material/dialog";
import { Overlay} from '@angular/cdk/overlay';
import {AboutDownloadService} from '../services/about-download.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

public Subject: any = ['feedback', 'request','report a bug'];
contactForm: FormGroup;

constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private overlay: Overlay,private newService:AboutDownloadService) {}

changeSubject(e) {
  this.Subject.setValue(e.target.value, {
    onlySelf: true
  })
  // console.log("change sub..",e.target.value)
  // this.Subject=this.Subject[0];
}

messageModal(event:any): void {
  console.log("eveq: ",event.target.form[2].value)
  console.log("eveq: ",event.target.form[3].value)

  console.log("eveq: ",event.target.form[4].value)
  let subj=''
  if(event.target.form[3].value="1: feedback"){
    subj="feedback"
  }
  else if(event.target.form[3].value="2: request"){
    subj="request"
  }
  else if(event.target.form[3].value="3: report a bug"){
    subj="report a bug"
  }
  this.newService.postReq(event.target.form[0].value,event.target.form[1].value,event.target.form[2].value,subj,event.target.form[4].value).subscribe(data=>{

    window.location.href="/"
    setTimeout(()=>{
      window.location.href="/contact"

    },1000)

  })
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width ='25%';
  dialogConfig.autoFocus = true;
  dialogConfig.backdropClass='no-backdrop';
  dialogConfig.position={top:'10%'}; 
  dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
  this.dialog.open(ContactComponentMessage,dialogConfig )
}

  ngOnInit(): void {
  
    this.contactForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      message: new FormControl('', [Validators.required]),
      subjectName: new FormControl('', [Validators.required])
    }); 
  }

}
//Modal 1 component - RQD calculation
@Component({
  selector: 'contact-component-message',
  templateUrl: './contact.component-message.html',
  styleUrls: ['./contact.component-message.scss']})
export class ContactComponentMessage {

  constructor(
    public dialogRef: MatDialogRef<ContactComponentMessage>,
   ) { }
}