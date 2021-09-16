import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { DataSharingComponent } from '../data-sharing/data-sharing.component';
import { Overlay} from '@angular/cdk/overlay';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  constructor(private dialog: MatDialog,private overlay: Overlay) { }
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
