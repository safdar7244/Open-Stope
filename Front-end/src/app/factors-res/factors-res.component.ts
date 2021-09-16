import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForAllService } from '../services/for-all.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import {PredictService} from "../services/predict.service";
import {Subscription} from "rxjs";
import {PredictionService} from "./predictesult.service";
import {Predict} from "../models/predict.model";

@Component({
  selector: 'app-factors-res',
  templateUrl: './factors-res.component.html',
  styleUrls: ['./factors-res.component.scss']
})

export class FactorsResComponent implements OnInit {

  subscription: Subscription;

  public crown_Afactor_original: number;
  public crown_Afactor_modified: number;
  public crown_Bfactor_original: number;
  public crown_Bfactor_modified: number;
  public crown_Cfactor_original: number;
  public crown_Cfactor_modified: number;

  public crownN: number;
  public side1N: number;
  public side2N: number;
  public hwN: number;
  public fwN: number;
  public crownN_mod: number;
  public side1N_mod: number;
  public side2N_mod: number;
  public hwN_mod: number;
  public fwN_mod: number;

  public hrCrown: number;
  public hrFoot: number;
  public hrHang: number;
  public hrSide: number;

  public fw_Afactor_original: number;
  public fw_Afactor_modified: number;
  public hw_Afactor_original: number;
  public hw_Afactor_modified: number;

  public hw_Bfactor_original: number;
  public hw_Bfactor_modified: number;
  public fw_Bfactor_original: number;
  public fw_Bfactor_modified: number;

  public hw_Cfactor_original: number;
  public hw_Cfactor_modified: number;
  public fw_Cfactor_original: number;
  public fw_Cfactor_modified: number;

  public side1_Afactor_original: number;
  public side1_Afactor_modified: number;
  public side1_Bfactor_original: number;
  public side1_Bfactor_modified: number;
  public side1_Cfactor_original: number;
  public side1_Cfactor_modified: number;

  public side2_Afactor_original: number;
  public side2_Afactor_modified: number;
  public side2_Bfactor_original: number;
  public side2_Bfactor_modified: number;
  public side2_Cfactor_original: number;
  public side2_Cfactor_modified: number;

  
  public faultFactor: number;
  public timeFactor_crown: number;
  public timeFactor_hw: number;
  public timeFactor_fw: number;
  public timeFactor_sw1: number;
  public timeFactor_sw2: number;

  public faultFactor_crown: number;
  public faultFactor_hw: number;
  public faultFactor_fw: number;
  public faultFactor_sw1: number;
  public faultFactor_sw2: number;

