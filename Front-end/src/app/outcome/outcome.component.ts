import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForAllService } from '../services/for-all.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from "@angular/material/dialog";
import { Label, Color } from 'ng2-charts';
import { CompleteComponent } from '../complete/complete.component';
import { Overlay} from '@angular/cdk/overlay';
import {stabilityService} from '../services/stability.service'
import {hrvalues} from '../services/hrvalues.service'
import { abcfactor } from '../services/abcfactor.service'
import { qvaluefactor } from '../services/qvalue-factor.service'

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.scss']
})
export class OutcomeComponent implements OnInit {
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

  public qRes_crown: number;
  public qRes_hw: number;
  public qRes_fw: number;
  public qRes_sw1: number;
  public qRes_sw2: number;

  public crownIndStress: number;
  public sideIndStress: number;
  public fwIndStress: number;
  public hwIndStress: number;

  public Verticalstress: number;
  public Horizontalstress: number;

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

  public Jn: string;
  public Jr: string;
  public Ja: string;
  public qQuality_crown: string;
  public qQuality_hw: string;
  public qQuality_fw: string;
  public qQuality_sw1: string;
  public qQuality_sw2: string;

  public hw_Afactor_original: number;
  public hw_Afactor_modified: number;
  public hw_Bfactor_original: number;
  public hw_Bfactor_modified: number;
  public hw_Cfactor_original: number;
  public hw_Cfactor_modified: number;

  public fw_Afactor_original: number;
  public fw_Afactor_modified: number;
  public fw_Bfactor_original: number;
  public fw_Bfactor_modified: number;
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

  public barChartOptionsQ: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  public barChartLegendQ = false;

