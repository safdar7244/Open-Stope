import { Component, OnInit, Inject,AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForAllService } from '../services/for-all.service';
import { ChartOptions, ChartType, ChartDataSets, Chart } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import {PredictionService} from "../factors-res/predictesult.service";
import {Predict} from "../models/predict.model";
import {Subscription} from "rxjs";
import { abcfactor } from '../services/abcfactor.service'
import {stabilityService} from '../services/stability.service'
import {hrvalues} from '../services/hrvalues.service'
import {qvaluefactor} from '../services/qvalue-factor.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from "@angular/material/dialog";
import { Overlay} from '@angular/cdk/overlay';


import {allResetValues} from '../services/All-Reset-Form.service'
export interface DialogData {
  coreL: number;
  totalL: number;
}

@Component({
  selector: 'app-stability',
  templateUrl: './stability.component.html',
  styleUrls: ['./stability.component.scss']
})

export class StabilityComponent implements OnInit , AfterViewInit {
  prediction: Predict = this.predictionService.getPrediction();
  subscription: Subscription;

  public hrCrown: number;
  public hrFoot: number;
  public hrHang: number;
  public hrSide: number;

  public crownN: number;
  public side1N: number;
  public side2N: number;
  public hwN: number;
  public fwN: number;
public nnData: ChartDataSets[]
  public crownN_mod: number;
  public side1N_mod: number;
  public side2N_mod: number;
  public hwN_mod: number;
  public fwN_mod: number;

  public yAxis: Object;


  public scatterChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'The Refined Stability Graph',
      padding:7,
  },
    scales: {
      gridLines: {display:true,
      drawBorder:true,
      drawTicks:true,
      color:'#000000'},
      xAxes:[{type:'logarithmic',
      ticks: {
        fontSize:10,
        padding:0,
        min:1,
        max:100,
        callback: function (value, index, values) {
          return Number(value.toString());
        }
      },
      scaleLabel: {
        display: true,
        labelString:"Hydraulic Radius, HR (m)",
        padding:0,
        fontSize:12
      }
    }],
    yAxes:[{type:'logarithmic',
      ticks: {
        fontSize:10,
        padding:0,
        min:0.01,
        max:1000,
      },
      scaleLabel: {
        display: true,
        labelString:"Modified Stability Number, N'",
        padding:0,
        fontSize:12
      }
    }]
  },
  legend:{
    position:'right',
    labels: {
      boxWidth:20,
      fontSize:10
    }
  }
  };
  public ChartLegend = true;

  public extendedChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'The Extended Stability Graph after Trueman&Mawdesley (2003)',
      padding:7,
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
        fontSize:12,
        padding:0
      }
    }],
    yAxes:[{type:'logarithmic',
      ticks: {
        min:0.001,
        max:1000,
      },
      scaleLabel: {
        display: true,
        labelString:"Original Stability Number, N",
        fontSize:12,
        padding:0
      },      
  
    }]
  },
  legend:{
    position:'right',
    labels: {
      boxWidth:20,
      fontSize:10
    }
  }
};

