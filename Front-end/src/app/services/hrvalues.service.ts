import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class hrvalues {
    private crownFac;
    private hangFac;
    private footFac;
    private sideFac;

    
    constructor() { }
     public set(data1,data2,data3,data4) {
        this.crownFac = data1;
        this.hangFac = data2;
        this.footFac = data3;
        this.sideFac = data4;

      }
     
      
      public getLatestHr(data){
          if(data=="Crown"){
            return this.crownFac;

          }
          else if(data=="HW"){
            return this.hangFac;

          }
          else if(data=="FW"){
            return this.footFac;

          }
          else if(data=="SW1"){
            return this.sideFac;

          }
          else if(data=="SW2"){
            return this.sideFac;

          }
      }
      public  getcrown() {
        console.log("a get servioce  :  :",this.crownFac)

       return this.crownFac;

      }
      public  gethang() {
        console.log("hang get servioce  :  :",this.hangFac)

        return this.hangFac;
       }
     
       public  getfoot() {
        console.log("foot get servioce  :  :",this.footFac)

        return this.footFac;
       }
       
       public  getside() {
        console.log("side get servioce  :  :",this.sideFac)

        return this.sideFac;
       }
      

    

    download() {
        console.log("sewrv")
       
        }

  
}