  public barChartOptionsA: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Stress Factor (A)',
      padding:0,
  }, legend:{
    labels: {
      boxWidth:20,
      fontSize:9
    }
  }
  };

  public barChartOptionsB: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Joint Defect Factor (B)',
      padding:0,
  },
  legend:{
    labels: {
      boxWidth:20,
      fontSize:9
    }
  }
  };

  public barChartOptionsC: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Gravity Factor (C)',
      padding:0,
  }, legend:{
    labels: {
      boxWidth:20,
      fontSize:9
    }
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
  },  legend:{
    labels: {
      boxWidth:20,
      fontSize:9
    }
  }
  };

  public barChartLabels: Label[] = ['Crown', 'Hangingwall', 'Footwall', 'Sidewall 1', 'Sidewall 2'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];
  
  public scatterChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'The Refined Stability Graph',
      padding:0,
  },
    scales: {
      gridLines: {display:true,
      drawBorder:true,
      drawTicks:true,
      color:'#000000'},
      xAxes:[{type:'logarithmic',
      ticks: {
        min:1,
        max:100,
        callback: function (value, index, values) {
          return Number(value.toString());
        }
      }, 
      scaleLabel: {
        display: true,
        labelString:"Hydraulic Radius, HR (m)",
      }
    }],
    yAxes:[{type:'logarithmic',
      ticks: {
        min:0.01,
        max:1000,
      },
      scaleLabel: {
        display: true,
        labelString:"Modified Stability Number, N'",
      }
    }]
  },
  legend:{
    labels: {
      boxWidth:20,
      fontSize:9
    }
  }
  };  
  public scatterChartLegend = true;
  
  constructor(private overlay: Overlay,private dialog: MatDialog, private service: ForAllService,private sService:stabilityService,private hrService:hrvalues,private abcService:abcfactor,private qservice:qvaluefactor) { }
  
  public barChartDataQ: ChartDataSets[] = [
    { data: [], label:"Q'" }
  ];

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

  public ChartColors: Color[] = [
    { backgroundColor: '#148F77' },
    { backgroundColor: '#76D7C4' },
  ]



  public refinedChartData: ChartDataSets[] = [
    { type: 'line',
    data: [{x:0.5, y:0.0766},{x:1, y:1001},{x:34, y:1023.5}], 
    fill: 1, 
    pointStyle:'line',
    label: "Stable zone"
    },
    { type: 'line',
      data: [{x:1, y:0.0766},{x:34, y:1023.5}, {x:56, y:1003.132}], 
      fill: 2, 
      pointStyle:'line',
      label: "Unstable zone"
      },
      { type: 'line',
      data: [{x:1, y:0.02},{x:56, y:1003.132},{x:100, y:1002}],
      fill: true, 
      pointStyle:'line',
      label: "Failure zone"
      },
      { type: 'scatter',
      data: [],
      label:'stope surfaces',
      fill: true, 
      pointRadius:3,
      }
  ];
  public stabChartColors: Color[] = [
    { backgroundColor: 'rgba(34,101, 86,0.5)', borderColor: 'none',borderWidth:0},
    { backgroundColor: 'rgba(0,0,0,0.5)', borderColor: 'none', borderWidth:0},
    { backgroundColor: 'rgba(255,0,0,0.45)', borderColor: 'none', borderWidth:0},
    { backgroundColor: '#000000', borderColor: 'none', borderWidth:0},
  ];
  openOptions() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width ='26%';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
    this.dialog.open(CompleteComponent,dialogConfig )}
  
  ngOnInit(): void {
            //console.log("uhuhu    ---000--->", (<HTMLInputElement>document.getElementById("stability").childNodes[1]));

            // (<HTMLInputElement>document.getElementById("crown").childNodes[1]).innerText="123"
            if(this.qservice.getStope().includes("Crown")){

    this.sService.postReq(this.hrService.getcrown(),this.abcService.getCrownN()).subscribe(data1=>{
      console.log("the Big D",data1["results"]);
      const result=data1["results"][0]
      const rr=(result[0]*100).toFixed(2)

      console.log("-----<>",(result[0]*100).toFixed(2));

      //  console.log("uhuhu    ---000--->", (<HTMLInputElement>document.getElementById("crownstable")));
      // (<HTMLInputElement>document.getElementById("crownstable")).innerText="123";
      (<HTMLInputElement>document.getElementById("crown").childNodes[1]).innerText=((result[0]*100).toFixed(0) )+"%"as unknown as string;
      (<HTMLInputElement>document.getElementById("crown").childNodes[2]).innerText=((result[1]*100).toFixed(0))+"%" as unknown as string;;
      (<HTMLInputElement>document.getElementById("crown").childNodes[3]).innerText=((result[2]*100).toFixed(0))+"%" as unknown as string;;

    //  (<HTMLInputElement>document.getElementById("crownunstable")).innerText="Unstable\n"+result[1].toFixed(2);
     // (<HTMLInputElement>document.getElementById("crownfailure")).innerText="Failuer\n"+result[2].toFixed(2);

      //console.log((<HTMLInputElement>document.getElementById("crownstable")))
    }
    )
  }


    // //hangwall stablr.unstable.failuer
    if(this.qservice.getStope().includes("HW")){

    this.sService.postReq(this.hrService.gethang(),this.abcService.getHangN()).subscribe(data1=>{
      console.log("the Big D",data1["results"]);
      const result=data1["results"][0]
      console.log("-----<>",result[0].toFixed(2));


      (<HTMLInputElement>document.getElementById("hang").childNodes[1]).innerText=((result[0]*100).toFixed(0) )+"%"as unknown as string;
      (<HTMLInputElement>document.getElementById("hang").childNodes[2]).innerText=(((result[1]*100).toFixed(0)))+"%" as unknown as string;
      (<HTMLInputElement>document.getElementById("hang").childNodes[3]).innerText=(((result[2]*100).toFixed(0)))+"%" as unknown as string;

    
      // console.log((<HTMLInputElement>document.getElementById("crownstable")))
    }
    )
  }
    // //
    //  //foorwall stablr.unstable.failuer
    if(this.qservice.getStope().includes("FW")){

     this.sService.postReq(this.hrService.getfoot(),this.abcService.getFootN()).subscribe(data1=>{
      console.log("the Big D",data1["results"]);
      const result=data1["results"][0]
      console.log("-----<>",result[0].toFixed(2));

      (<HTMLInputElement>document.getElementById("foot").childNodes[1]).innerText=((result[0]*100).toFixed(0) )+"%"as unknown as string;
      (<HTMLInputElement>document.getElementById("foot").childNodes[2]).innerText=((result[1]*100).toFixed(0))+"%" as unknown as string;;
      (<HTMLInputElement>document.getElementById("foot").childNodes[3]).innerText=((result[2]*100).toFixed(0))+"%" as unknown as string;;

    
       
    
      // console.log((<HTMLInputElement>document.getElementById("crownstable")))
    }
    )
  }
  if(this.qservice.getStope().includes("SW1")){

       //sidewall1 stablr.unstable.failuer
       this.sService.postReq(this.hrService.getside(),this.abcService.getSide1N()).subscribe(data1=>{
        console.log("the Big D",data1["results"]);
        const result=data1["results"][0]
        console.log("-----<>",result[0].toFixed(2));
  
        (<HTMLInputElement>document.getElementById("sw1").childNodes[1]).innerText=((result[0]*100).toFixed(0) )+"%"as unknown as string;
        (<HTMLInputElement>document.getElementById("sw1").childNodes[2]).innerText=((result[1]*100).toFixed(0))+"%" as unknown as string;;
        (<HTMLInputElement>document.getElementById("sw1").childNodes[3]).innerText=((result[2]*100).toFixed(0))+"%" as unknown as string;;
  
      
      
        // console.log((<HTMLInputElement>document.getElementById("crownstable")))
      }
      )
    }
    //      //sidewall2 stablr.unstable.failuer
    if(this.qservice.getStope().includes("SW2")){

    this.sService.postReq(this.hrService.getside(),this.abcService.getSide2N()).subscribe(data1=>{
      console.log("the Big D",data1["results"]);
      const result=data1["results"][0]
      console.log("-----<>",result[0].toFixed(2));


      (<HTMLInputElement>document.getElementById("sw2").childNodes[1]).innerText=((result[0]*100).toFixed(0) )+"%"as unknown as string;
      (<HTMLInputElement>document.getElementById("sw2").childNodes[2]).innerText=((result[1]*100).toFixed(0))+"%" as unknown as string;;
      (<HTMLInputElement>document.getElementById("sw2").childNodes[3]).innerText=((result[2]*100).toFixed(0))+"%" as unknown as string;;

    
      // console.log((<HTMLInputElement>document.getElementById("crownstable")))
    }
    )

  }







    this.service.currentVolume.subscribe(volume => this.volume = volume);
    this.service.currentHrCrown.subscribe(hrCrown => this.hrCrown = hrCrown);
    this.service.currentHrFoot.subscribe(hrFoot => this.hrFoot = hrFoot);
    this.service.currentHrHang.subscribe(hrHang => this.hrHang = hrHang);
    this.service.currentHrSide.subscribe(hrSide=> this.hrSide = hrSide);
    this.service.currentCrownP.subscribe(crownP => this.crownP = crownP);
    this.service.currentCrownA.subscribe(crownA => this.crownA = crownA);
    this.service.currentFootP.subscribe(footP => this.footP = footP);
    this.service.currentFootA.subscribe(footA => this.footA = footA);
    this.service.currentHangP.subscribe(hangP => this.hangP = hangP);
    this.service.currentHangA.subscribe(hangA => this.hangA = hangA);
    this.service.currentSideP.subscribe(sideP=> this.sideP = sideP);
    this.service.currentSideA.subscribe(sideA=> this.sideA = sideA);

    this.service.currentQRes_crown.subscribe(qRes_crown => this.qRes_crown = qRes_crown);
    this.service.currentQRes_hw.subscribe(qRes_hw => this.qRes_hw = qRes_hw);
    this.service.currentQRes_fw.subscribe(qRes_fw => this.qRes_fw = qRes_fw);
    this.service.currentQRes_sw1.subscribe(qRes_sw1 => this.qRes_sw1 = qRes_sw1);
    this.service.currentQRes_sw2.subscribe(qRes_sw2 => this.qRes_sw2 = qRes_sw2);

    this.service.currentCrownIndStress.subscribe(crownIndStress => this.crownIndStress = crownIndStress);
    this.service.currentSideIndStress.subscribe(sideIndStress => this.sideIndStress = sideIndStress);
    this.service.currentFwIndStress.subscribe(fwIndStress => this.fwIndStress = fwIndStress);
    this.service.currentHwIndStress.subscribe(hwIndStress => this.hwIndStress = hwIndStress);

    this.service.currentVerticalstress.subscribe(Verticalstress => this.Verticalstress = Verticalstress);
    this.service.currentHorizontalstress.subscribe(Horizontalstress => this.Horizontalstress = Horizontalstress);
    
    this.service.currentTimeFactor_crown.subscribe(timeFactor_crown => this.timeFactor_crown = timeFactor_crown);
    this.service.currentTimeFactor_hw.subscribe(timeFactor_hw => this.timeFactor_hw = timeFactor_hw);
    this.service.currentTimeFactor_fw.subscribe(timeFactor_fw => this.timeFactor_fw = timeFactor_fw);
    this.service.currentTimeFactor_sw1.subscribe(timeFactor_sw1 => this.timeFactor_sw1 = timeFactor_sw1);
    this.service.currentTimeFactor_sw2.subscribe(timeFactor_sw2 => this.timeFactor_sw2 = timeFactor_sw2);

    this.service.currentFaultFactor_crown.subscribe(faultFactor_crown => this.faultFactor_crown = faultFactor_crown);
    this.service.currentFaultFactor_hw.subscribe(faultFactor_hw => this.faultFactor_hw = faultFactor_hw);
    this.service.currentFaultFactor_fw.subscribe(faultFactor_fw => this.faultFactor_fw = faultFactor_fw);
    this.service.currentFaultFactor_sw1.subscribe(faultFactor_sw1 => this.faultFactor_sw1 = faultFactor_sw1);
    this.service.currentFaultFactor_sw2.subscribe(faultFactor_sw2 => this.faultFactor_sw2 = faultFactor_sw2);

    this.service.currentJn.subscribe(Jn => this.Jn = Jn);
    this.service.currentJr.subscribe(Jr => this.Jr = Jr);
    this.service.currentJa.subscribe(Ja => this.Ja = Ja);

    this.service.currentQQuality_crown.subscribe(qQuality_crown => this.qQuality_crown = qQuality_crown);
    this.service.currentQQuality_hw.subscribe(qQuality_hw => this.qQuality_hw = qQuality_hw);
    this.service.currentQQuality_fw.subscribe(qQuality_fw => this.qQuality_fw = qQuality_fw);
    this.service.currentQQuality_sw1.subscribe(qQuality_sw1 => this.qQuality_sw1 = qQuality_sw1);
    this.service.currentQQuality_sw2.subscribe(qQuality_sw2 => this.qQuality_sw2 = qQuality_sw2);

    this.service.currentCrown_Afactor_original.subscribe(crown_Afactor_original => this.crown_Afactor_original = crown_Afactor_original);
    this.service.currentCrown_Afactor_modified.subscribe(crown_Afactor_modified => this.crown_Afactor_modified = crown_Afactor_modified);
    this.service.currentCrown_Bfactor_original.subscribe(crown_Bfactor_original => this.crown_Bfactor_original = crown_Bfactor_original);
    this.service.currentCrown_Bfactor_modified.subscribe(crown_Bfactor_modified => this.crown_Bfactor_modified = crown_Bfactor_modified);
    this.service.currentCrown_Cfactor_original.subscribe(crown_Cfactor_original => this.crown_Cfactor_original = crown_Cfactor_original);
    this.service.currentCrown_Cfactor_modified.subscribe(crown_Cfactor_modified => this.crown_Cfactor_modified = crown_Cfactor_modified);
    
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
    
    this.service.currentFw_Cfactor_original.subscribe(fw_Cfactor_original => this.fw_Cfactor_original = fw_Cfactor_original);
    this.service.currentFw_Cfactor_modified.subscribe(fw_Cfactor_modified => this.fw_Cfactor_modified = fw_Cfactor_modified);
    this.service.currentFw_Afactor_original.subscribe(fw_Afactor_original => this.fw_Afactor_original = fw_Afactor_original);
    this.service.currentFw_Afactor_modified.subscribe(fw_Afactor_modified => this.fw_Afactor_modified = fw_Afactor_modified);
    this.service.currentFw_Bfactor_original.subscribe(fw_Bfactor_original => this.fw_Bfactor_original = fw_Bfactor_original);
    this.service.currentFw_Bfactor_modified.subscribe(fw_Bfactor_modified => this.fw_Bfactor_modified = fw_Bfactor_modified);
    
    this.service.currentHw_Afactor_original.subscribe(hw_Afactor_original => this.hw_Afactor_original = hw_Afactor_original);
    this.service.currentHw_Afactor_modified.subscribe(hw_Afactor_modified => this.hw_Afactor_modified = hw_Afactor_modified);
    this.service.currentHw_Bfactor_original.subscribe(hw_Bfactor_original => this.hw_Bfactor_original = hw_Bfactor_original);
    this.service.currentHw_Bfactor_modified.subscribe(hw_Bfactor_modified => this.hw_Bfactor_modified = hw_Bfactor_modified);
    this.service.currentHw_Cfactor_original.subscribe(hw_Cfactor_original => this.hw_Cfactor_original = hw_Cfactor_original);
    this.service.currentHw_Cfactor_modified.subscribe(hw_Cfactor_modified => this.hw_Cfactor_modified = hw_Cfactor_modified);
    
    this.service.currentCrownN.subscribe(crownN=> this.crownN = crownN);
    this.service.currentSide1N.subscribe(side1N=> this.side1N = side1N);
    this.service.currentSide2N.subscribe(side2N=> this.side2N = side2N);
    this.service.currentHwN.subscribe(hwN=> this.hwN = hwN);
    this.service.currentFwN.subscribe(fwN=> this.fwN = fwN);
    this.service.currentCrownN_mod.subscribe(crownN_mod=> this.crownN_mod = crownN_mod);
    this.service.currentSide1N_mod.subscribe(side1N_mod=> this.side1N_mod = side1N_mod);
    this.service.currentSide2N_mod.subscribe(side2N_mod=> this.side2N_mod = side2N_mod);
    this.service.currentHwN_mod.subscribe(hwN_mod=> this.hwN_mod = hwN_mod);
    this.service.currentFwN_mod.subscribe(fwN_mod=> this.fwN_mod = fwN_mod);
    
    const data = [{x:this.hrCrown, y: this.crownN_mod}, {x:this.hrSide, y:this.side1N_mod},
      {x:this.hrSide, y:this.side2N_mod},{x:this.hrFoot, y:this.fwN_mod}, 
      {x:this.hrHang, y:this.hwN_mod}];
    this.refinedChartData[3].data = data;

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
    
    const data10 = [this.qRes_crown, this.qRes_hw, this.qRes_fw, this.qRes_sw1, this.qRes_sw2];

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

    this.barChartDataQ[0].data = data10;
  }
}