public modifiedChartOptions: ChartOptions = {
  responsive: true,
  title: {
    display: true,
    text: "The Potvin' Stability Graph",
    padding:7,
},
maintainAspectRatio: false,
scales: {
    gridLines: {display:true,
    drawBorder:true,
    drawTicks:true,
    color:'#000000'},
    xAxes:[{type:'linear',
    ticks: {
      min:0,
      max:25,
      stepSize:5,
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
      min:0.1,
      max:1000,
    },
    scaleLabel: {
      display: true,
      labelString:"Modified Stability Number, N'",
    }
  }]
},
legend:{
  position:'right',
  labels: {
    boxWidth:20,
    fontSize:10
  }
}
}; 
public sensitivityChartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes:[{ 
    scaleLabel: {
      display: true,
      labelString:"Hydraulic Radius, HR (m)",
      fontSize:11,
      padding:0
    }
  }],
  yAxes:[{
    scaleLabel: {
      display: true,
      labelString:"Probabilistic Stability Prediction (%)",
      fontSize:10, 
      padding:0
    }
  }]
  }
};
public dataSetCrown(data1){

    console.log("CHECK:crown before: ",this.crownChartData);  
  // console.log("defff: ",this.crownChartData);
  // console.log("defff: ",this.crownChartData[0].data.length);
  // this.crownChartData[0].data.length=0;
  // this.crownChartData[1].data.length=0;

  // this.crownChartData[2].data.length=0;

  // console.log("canvas", (<HTMLInputElement>document.getElementById("sms")['datasets']))
  // for(let i=0;i<15;i++){
  //   this.crownChartData[0].data.push(i);
  // }
  // for(let i=0;i<15;i++){
  //   this.crownChartData[1].data.push(i);
  // }
  // for(let i=0;i<15;i++){
  //   this.crownChartData[2].data.push(i);
  // }
//  console.log("canvas", (<HTMLInputElement>document.getElementById("sms")['ng-reflect-datasets']))
  // this.crownChartData[0].data.length=0;
  // this.crownChartData[1].data.length=0;this.crownChartData[2].data.length=0;
  // // this.crownChartData.length=0;
  // this.crownChartData[0].data.push(data1["dec"]);
  // this.crownChartData[0].data.push(data1["inc"]);
  // this.crownChartData[0].data.push(data1["results"]);

  // console.log("CHECK:: ",this.crownChartData)

// this.crownChartData[0].data[0]=233
// console.log("CHECK :: ",this.crownChartData)
// console.log("dec array :: ",data1["dec"])
// 
// first 7 elements (dec elements) for charData of stable
for(let i=6, j=0;i>=0;i--,j++){
  console.log("data1[dec][i][0] : ",(data1["dec"][i][0][0]*100).toFixed(2)as unknown as number)
  this.crownChartData[0].data[j]=(data1["dec"][i][0][0]*100).toFixed(2)as unknown as number;
}

this.crownChartData[0].data[7]=(data1["results"][0][0]*100).toFixed(2)as unknown as number;

//for inc stable
for(let i=0,j=8;i<7;i++,j++){
  
  console.log("data1[dec][i][0] : ",(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number)
  this.crownChartData[0].data[j]=(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number;
}
// this.crownChartData[0].data[i]=(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number;



// first 7 elements (dec elements) for charData of unstable

for(let i=6,j=0;i>=0;i--,j++){
  console.log("data1[dec][i][0] : ",(data1["dec"][i][0][1]*100).toFixed(2)as unknown as number)
  this.crownChartData[1].data[j]=(data1["dec"][i][0][1]*100).toFixed(2)as unknown as number;
}
this.crownChartData[1].data[7]=(data1["results"][0][1]*100).toFixed(2)as unknown as number;

//for inc unstable
for(let i=0,j=8;i<7;i++,j++){
  console.log("data1[dec][i][1] : ",(data1["inc"][i][0][1]*100).toFixed(2)as unknown as number)
  this.crownChartData[1].data[j]=(data1["inc"][i][0][1]*100).toFixed(2)as unknown as number;
}

//first 7 elements (dec elements) for charData of failure

for(let i=6, j=0;i>=0;i--,j++){
  console.log("data1[dec][i][2] : ",(data1["dec"][i][0][2]*100).toFixed(2)as unknown as number)
  this.crownChartData[2].data[j]=(data1["dec"][i][0][2]*100).toFixed(2)as unknown as number;
}
this.crownChartData[2].data[7]=(data1["results"][0][2]*100).toFixed(2)as unknown as number;

//for inc failure
for(let i=0,j=8;i<7;i++,j++){
  console.log("data1[dec][i][2] : ",(data1["inc"][i][0][2]*100).toFixed(2)as unknown as number)
  this.crownChartData[2].data[j]=(data1["inc"][i][0][2]*100).toFixed(2)as unknown as number;
}

 console.log("CHECK again:crown: ",this.crownChartData)

}

public dataSetHang(data1){
  // first 7 elements (dec elements) for charData of stable
for(let i=6, j=0;i>=0;i--,j++){
  console.log("data1[dec][i][0] : ",(data1["dec"][i][0][0]*100).toFixed(2)as unknown as number)
  this.hwChartData[0].data[j]=(data1["dec"][i][0][0]*100).toFixed(2)as unknown as number;
}

this.hwChartData[0].data[7]=(data1["results"][0][0]*100).toFixed(2)as unknown as number;

//for inc stable
for(let i=0,j=8;i<7;i++,j++){
  
  console.log("data1[dec][i][0] : ",(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number)
  this.hwChartData[0].data[j]=(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number;
}
// this.hwChartData[0].data[i]=(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number;



// first 7 elements (dec elements) for charData of unstable

for(let i=6,j=0;i>=0;i--,j++){
  console.log("data1[dec][i][0] : ",(data1["dec"][i][0][1]*100).toFixed(2)as unknown as number)
  this.hwChartData[1].data[j]=(data1["dec"][i][0][1]*100).toFixed(2)as unknown as number;
}
this.hwChartData[1].data[7]=(data1["results"][0][1]*100).toFixed(2)as unknown as number;

//for inc unstable
for(let i=0,j=8;i<7;i++,j++){
  console.log("data1[dec][i][1] : ",(data1["inc"][i][0][1]*100).toFixed(2)as unknown as number)
  this.hwChartData[1].data[j]=(data1["inc"][i][0][1]*100).toFixed(2)as unknown as number;
}

//first 7 elements (dec elements) for charData of failure

for(let i=6, j=0;i>=0;i--,j++){
  console.log("data1[dec][i][2] : ",(data1["dec"][i][0][2]*100).toFixed(2)as unknown as number)
  this.hwChartData[2].data[j]=(data1["dec"][i][0][2]*100).toFixed(2)as unknown as number;
}
this.hwChartData[2].data[7]=(data1["results"][0][2]*100).toFixed(2)as unknown as number;

//for inc failure
for(let i=0,j=8;i<7;i++,j++){
  console.log("data1[dec][i][2] : ",(data1["inc"][i][0][2]*100).toFixed(2)as unknown as number)
  this.hwChartData[2].data[j]=(data1["inc"][i][0][2]*100).toFixed(2)as unknown as number;
}
  // console.log("CHECK:: ",this.crownChartData)
  // this.hwChartData.length=0;
  // for(let i=0;i<15;i++){
  //   this.hwChartData[0].data.push(i);
  // }
  // for(let i=0;i<15;i++){
  //   this.hwChartData[1].data.push(i);
  // }
  // for(let i=0;i<15;i++){
  //   this.hwChartData[2].data.push(i);
  // }

  // // this.crownChartData[0].data[0]=233
  // console.log("CHECK :: ",this.hwChartData)
  // console.log("dec array :: ",data1["dec"])
  
  // //first 7 elements (dec elements) for charData of stable
  // for(let i=0;i<7;i++){
  //   console.log("data1[dec][i][0] : ",(data1["dec"][i][0][0]*100).toFixed(2)as unknown as number)
  //   this.hwChartData[0].data[i]=(data1["dec"][i][0][0]*100).toFixed(2)as unknown as number;
  // }
  // //for inc stable
  // for(let i=0,j=7;i<7;i++,j++){
    
  //   console.log("data1[dec][i][0] : ",(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number)
  //   this.hwChartData[0].data[j]=(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number;
  // }
  // // this.hwChartData[0].data[i]=(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number;
  // this.hwChartData[0].data[14]=(data1["results"][0][0]*100).toFixed(2)as unknown as number;
  
  
  
  // //first 7 elements (dec elements) for charData of unstable
  
  // for(let i=0;i<7;i++){
  //   console.log("data1[dec][i][0] : ",(data1["dec"][i][0][1]*100).toFixed(2)as unknown as number)
  //   this.hwChartData[1].data[i]=(data1["dec"][i][0][1]*100).toFixed(2)as unknown as number;
  // }
  // //for inc unstable
  // for(let i=0,j=7;i<7;i++,j++){
  //   console.log("data1[dec][i][1] : ",(data1["inc"][i][0][1]*100).toFixed(2)as unknown as number)
  //   this.hwChartData[1].data[j]=(data1["inc"][i][0][1]*100).toFixed(2)as unknown as number;
  // }
  // this.hwChartData[1].data[14]=(data1["results"][0][1]*100).toFixed(2)as unknown as number;
  
  // //first 7 elements (dec elements) for charData of failure
  
  // for(let i=0;i<7;i++){
  //   console.log("data1[dec][i][2] : ",(data1["dec"][i][0][2]*100).toFixed(2)as unknown as number)
  //   this.hwChartData[2].data[i]=(data1["dec"][i][0][2]*100).toFixed(2)as unknown as number;
  // }
  // //for inc failure
  // for(let i=0,j=7;i<7;i++,j++){
  //   console.log("data1[dec][i][2] : ",(data1["inc"][i][0][2]*100).toFixed(2)as unknown as number)
  //   this.hwChartData[2].data[j]=(data1["inc"][i][0][2]*100).toFixed(2)as unknown as number;
  // }
  // this.hwChartData[2].data[14]=(data1["results"][0][2]*100).toFixed(2)as unknown as number;
  
   console.log("CHECK again:: ",this.hwChartData)
  
  }

  public dataSetFoot(data1){
    // console.log("CHECK:: ",this.crownChartData)
    for(let i=6, j=0;i>=0;i--,j++){
      console.log("data1[dec][i][0] : ",(data1["dec"][i][0][0]*100).toFixed(2)as unknown as number)
      this.fwChartData[0].data[j]=(data1["dec"][i][0][0]*100).toFixed(2)as unknown as number;
    }
    
    this.fwChartData[0].data[7]=(data1["results"][0][0]*100).toFixed(2)as unknown as number;
    
    //for inc stable
    for(let i=0,j=8;i<7;i++,j++){
      
      console.log("data1[dec][i][0] : ",(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number)
      this.fwChartData[0].data[j]=(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number;
    }
    // this.fwChartData[0].data[i]=(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number;
    
    
    
    // first 7 elements (dec elements) for charData of unstable
    
    for(let i=6,j=0;i>=0;i--,j++){
      console.log("data1[dec][i][0] : ",(data1["dec"][i][0][1]*100).toFixed(2)as unknown as number)
      this.fwChartData[1].data[j]=(data1["dec"][i][0][1]*100).toFixed(2)as unknown as number;
    }
    this.fwChartData[1].data[7]=(data1["results"][0][1]*100).toFixed(2)as unknown as number;
    
    //for inc unstable
    for(let i=0,j=8;i<7;i++,j++){
      console.log("data1[dec][i][1] : ",(data1["inc"][i][0][1]*100).toFixed(2)as unknown as number)
      this.fwChartData[1].data[j]=(data1["inc"][i][0][1]*100).toFixed(2)as unknown as number;
    }
    
    //first 7 elements (dec elements) for charData of failure
    
    for(let i=6, j=0;i>=0;i--,j++){
      console.log("data1[dec][i][2] : ",(data1["dec"][i][0][2]*100).toFixed(2)as unknown as number)
      this.fwChartData[2].data[j]=(data1["dec"][i][0][2]*100).toFixed(2)as unknown as number;
    }
    this.fwChartData[2].data[7]=(data1["results"][0][2]*100).toFixed(2)as unknown as number;
    
    //for inc failure
    for(let i=0,j=8;i<7;i++,j++){
      console.log("data1[dec][i][2] : ",(data1["inc"][i][0][2]*100).toFixed(2)as unknown as number)
      this.fwChartData[2].data[j]=(data1["inc"][i][0][2]*100).toFixed(2)as unknown as number;
    }
    // this.fwChartData.length=0;
    // this.fwChartData.push(data1["dec"]);
    // this.fwChartData.push(data1["inc"]);
    // this.fwChartData.push(data1["results"]);
    // this.crownChartData[0].data[0]=233
    // console.log("CHECK :: ",this.fwChartData)
    // console.log("dec array :: ",data1["dec"])
    
    // //first 7 elements (dec elements) for charData of stable
    // for(let i=0;i<7;i++){
    //   console.log("data1[dec][i][0] : ",(data1["dec"][i][0][0]*100).toFixed(2)as unknown as number)
    //   this.fwChartData[0].data[i]=(data1["dec"][i][0][0]*100).toFixed(2)as unknown as number;
    // }
    // //for inc stable
    // for(let i=0,j=7;i<7;i++,j++){
      
    //   console.log("data1[dec][i][0] : ",(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number)
    //   this.fwChartData[0].data[j]=(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number;
    // }
    // // this.fwChartData[0].data[i]=(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number;
    // this.fwChartData[0].data[14]=(data1["results"][0][0]*100).toFixed(2)as unknown as number;
    
    
    
    // //first 7 elements (dec elements) for charData of unstable
    
    // for(let i=0;i<7;i++){
    //   console.log("data1[dec][i][0] : ",(data1["dec"][i][0][1]*100).toFixed(2)as unknown as number)
    //   this.fwChartData[1].data[i]=(data1["dec"][i][0][1]*100).toFixed(2)as unknown as number;
    // }
    // //for inc unstable
    // for(let i=0,j=7;i<7;i++,j++){
    //   console.log("data1[dec][i][1] : ",(data1["inc"][i][0][1]*100).toFixed(2)as unknown as number)
    //   this.fwChartData[1].data[j]=(data1["inc"][i][0][1]*100).toFixed(2)as unknown as number;
    // }
    // this.fwChartData[1].data[14]=(data1["results"][0][1]*100).toFixed(2)as unknown as number;
    
    // //first 7 elements (dec elements) for charData of failure
    
    // for(let i=0;i<7;i++){
    //   console.log("data1[dec][i][2] : ",(data1["dec"][i][0][2]*100).toFixed(2)as unknown as number)
    //   this.fwChartData[2].data[i]=(data1["dec"][i][0][2]*100).toFixed(2)as unknown as number;
    // }
    // //for inc failure
    // for(let i=0,j=7;i<7;i++,j++){
    //   console.log("data1[dec][i][2] : ",(data1["inc"][i][0][2]*100).toFixed(2)as unknown as number)
    //   this.fwChartData[2].data[j]=(data1["inc"][i][0][2]*100).toFixed(2)as unknown as number;
    // }
    // this.fwChartData[2].data[14]=(data1["results"][0][2]*100).toFixed(2)as unknown as number;
    
     console.log("CHECK again:: ",this.fwChartData)
    
    } 
public dataSetSide2(data1){
      // console.log("CHECK:: ",this.crownChartData)
      
      // this.crownChartData[0].data[0]=233
      for(let i=6, j=0;i>=0;i--,j++){
        console.log("data1[dec][i][0] : ",(data1["dec"][i][0][0]*100).toFixed(2)as unknown as number)
        this.side2ChartData[0].data[j]=(data1["dec"][i][0][0]*100).toFixed(2)as unknown as number;
      }
      
      this.side2ChartData[0].data[7]=(data1["results"][0][0]*100).toFixed(2)as unknown as number;
      
      //for inc stable
      for(let i=0,j=8;i<7;i++,j++){
        
        console.log("data1[dec][i][0] : ",(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number)
        this.side2ChartData[0].data[j]=(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number;
      }
      // this.side2ChartData[0].data[i]=(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number;
      
      
      
      // first 7 elements (dec elements) for charData of unstable
      
      for(let i=6,j=0;i>=0;i--,j++){
        console.log("data1[dec][i][0] : ",(data1["dec"][i][0][1]*100).toFixed(2)as unknown as number)
        this.side2ChartData[1].data[j]=(data1["dec"][i][0][1]*100).toFixed(2)as unknown as number;
      }
      this.side2ChartData[1].data[7]=(data1["results"][0][1]*100).toFixed(2)as unknown as number;
      
      //for inc unstable
      for(let i=0,j=8;i<7;i++,j++){
        console.log("data1[dec][i][1] : ",(data1["inc"][i][0][1]*100).toFixed(2)as unknown as number)
        this.side2ChartData[1].data[j]=(data1["inc"][i][0][1]*100).toFixed(2)as unknown as number;
      }
      
      //first 7 elements (dec elements) for charData of failure
      
      for(let i=6, j=0;i>=0;i--,j++){
        console.log("data1[dec][i][2] : ",(data1["dec"][i][0][2]*100).toFixed(2)as unknown as number)
        this.side2ChartData[2].data[j]=(data1["dec"][i][0][2]*100).toFixed(2)as unknown as number;
      }
      this.side2ChartData[2].data[7]=(data1["results"][0][2]*100).toFixed(2)as unknown as number;
      
      //for inc failure
      for(let i=0,j=8;i<7;i++,j++){
        console.log("data1[dec][i][2] : ",(data1["inc"][i][0][2]*100).toFixed(2)as unknown as number)
        this.side2ChartData[2].data[j]=(data1["inc"][i][0][2]*100).toFixed(2)as unknown as number;
      }
       console.log("CHECK again:: ",this.side2ChartData)
      
      } 
public dataSetSide1(data1){
        // console.log("CHECK:: ",this.crownChartData)
        
        // this.crownChartData[0].data[0]=233
        for(let i=6, j=0;i>=0;i--,j++){
          console.log("data1[dec][i][0] : ",(data1["dec"][i][0][0]*100).toFixed(2)as unknown as number)
          this.side1ChartData[0].data[j]=(data1["dec"][i][0][0]*100).toFixed(2)as unknown as number;
        }
        
        this.side1ChartData[0].data[7]=(data1["results"][0][0]*100).toFixed(2)as unknown as number;
        
        //for inc stable
        for(let i=0,j=8;i<7;i++,j++){
          
          console.log("data1[dec][i][0] : ",(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number)
          this.side1ChartData[0].data[j]=(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number;
        }
        // this.side1ChartData[0].data[i]=(data1["inc"][i][0][0]*100).toFixed(2)as unknown as number;
        
        
        
        // first 7 elements (dec elements) for charData of unstable
        
        for(let i=6,j=0;i>=0;i--,j++){
          console.log("data1[dec][i][0] : ",(data1["dec"][i][0][1]*100).toFixed(2)as unknown as number)
          this.side1ChartData[1].data[j]=(data1["dec"][i][0][1]*100).toFixed(2)as unknown as number;
        }
        this.side1ChartData[1].data[7]=(data1["results"][0][1]*100).toFixed(2)as unknown as number;
        
        //for inc unstable
        for(let i=0,j=8;i<7;i++,j++){
          console.log("data1[dec][i][1] : ",(data1["inc"][i][0][1]*100).toFixed(2)as unknown as number)
          this.side1ChartData[1].data[j]=(data1["inc"][i][0][1]*100).toFixed(2)as unknown as number;
        }
        
        //first 7 elements (dec elements) for charData of failure
        
        for(let i=6, j=0;i>=0;i--,j++){
          console.log("data1[dec][i][2] : ",(data1["dec"][i][0][2]*100).toFixed(2)as unknown as number)
          this.side1ChartData[2].data[j]=(data1["dec"][i][0][2]*100).toFixed(2)as unknown as number;
        }
        this.side1ChartData[2].data[7]=(data1["results"][0][2]*100).toFixed(2)as unknown as number;
        
        //for inc failure
        for(let i=0,j=8;i<7;i++,j++){
          console.log("data1[dec][i][2] : ",(data1["inc"][i][0][2]*100).toFixed(2)as unknown as number)
          this.side1ChartData[2].data[j]=(data1["inc"][i][0][2]*100).toFixed(2)as unknown as number;
        }
         console.log("CHECK again:: ",this.side1ChartData)
        
        } 
public sensitivityChartType: ChartType = 'bar';
public crownChartLabels: Label[] = [(this.hrService.getcrown() as unknown as number -7 ) .toFixed(2) as unknown as string, (this.hrService.getcrown() as unknown as number-6).toFixed(2) as unknown as string,(this.hrService.getcrown() as unknown as number-5).toFixed(2) as unknown as string, (this.hrService.getcrown() as unknown as number-4).toFixed(2) as unknown as string, (this.hrService.getcrown() as unknown as number-3).toFixed(2) as unknown as string, (this.hrService.getcrown() as unknown as number-2).toFixed(2) as unknown as string, (this.hrService.getcrown() as unknown as number-1).toFixed(2) as unknown as string,(this.hrService.getcrown() as unknown as number).toFixed(2) as unknown as string, (this.hrService.getcrown() as unknown as number+1).toFixed(2) as unknown as string, (this.hrService.getcrown() as unknown as number+2).toFixed(2) as unknown as string,(this.hrService.getcrown() as unknown as number+3).toFixed(2) as unknown as string,(this.hrService.getcrown() as unknown as number+4).toFixed(2) as unknown as string,(this.hrService.getcrown() as unknown as number+5).toFixed(2) as unknown as string, (this.hrService.getcrown() as unknown as number+6).toFixed(2) as unknown as string,(this.hrService.getcrown() as unknown as number+7).toFixed(2) as unknown as string];
public hwChartLabels: Label[] =    [(this.hrService.gethang()  as unknown as number -7 ) .toFixed(2) as unknown as string, (this.hrService.gethang() as unknown as number-6).toFixed(2) as unknown as string,(this.hrService.gethang() as unknown as number-5).toFixed(2) as unknown as string, (this.hrService.gethang() as unknown as number-4).toFixed(2) as unknown as string, (this.hrService.gethang() as unknown as number-3).toFixed(2) as unknown as string, (this.hrService.gethang() as unknown as number-2).toFixed(2) as unknown as string, (this.hrService.gethang() as unknown as number-1).toFixed(2) as unknown as string,      (this.hrService.gethang() as unknown as number).toFixed(2) as unknown as string,(this.hrService.gethang() as unknown as number+1).toFixed(2) as unknown as string, (this.hrService.gethang() as unknown as number+2).toFixed(2) as unknown as string,(this.hrService.gethang() as unknown as number+3).toFixed(2) as unknown as string,(this.hrService.gethang() as unknown as number+4).toFixed(2) as unknown as string,(this.hrService.gethang() as unknown as number+5).toFixed(2) as unknown as string, (this.hrService.gethang() as unknown as number+6).toFixed(2) as unknown as string,(this.hrService.gethang() as unknown as number+7).toFixed(2) as unknown as string              ];
public fwChartLabels: Label[] =    [(this.hrService.getfoot()  as unknown as number -7 ) .toFixed(2) as unknown as string, (this.hrService.getfoot() as unknown as number-6).toFixed(2) as unknown as string,(this.hrService.getfoot() as unknown as number-5).toFixed(2) as unknown as string, (this.hrService.getfoot() as unknown as number-4).toFixed(2) as unknown as string, (this.hrService.getfoot() as unknown as number-3).toFixed(2) as unknown as string, (this.hrService.getfoot() as unknown as number-2).toFixed(2) as unknown as string, (this.hrService.getfoot() as unknown as number-1).toFixed(2) as unknown as string,      (this.hrService.getfoot() as unknown as number).toFixed(2) as unknown as string,(this.hrService.getfoot() as unknown as number+1).toFixed(2) as unknown as string, (this.hrService.getfoot() as unknown as number+2).toFixed(2) as unknown as string,(this.hrService.getfoot() as unknown as number+3).toFixed(2) as unknown as string,(this.hrService.getfoot() as unknown as number+4).toFixed(2) as unknown as string,(this.hrService.getfoot() as unknown as number+5).toFixed(2) as unknown as string, (this.hrService.getfoot() as unknown as number+6).toFixed(2) as unknown as string,(this.hrService.getfoot() as unknown as number+7).toFixed(2) as unknown as string              ];
public side1ChartLabels: Label[] = [(this.hrService.getside()  as unknown as number -7 ) .toFixed(2) as unknown as string, (this.hrService.getside() as unknown as number-6).toFixed(2) as unknown as string,(this.hrService.getside() as unknown as number-5).toFixed(2) as unknown as string, (this.hrService.getside() as unknown as number-4).toFixed(2) as unknown as string, (this.hrService.getside() as unknown as number-3).toFixed(2) as unknown as string, (this.hrService.getside() as unknown as number-2).toFixed(2) as unknown as string, (this.hrService.getside() as unknown as number-1).toFixed(2) as unknown as string,      (this.hrService.getside() as unknown as number).toFixed(2) as unknown as string,(this.hrService.getside() as unknown as number+1).toFixed(2) as unknown as string, (this.hrService.getside() as unknown as number+2).toFixed(2) as unknown as string,(this.hrService.getside() as unknown as number+3).toFixed(2) as unknown as string,(this.hrService.getside() as unknown as number+4).toFixed(2) as unknown as string,(this.hrService.getside() as unknown as number+5).toFixed(2) as unknown as string, (this.hrService.getside() as unknown as number+6).toFixed(2) as unknown as string,(this.hrService.getside() as unknown as number+7).toFixed(2) as unknown as string              ];
public side2ChartLabels: Label[] = [(this.hrService.getside()  as unknown as number -7 ) .toFixed(2) as unknown as string, (this.hrService.getside() as unknown as number-6).toFixed(2) as unknown as string,(this.hrService.getside() as unknown as number-5).toFixed(2) as unknown as string, (this.hrService.getside() as unknown as number-4).toFixed(2) as unknown as string, (this.hrService.getside() as unknown as number-3).toFixed(2) as unknown as string, (this.hrService.getside() as unknown as number-2).toFixed(2) as unknown as string, (this.hrService.getside() as unknown as number-1).toFixed(2) as unknown as string,      (this.hrService.getside() as unknown as number).toFixed(2) as unknown as string,(this.hrService.getside() as unknown as number+1).toFixed(2) as unknown as string, (this.hrService.getside() as unknown as number+2).toFixed(2) as unknown as string,(this.hrService.getside() as unknown as number+3).toFixed(2) as unknown as string,(this.hrService.getside() as unknown as number+4).toFixed(2) as unknown as string,(this.hrService.getside() as unknown as number+5).toFixed(2) as unknown as string, (this.hrService.getside() as unknown as number+6).toFixed(2) as unknown as string,(this.hrService.getside() as unknown as number+7).toFixed(2) as unknown as string              ];
public sensitivityChartLegend = true;

public crownChartData: ChartDataSets[] = [
  { data: [], label: 'stable', stack: 'a' },
  { data: [], label: 'unstable', stack: 'a' },
  { data: [], label: 'failure', stack: 'a' }
    ];
public hwChartData: ChartDataSets[] = [
  { data: [], label: 'stable', stack: 'a' },
  { data: [], label: 'unstable', stack: 'a' },
  { data: [], label: 'failure', stack: 'a' }
  ];
public fwChartData: ChartDataSets[] = [
  { data: [], label: 'stable', stack: 'a' },
  { data: [], label: 'unstable', stack: 'a' },
  { data: [], label: 'failure', stack: 'a' }
  ];
public side1ChartData: ChartDataSets[] = [
  { data: [], label: 'stable', stack: 'a' },
  { data: [], label: 'unstable', stack: 'a' },
  { data: [], label: 'failure', stack: 'a' }
  ];
public side2ChartData: ChartDataSets[] = [
  { data: [], label: 'stable', stack: 'a' },
  { data: [], label: 'unstable', stack: 'a' },
  { data: [], label: 'failure', stack: 'a' }
  ];

public sensitivityChartColors: Color[] = [
  {backgroundColor: 'rgba(34,101, 86,0.5)'},
  {backgroundColor:'rgba(0,0,0,0.5)'},
  {backgroundColor:'rgba(255,0,0,0.45)'}
];

  constructor(private router: Router, private route: ActivatedRoute, private overlay: Overlay, private service: ForAllService, 
    private predictionService: PredictionService, public dialog: MatDialog,private abcService:abcfactor,private sService:stabilityService,private hrService:hrvalues,private qservice:qvaluefactor) { }


  public refinedChartData: ChartDataSets[] = [
    { type: 'line',
    data: [{x:0.5, y:0.0766},{x:1, y:1001},{x:34, y:1023.5}],
    fill: 1,
    pointStyle:'line',
    label: "Stable zone"},
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

  public modifiedChartData: ChartDataSets[] = [
    { type: 'line',
    data: [{x:0,y:0.1},{x:0,y:1000},{x:25,y:1000},{x:25, y:600}, {x:24.7155, y:589.511},{x:19.7368, y:307.981}],
    fill: 1,
    pointStyle:'line',
    label: "Stable zone"
    },
    { type: 'line',
      data: [{x:1.35135, y:0.10463},{x:2.4182, y:0.9776},
        {x:5.761, y:9.85},{x:9.886, y:38.919},
        {x:13.549, y:100.758},{x:19.7368, y:307.981}, {x:24.7155, y:589.511}, {x:25, y:600}],
      fill: 2,
      pointStyle:'line',
      label: "Unstable zone"
    },
    { type: 'line',
      data: [{x:3.3784, y:0.1046},{x:4.516, y:1.007},{x:8.357, y:10.152}, {x:12.02, y:29.21},
             {x:16.216, y:81.56},{x:20.09, y:158.489},{x:24.822, y:303.366}, {x:25, y:320}],
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

  public extendedChartData: ChartDataSets[] = [
    { type: 'line',
    data: [{x:0.8, y:0.14115},{x:0.8, y:1001},{x:100, y:1000},{x:100, y:923.739}],
    fill: 1,
    pointStyle:'line',
    label: "Stable zone"
    },
    { type: 'line',
      data: [{x:1, y:0.21186},{x:30, y:103.285},{x:100, y:923.739}],
      fill: 2,
      pointStyle:'line',
      label: "Failure & major failure zone"
    },
    { type: 'line',
      data: [{x:1, y:0.00092},{x:30, y:0.44981},{x:101, y:4.0964}],
      fill: true,
      pointStyle:'line',
      label: "Caving zone"
    },
    { type: 'scatter',
      data: [],
      label:'stope surfaces',
      fill: true,
      pointRadius:3,
    }
  ];

  public ChartColors: Color[] = [
    { backgroundColor: 'rgba(34,101, 86, 0.5)', borderColor: 'none',borderWidth:0},
    { backgroundColor: 'rgba(0,0,0,0.5)', borderColor: 'none', borderWidth:0},
    { backgroundColor: 'rgba(255,0,0,0.45)', borderColor: 'none', borderWidth:0},
    { backgroundColor: '#000000', borderColor: 'none', borderWidth:0},
  ];

  ngAfterViewInit():void{
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.width ='45%';
    // // dialogConfig.height='55%';

    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
    // dialogConfig.data = {
    // };
    // this.dialog.open(QvalueComponentStopSurface,dialogConfig )

  }
   async fnc(){
    await this.getCalculations();
  }
  async getCalculations(){
    console.log("After here")
    if(this.qservice.getStope().includes("Crown")){
      (<HTMLInputElement>document.getElementById("crownstable")).innerText="...";
      (<HTMLInputElement>document.getElementById("crownunstable")).innerText="...";
      (<HTMLInputElement>document.getElementById("crownfailure")).innerText= "...";

    }
    if(this.qservice.getStope().includes("HW")){

    (<HTMLInputElement>document.getElementById("hangstable")).innerText=  "...";
    (<HTMLInputElement>document.getElementById("hangunstable")).innerText="...";
    (<HTMLInputElement>document.getElementById("hangfailure")).innerText= "...";
    }
    if(this.qservice.getStope().includes("FW")){

    (<HTMLInputElement>document.getElementById("footstable")).innerText=  "...";
    (<HTMLInputElement>document.getElementById("footunstable")).innerText="...";
    (<HTMLInputElement>document.getElementById("footfailure")).innerText= "...";
    }
    if(this.qservice.getStope().includes("SW1")){


    (<HTMLInputElement>document.getElementById("sw1stable")).innerText=  "...";
    (<HTMLInputElement>document.getElementById("sw1unstable")).innerText="...";
    (<HTMLInputElement>document.getElementById("sw1failure")).innerText= "...";
    }
    if(this.qservice.getStope().includes("SW2")){

    (<HTMLInputElement>document.getElementById("sw2stable")).innerText=  "...";
    (<HTMLInputElement>document.getElementById("sw2unstable")).innerText="...";
    (<HTMLInputElement>document.getElementById("sw2failure")).innerText= "...";
    }
if(this.qservice.getStope().includes("Crown")){
    this.sService.postReq(this.hrService.getcrown(),this.abcService.getCrownN()).subscribe(data1=>{
      console.log("the Big D",data1);
      const result=data1["results"][0]
      console.log("-----<>",result[0].toFixed(2));
       this.dataSetCrown(data1);
   
      //  setTimeout(() => {
      //   this.router.navigate(['/stability'], {relativeTo: this.route});
    
      //   // this.router.navigate(['/qvalue'], {relativeTo: this.route});
    
      // }, 1000);
        //  this.router.navigate(['/stability'], {relativeTo: this.route});
   
        if(result[0]>=result[1] && result[0]>= result[2])
        this.sService.setCrownOutcome("STABLE");
        else if(result[1]>=result[0] && result[1]>= result[2]){
          this.sService.setCrownOutcome("UNSTABLE");

        }
        else if(result[2]>=result[0] && result[2]>= result[1]){
          this.sService.setCrownOutcome("FAILURE");

        }
        else{
          this.sService.setCrownOutcome("CAVING");

        }
      
       
      (<HTMLInputElement>document.getElementById("crownstable")).innerText=  ((result[0]*100).toFixed(0) )+"%"as unknown as string;
      (<HTMLInputElement>document.getElementById("crownunstable")).innerText=((result[1]*100).toFixed(0) )+"%"as unknown as string;
      (<HTMLInputElement>document.getElementById("crownfailure")).innerText= ((result[2]*100).toFixed(0) )+"%"as unknown as string;

      // console.log((<HTMLInputElement>document.getElementById("crownstable")))
    }
    )

  }
else{
  // (<HTMLInputElement>document.getElementById("crownCheck")).style.display="none";
  // (<HTMLInputElement>document.getElementById("crownCheck1")).style.display="none";
 
  // (<HTMLInputElement>document.getElementById("senie")).style.display="none";

}
    //hangwall stablr.unstable.failuer
    if(this.qservice.getStope().includes("HW")){

    this.sService.postReq(this.hrService.gethang(),this.abcService.getHangN()).subscribe(data1=>{
      console.log("the Big D",data1["results"]);
      const result=data1["results"][0]
      console.log("-----<>",result[0].toFixed(2));


      this.dataSetHang(data1);

        if(result[0]>=result[1] && result[0]>= result[2])
        this.sService.setHWOutcome("STABLE");
        else if(result[1]>=result[0] && result[1]>= result[2]){
          this.sService.setHWOutcome("UNSTABLE");

        }
        else if(result[2]>=result[0] && result[2]>= result[1]){
          this.sService.setHWOutcome("FAILURE");

        }
        else{
          this.sService.setHWOutcome("CAVING");

        }
    
      (<HTMLInputElement>document.getElementById("hangstable")).innerText=  ((result[0]*100).toFixed(0) )+"%"as unknown as string;
      (<HTMLInputElement>document.getElementById("hangunstable")).innerText=((result[1]*100).toFixed(0) )+"%"as unknown as string;
      (<HTMLInputElement>document.getElementById("hangfailure")).innerText= ((result[2]*100).toFixed(0) )+"%"as unknown as string;

      // console.log((<HTMLInputElement>document.getElementById("crownstable")))
    }
    )
  }
    //
     //foorwall stablr.unstable.failuer
     if(this.qservice.getStope().includes("FW")){

     this.sService.postReq(this.hrService.getfoot(),this.abcService.getFootN()).subscribe(data1=>{
      console.log("the Big D",data1["results"]);
      const result=data1["results"][0]
      console.log("-----<>",result[0].toFixed(2));

      this.dataSetFoot(data1);

        if(result[0]>=result[1] && result[0]>= result[2])
        this.sService.setFWOutcome("STABLE");
        else if(result[1]>=result[0] && result[1]>= result[2]){
          this.sService.setFWOutcome("UNSTABLE");

        }
        else if(result[2]>=result[0] && result[2]>= result[1]){
          this.sService.setFWOutcome("FAILURE");

        }
        else{
          this.sService.setFWOutcome("CAVING");

        }
      
      (<HTMLInputElement>document.getElementById("footstable")).innerText=  ((result[0]*100).toFixed(0) )+"%"as unknown as string;
      (<HTMLInputElement>document.getElementById("footunstable")).innerText=((result[1]*100).toFixed(0) )+"%"as unknown as string;
      (<HTMLInputElement>document.getElementById("footfailure")).innerText= ((result[2]*100).toFixed(0) )+"%"as unknown as string;

      // console.log((<HTMLInputElement>document.getElementById("crownstable")))
    }
    )
  }
       //sidewall1 stablr.unstable.failuer
       if(this.qservice.getStope().includes("SW1")){

       this.sService.postReq(this.hrService.getside(),this.abcService.getSide1N()).subscribe(data1=>{
        console.log("the Big D",data1["results"]);
        const result=data1["results"][0]
        console.log("-----<>",result[0].toFixed(2));
  
  
        this.dataSetSide1(data1);
          if(result[0]>=result[1] && result[0]>= result[2])
          this.sService.setSW1Outcome("STABLE");
          else if(result[1]>=result[0] && result[1]>= result[2]){
            this.sService.setSW1Outcome("UNSTABLE");
  
          }
          else if(result[2]>=result[0] && result[2]>= result[1]){
            this.sService.setSW1Outcome("FAILURE");
  
          }
          else{
            this.sService.setSW1Outcome("CAVING");
  
          }
        
        (<HTMLInputElement>document.getElementById("sw1stable")).innerText=  ((result[0]*100).toFixed(0) )+"%"as unknown as string;
        (<HTMLInputElement>document.getElementById("sw1unstable")).innerText=((result[1]*100).toFixed(0) )+"%"as unknown as string;
        (<HTMLInputElement>document.getElementById("sw1failure")).innerText= ((result[2]*100).toFixed(0) )+"%"as unknown as string;
  
        // console.log((<HTMLInputElement>document.getElementById("crownstable")))
      }
      )
    }
    
    //sidewall2 stablr.unstable.failuer
    if(this.qservice.getStope().includes("SW2")){

    this.sService.postReq(this.hrService.getside(),this.abcService.getSide2N()).subscribe(data1=>{
      console.log("the Big D",data1["results"]);
      const result=data1["results"][0]
      console.log("-----<>",result[0].toFixed(2));


      this.dataSetSide2(data1);
      if(this.qservice.get()=="SW2"){
        if(result[0]>=result[1] && result[0]>= result[2])
        this.sService.setSW2Outcome("STABLE");
        else if(result[1]>=result[0] && result[1]>= result[2]){
          this.sService.setSW2Outcome("UNSTABLE");

        }
        else if(result[2]>=result[0] && result[2]>= result[1]){
          this.sService.setSW2Outcome("FAILURE");

        }
        else{
          this.sService.setSW2Outcome("CAVING");

        }
      }
      (<HTMLInputElement>document.getElementById("sw2stable")).innerText=  ((result[0]*100).toFixed(0) )+"%"as unknown as string;
      (<HTMLInputElement>document.getElementById("sw2unstable")).innerText=((result[1]*100).toFixed(0) )+"%"as unknown as string;
      (<HTMLInputElement>document.getElementById("sw2failure")).innerText= ((result[2]*100).toFixed(0) )+"%"as unknown as string;

      // console.log((<HTMLInputElement>document.getElementById("crownstable")))
    }
    )
  }
  
  }
  
  ngOnInit(): void {
    console.log('here')
    console.log("1->",(document.getElementById("xeno")));
    console.log("2->",(<HTMLDivElement>document.getElementById("xeno")));

    console.log("3->",(document.getElementById("xoxo")));
    console.log("4->",(<HTMLDivElement>document.getElementById("mat-tab-label-1-0")));

  
    // this.sService.postReq(this.hrService.getcrown(),this.abcService.getN())

   this.fnc();
    // this.router.navigate(['/stress'], {relativeTo: this.route});
    // setTimeout(()=>{
    //   this.router.navigate(['/stability'], {relativeTo: this.route});

    // },500)
    console.log("STABILITY DONE?")
    console.log('a:',this.abcService.getA(),"- b: ",this.abcService.getB(),"- c: ",this.abcService.getC(),"- n : ",this.abcService.getN())

    this.prediction = this.predictionService.getPrediction();
    this.subscription = this.predictionService.predictChanged
      .subscribe(
        (predict: Predict) => {
          console.log('zawel');
          console.log(predict)
          this.prediction = predict;
        }
      );

    this.service.currentHrCrown.subscribe(hrCrown => this.hrCrown = hrCrown);
    this.service.currentHrFoot.subscribe(hrFoot => this.hrFoot = hrFoot);
    this.service.currentHrHang.subscribe(hrHang => this.hrHang = hrHang);
    this.service.currentHrSide.subscribe(hrSide=> this.hrSide = hrSide);

    this.service.currentCrownN.subscribe(crownN=> this.crownN = crownN);
    this.service.currentHwN.subscribe(hwN=> this.hwN = hwN);
    this.service.currentFwN.subscribe(fwN=> this.fwN = fwN);
    this.service.currentSide2N.subscribe(side2N=> this.side2N = side2N);
    this.service.currentSide1N.subscribe(side1N=> this.side1N = side1N);

    this.service.currentCrownN_mod.subscribe(crownN_mod=> this.crownN_mod = crownN_mod);
    this.service.currentHwN_mod.subscribe(hwN_mod=> this.hwN_mod = hwN_mod);
    this.service.currentFwN_mod.subscribe(fwN_mod=> this.fwN_mod = fwN_mod);
    this.service.currentSide1N_mod.subscribe(side1N_mod=> this.side1N_mod = side1N_mod);
    this.service.currentSide2N_mod.subscribe(side2N_mod=> this.side2N_mod = side2N_mod);
   
    const data0 = [{x:this.hrCrown, y: this.crownN_mod}, {x:this.hrSide, y:this.side1N_mod},
      {x:this.hrSide, y:this.side2N_mod},{x:this.hrFoot, y:this.fwN_mod}, {x:this.hrHang, y:this.hwN_mod}];
    
    const data1 = [{x:this.hrCrown, y: this.crownN_mod}, {x:this.hrSide, y:this.side1N_mod},
      {x:this.hrSide, y:this.side2N_mod},{x:this.hrFoot, y:this.fwN_mod}, {x:this.hrHang, y:this.hwN_mod}];
    
    const data2 = [{x:this.hrCrown, y: this.crownN}, {x:this.hrSide, y:this.side1N},
      {x:this.hrSide, y:this.side2N},{x:this.hrFoot, y:this.fwN}, {x:this.hrHang, y:this.hwN}];

    this.refinedChartData[3].data = data0;
    this.modifiedChartData[3].data = data1;
    this.extendedChartData[3].data = data2;
  }
}


@Component({
  selector: 'qvalue-component-stope-surface',
  templateUrl: './qvalue.component-stope-surface.html',
  styleUrls: ['./qvalue.component-stope-surface.scss']
})
export class QvalueComponentStopSurface {

  constructor(
    public dialogRef: MatDialogRef<QvalueComponentStopSurface>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    onClick(e){
      
  
        this.dialogRef.close(this.data);

    }
}
