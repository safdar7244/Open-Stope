import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForAllService } from '../services/for-all.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-q-res',
  templateUrl: './q-res.component.html',
  styleUrls: ['./q-res.component.scss']
})
export class QResComponent implements OnInit {
  public rqd_crown: number;
  public rqd_hw: number;
  public rqd_fw: number;
  public rqd_sw1: number;
  public rqd_sw2: number;

  public jointSet: number;
  public jointRoughness: number;
  public jointAlteration: number;

  public qQuality_crown: string;
  public qQuality_fw: string;
  public qQuality_hw: string;
  public qQuality_sw1: string;
  public qQuality_sw2: string;

  public rqdQuality_crown: string;
  public rqdQuality_hw: string;
  public rqdQuality_fw: string;
  public rqdQuality_sw1: string;
  public rqdQuality_sw2: string;

  public Jn: string;
  public Jr: string;
  public Ja: string;

  public qRes_crown: number;
  public qRes_hw: number;
  public qRes_fw: number;
  public qRes_sw1: number;
  public qRes_sw2: number;

  public barChartOptionsQ: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  public barChartLabels: Label[] = ['Crown', 'Hangingwall', 'Footwall', 'Sidewall 1', 'Sidewall 2'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = false;
  public barChartPlugins = [];
  public ChartColors: Color[] = [
    {backgroundColor: '#148F77'}
  ];
  
  constructor(private service: ForAllService) { }

  public barChartDataQ: ChartDataSets[] = [
    { data: [] }
  ];

  public barChartDataRQD: ChartDataSets[] = [
    { data: [], label: 'RQD (Rock Quality Designation)' }
  ];

  ngOnInit(): void {
    this.service.currentRqd_crown.subscribe(rqd_crown => this.rqd_crown = rqd_crown);
    this.service.currentRqd_hw.subscribe(rqd_hw => this.rqd_hw = rqd_hw);
    this.service.currentRqd_fw.subscribe(rqd_fw => this.rqd_fw = rqd_fw);
    this.service.currentRqd_sw1.subscribe(rqd_sw1 => this.rqd_sw1 = rqd_sw1);
    this.service.currentRqd_sw2.subscribe(rqd_sw2 => this.rqd_sw2 = rqd_sw2);

    this.service.currentQRes_crown.subscribe(qRes_crown => this.qRes_crown = qRes_crown);
    this.service.currentQRes_hw.subscribe(qRes_hw => this.qRes_hw = qRes_hw);
    this.service.currentQRes_fw.subscribe(qRes_fw => this.qRes_fw = qRes_fw);
    this.service.currentQRes_sw1.subscribe(qRes_sw1 => this.qRes_sw1 = qRes_sw1);
    this.service.currentQRes_sw2.subscribe(qRes_sw2 => this.qRes_sw2 = qRes_sw2);

    this.service.currentQQuality_crown.subscribe(qQuality_crown => this.qQuality_crown = qQuality_crown);
    this.service.currentQQuality_hw.subscribe(qQuality_hw => this.qQuality_hw = qQuality_hw);
    this.service.currentQQuality_fw.subscribe(qQuality_fw => this.qQuality_fw = qQuality_fw);
    this.service.currentQQuality_sw1.subscribe(qQuality_sw1 => this.qQuality_sw1 = qQuality_sw1);
    this.service.currentQQuality_sw2.subscribe(qQuality_sw2 => this.qQuality_sw2 = qQuality_sw2);

    this.service.currentRqdQuality_crown.subscribe(RqdQuality_crown => this.rqdQuality_crown = RqdQuality_crown);
    this.service.currentRqdQuality_hw.subscribe(RqdQuality_hw => this.rqdQuality_hw = RqdQuality_hw);
    this.service.currentRqdQuality_fw.subscribe(RqdQuality_fw => this.rqdQuality_fw = RqdQuality_fw);
    this.service.currentRqdQuality_sw1.subscribe(RqdQuality_sw1 => this.rqdQuality_sw1 = RqdQuality_sw1);
    this.service.currentRqdQuality_sw2.subscribe(RqdQuality_sw2 => this.rqdQuality_sw2 = RqdQuality_sw2);

    this.service.currentJn.subscribe(Jn => this.Jn = Jn);
    this.service.currentJr.subscribe(Jr => this.Jr = Jr);
    this.service.currentJa.subscribe(Ja => this.Ja = Ja);

    const data0 = [this.qRes_crown,this.qRes_hw,this.qRes_fw, this.qRes_sw1,this.qRes_sw2];
    this.barChartDataQ[0].data = data0;

    const data1 = [this.rqd_crown,this.rqd_hw,this.rqd_fw, this.rqd_sw1,this.rqd_sw2];
    this.barChartDataRQD[0].data = data1;
  }
}
