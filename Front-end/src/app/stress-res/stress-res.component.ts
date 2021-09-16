import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForAllService } from '../services/for-all.service';

@Component({
  selector: 'app-stress-res',
  templateUrl: './stress-res.component.html',
  styleUrls: ['./stress-res.component.scss']
})

export class StressResComponent implements OnInit {
  public Verticalstress: number;
  public Horizontalstress: number;
  public crownIndStress: number;
  public sideIndStress: number;
  public fwIndStress: number;
  public hwIndStress: number;

  constructor(private router: Router, private route: ActivatedRoute, private service: ForAllService) { }

  viewBox
  viewBox_marker
  
  refX
  refY
  ngOnInit(): void {
    this.refX='5';
    this.refY='5';
    this.viewBox = '-300 -200 600 600';
   
    this.viewBox_marker='0 0 10 10';
    this.service.currentVerticalstress.subscribe(Verticalstress => this.Verticalstress = Verticalstress);
    this.service.currentHorizontalstress.subscribe(Horizontalstress => this.Horizontalstress = Horizontalstress);
    this.service.currentCrownIndStress.subscribe(crownIndStress => this.crownIndStress = crownIndStress);
    this.service.currentSideIndStress.subscribe(sideIndStress => this.sideIndStress = sideIndStress);
    this.service.currentFwIndStress.subscribe(fwIndStress => this.fwIndStress = fwIndStress);
    this.service.currentHwIndStress.subscribe(hwIndStress => this.hwIndStress = hwIndStress);


  }

}