  public barChartOptionsA: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Stress Factor (A)',
      padding:0,
  }
  };

  public barChartOptionsB: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Joint Defect Factor (B)',
      padding:0,
  }
  };

  public barChartOptionsC: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Gravity Factor (C)',
      padding:0,
  }
  };

  public barChartOptionsT: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Time Factor (T)',
      padding:0,
  }
  };

  public barChartOptionsF: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Fault Factor (F)',
      padding:0,
  }
  };

  public barChartOptionsN: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Stability Number (N)",
      padding:0,
  },
  };

  public barChartLabels: Label[] = ['Crown', 'Hangingwall', 'Footwall', 'Sidewall 1', 'Sidewall 2'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ForAllService,
    private predictService: PredictService,
    private predictionService: PredictionService) {
   }

  public barChartDataA: ChartDataSets[] = [
    { data: [], label: 'Original' },
    { data: [], label: 'Modified' }
  ];

  public barChartDataB: ChartDataSets[] = [
    { data: [], label: 'Original' },
    { data: [], label: 'Modified' }
  ];

  public barChartDataC: ChartDataSets[] = [
    { data: [], label: 'Original' },
    { data: [], label: 'Modified' }
  ];

  public barChartDataT: ChartDataSets[] = [
    { data: [], label: 'Original' }
  ];

  public barChartDataF: ChartDataSets[] = [
    { data: [], label: 'Original' }
  ];

  public barChartDataN: ChartDataSets[] = [
    { data: [], label: 'Original' },
    { data: [], label: 'Modified' }
  ];
  public predictData = { crown: [], foot: [], hide: [], side: [] };

  public ChartColors: Color[] = [
    { backgroundColor: '#148F77' },
    { backgroundColor: '#76D7C4' },
  ];

  public prediction: Predict;

  ngOnInit(): void {
    this.subscription = this.predictionService.predictChanged
      .subscribe(
        (predict: Predict) => {
          this.prediction = predict;
        }
      );

    this.service.currentCrown_Afactor_original.subscribe(crown_Afactor_original => this.crown_Afactor_original = crown_Afactor_original);
    this.service.currentCrown_Afactor_modified.subscribe(crown_Afactor_modified => this.crown_Afactor_modified = crown_Afactor_modified);
    this.service.currentCrown_Bfactor_original.subscribe(crown_Bfactor_original => this.crown_Bfactor_original = crown_Bfactor_original);
    this.service.currentCrown_Bfactor_modified.subscribe(crown_Bfactor_modified => this.crown_Bfactor_modified = crown_Bfactor_modified);
    this.service.currentCrown_Cfactor_original.subscribe(crown_Cfactor_original => this.crown_Cfactor_original = crown_Cfactor_original);
    this.service.currentCrown_Cfactor_modified.subscribe(crown_Cfactor_modified => this.crown_Cfactor_modified = crown_Cfactor_modified);
    
    this.service.currentHw_Afactor_original.subscribe(hw_Afactor_original => this.hw_Afactor_original = hw_Afactor_original);
    this.service.currentHw_Afactor_modified.subscribe(hw_Afactor_modified => this.hw_Afactor_modified = hw_Afactor_modified);
    this.service.currentHw_Bfactor_original.subscribe(hw_Bfactor_original => this.hw_Bfactor_original = hw_Bfactor_original);
    this.service.currentHw_Bfactor_modified.subscribe(hw_Bfactor_modified => this.hw_Bfactor_modified = hw_Bfactor_modified);
    this.service.currentHw_Cfactor_original.subscribe(hw_Cfactor_original => this.hw_Cfactor_original = hw_Cfactor_original);
    this.service.currentHw_Cfactor_modified.subscribe(hw_Cfactor_modified => this.hw_Cfactor_modified = hw_Cfactor_modified);
    
    this.service.currentFw_Afactor_original.subscribe(fw_Afactor_original => this.fw_Afactor_original = fw_Afactor_original);
    this.service.currentFw_Afactor_modified.subscribe(fw_Afactor_modified => this.fw_Afactor_modified = fw_Afactor_modified);
    this.service.currentFw_Bfactor_original.subscribe(fw_Bfactor_original => this.fw_Bfactor_original = fw_Bfactor_original);
    this.service.currentFw_Bfactor_modified.subscribe(fw_Bfactor_modified => this.fw_Bfactor_modified = fw_Bfactor_modified);
    this.service.currentFw_Cfactor_original.subscribe(fw_Cfactor_original => this.fw_Cfactor_original = fw_Cfactor_original);
    this.service.currentFw_Cfactor_modified.subscribe(fw_Cfactor_modified => this.fw_Cfactor_modified = fw_Cfactor_modified);
    
    this.service.currentSide1_Afactor_original.subscribe(side1_Afactor_original => this.side1_Afactor_original = side1_Afactor_original);
    this.service.currentSide1_Afactor_modified.subscribe(side1_Afactor_modified => this.side1_Afactor_modified = side1_Afactor_modified);
    this.service.currentSide1_Bfactor_original.subscribe(side1_Bfactor_original => this.side1_Bfactor_original = side1_Bfactor_original);
    this.service.currentSide1_Bfactor_modified.subscribe(side1_Bfactor_modified => this.side1_Bfactor_modified = side1_Bfactor_modified);
    this.service.currentSide1_Cfactor_original.subscribe(side1_Cfactor_original => this.side1_Cfactor_original = side1_Cfactor_original);
    this.service.currentSide1_Cfactor_modified.subscribe(side1_Cfactor_modified => this.side1_Cfactor_modified = side1_Cfactor_modified);
    
    this.service.currentSide2_Afactor_original.subscribe(side2_Afactor_original => this.side2_Afactor_original = side2_Afactor_original);
    this.service.currentSide2_Afactor_modified.subscribe(side2_Afactor_modified => this.side2_Afactor_modified = side2_Afactor_modified);
    this.service.currentSide2_Bfactor_original.subscribe(side2_Bfactor_original => this.side2_Bfactor_original = side2_Bfactor_original);
    this.service.currentSide2_Bfactor_modified.subscribe(side2_Bfactor_modified => this.side2_Bfactor_modified = side2_Bfactor_modified);
    this.service.currentSide2_Cfactor_original.subscribe(side2_Cfactor_original => this.side2_Cfactor_original = side2_Cfactor_original);
    this.service.currentSide2_Cfactor_modified.subscribe(side2_Cfactor_modified => this.side2_Cfactor_modified = side2_Cfactor_modified);
    
    this.service.currentFaultFactor_crown.subscribe(faultFactor_crown => this.faultFactor_crown = faultFactor_crown);
    this.service.currentFaultFactor_hw.subscribe(faultFactor_hw => this.faultFactor_hw = faultFactor_hw);
    this.service.currentFaultFactor_fw.subscribe(faultFactor_fw => this.faultFactor_fw = faultFactor_fw);
    this.service.currentFaultFactor_sw1.subscribe(faultFactor_sw1 => this.faultFactor_sw1 = faultFactor_sw1);
    this.service.currentFaultFactor_sw2.subscribe(faultFactor_sw2 => this.faultFactor_sw2 = faultFactor_sw2);

    this.service.currentTimeFactor_crown.subscribe(timeFactor_crown => this.timeFactor_crown = timeFactor_crown);
    this.service.currentTimeFactor_hw.subscribe(timeFactor_hw => this.timeFactor_hw = timeFactor_hw);
    this.service.currentTimeFactor_fw.subscribe(timeFactor_fw => this.timeFactor_fw = timeFactor_fw);
    this.service.currentTimeFactor_sw1.subscribe(timeFactor_sw1 => this.timeFactor_sw1 = timeFactor_sw1);
    this.service.currentTimeFactor_sw2.subscribe(timeFactor_sw2 => this.timeFactor_sw2 = timeFactor_sw2);

    this.service.currentCrownN.subscribe(crownN=> this.crownN = crownN);
    this.service.currentHwN.subscribe(hwN=> this.hwN = hwN);
    this.service.currentFwN.subscribe(fwN=> this.fwN = fwN);
    this.service.currentSide1N.subscribe(side1N=> this.side1N = side1N);
    this.service.currentSide2N.subscribe(side2N=> this.side2N = side2N);
    this.service.currentCrownN_mod.subscribe(crownN_mod=> this.crownN_mod = crownN_mod);
    this.service.currentHwN_mod.subscribe(hwN_mod=> this.hwN_mod = hwN_mod);
    this.service.currentFwN_mod.subscribe(fwN_mod=> this.fwN_mod = fwN_mod);
    this.service.currentSide1N_mod.subscribe(side1N_mod=> this.side1N_mod = side1N_mod);
    this.service.currentSide2N_mod.subscribe(side2N_mod=> this.side2N_mod = side2N_mod);

    this.service.currentHrCrown.subscribe(hrCrown => this.hrCrown = hrCrown)
    this.service.currentHrFoot.subscribe(hrFoot => this.hrFoot = hrFoot)
    this.service.currentHrHang.subscribe(hrHang => this.hrHang = hrHang)
    this.service.currentHrSide.subscribe(hrSide => this.hrSide = hrSide)

    console.log(this.hrCrown, this.hrFoot, this.hrHang, this.hrSide)

    const data0 = [this.crown_Afactor_original, this.hw_Afactor_original, this.fw_Afactor_original, this.side1_Afactor_original, this.side2_Afactor_original];
    const data1 = [this.crown_Afactor_modified, this.hw_Afactor_modified, this.fw_Afactor_modified, this.side1_Afactor_modified, this.side2_Afactor_modified];

    const data2 = [this.crown_Bfactor_original, this.hw_Bfactor_original, this.fw_Bfactor_original, this.side1_Bfactor_original, this.side2_Bfactor_original];
    const data3 = [this.crown_Bfactor_modified, this.hw_Bfactor_modified, this.fw_Bfactor_modified, this.side1_Bfactor_modified, this.side2_Bfactor_modified];

    const data4 = [this.crown_Cfactor_original, this.hw_Cfactor_original, this.fw_Cfactor_original, this.side1_Cfactor_original, this.side2_Cfactor_original];
    const data5 = [this.crown_Cfactor_modified, this.hw_Cfactor_modified, this.fw_Cfactor_modified, this.side1_Cfactor_modified, this.side2_Cfactor_modified];

    const data6 = [this.timeFactor_crown, this.timeFactor_hw, this.timeFactor_fw, this.timeFactor_sw1, this.timeFactor_sw2];
    
    const data7 = [this.faultFactor_crown, this.faultFactor_hw, this.faultFactor_fw, this.faultFactor_sw1, this.faultFactor_sw2];

    const data8 = [this.crownN, this.hwN, this.fwN, this.side1N, this.side2N];
    const data9 = [this.crownN_mod, this.hwN_mod, this.fwN_mod, this.side1N_mod, this.side2N_mod];

    const data21 = [this.crownN, this.hrCrown]
    const data22 = [this.fwN, this.hrFoot]
    const data23= [this.hwN, this.hrHang]
    const data24= [this.side1N, this.hrSide]
    const data25= [this.side2N, this.hrSide]

    this.barChartDataA[0].data = data0;
    this.barChartDataA[1].data = data1;

    this.barChartDataB[0].data = data2;
    this.barChartDataB[1].data = data3;

    this.barChartDataC[0].data = data4;
    this.barChartDataC[1].data = data5;

    this.barChartDataT[0].data = data6;

    this.barChartDataF[0].data = data7;

    this.barChartDataN[0].data = data8;
    this.barChartDataN[1].data = data9;

    this.predictData.crown = data21;
    this.predictData.foot = data22;
    this.predictData.hide = data23;
    this.predictData.side = data24;
    this.predictData.side = data25;

  }

  predict = () => {
    console.log(this.hrCrown, this.hrFoot, this.hrHang, this.hrSide)
    this.predictService.predictData(this.predictData).subscribe(res => {
      this.predictionService.setPrediction(res);
      this.router.navigate(['/stability']);
    })
  }

}
