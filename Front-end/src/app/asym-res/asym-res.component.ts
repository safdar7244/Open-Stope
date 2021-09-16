import { Component, OnInit } from '@angular/core';
import { ForAllService } from '../services/for-all.service';

@Component({
  selector: 'app-asym-res',
  templateUrl: './asym-res.component.html',
  styleUrls: ['./asym-res.component.scss']
})
export class AsymResComponent implements OnInit {
  public stopeHeight: number;
  public sideTopWidth: number;
  public sideBottomWidth: number;
  public sideLength: number;
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

  constructor(private service: ForAllService) { }

  ngOnInit(): void {
    this.service.currentStopeHeight.subscribe(stopeHeight => this.stopeHeight = stopeHeight)
    this.service.currentSideTopWidth.subscribe(sideTopWidth => this.sideTopWidth = sideTopWidth)
    this.service.currentSideBottomWidth.subscribe(sideBottomWidth => this.sideBottomWidth = sideBottomWidth)
    this.service.currentSideLength.subscribe(sideLength => this.sideLength = sideLength)
    this.service.currentFhWidth.subscribe(fhWidth => this.fhWidth = fhWidth)
    this.service.currentVolume.subscribe(volume => this.volume = volume)
    this.service.currentHrCrown.subscribe(hrCrown => this.hrCrown = hrCrown)
    this.service.currentHrFoot.subscribe(hrFoot => this.hrFoot = hrFoot)
    this.service.currentHrHang.subscribe(hrHang => this.hrHang = hrHang)
    this.service.currentHrSide.subscribe(hrSide => this.hrSide = hrSide)
    this.service.currentCrownP.subscribe(crownP => this.crownP = crownP)
    this.service.currentCrownA.subscribe(crownA => this.crownA = crownA)
    this.service.currentFootP.subscribe(footP => this.footP = footP)
    this.service.currentFootA.subscribe(footA => this.footA = footA)
    this.service.currentHangP.subscribe(hangP => this.hangP = hangP)
    this.service.currentHangA.subscribe(hangA => this.hangA = hangA)
    this.service.currentSideP.subscribe(sideP => this.sideP = sideP)
    this.service.currentSideA.subscribe(sideA => this.sideA = sideA)
  }

}
