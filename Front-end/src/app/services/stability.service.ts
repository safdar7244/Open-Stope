import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class stabilityService {
    private hr;
    private n;
    private crownoutcome;
    private hwoutcome;
    private fwoutcome;
    private sw1outcome;
    private sw2outcome;
    private outcome;

    constructor(
        private http: HttpClient,

    ) { }




    public getLatestOutcome(data){
        if(data=="Crown"){
          return this.crownoutcome;

        }
        else if(data=="HW"){
          return this.hwoutcome;

        }
        else if(data=="FW"){
          return this.fwoutcome;

        }
        else if(data=="SW1"){
          return this.sw1outcome;

        }
        else if(data=="SW2"){
          return this.sw2outcome;

        }
    }





        public set(data1,data2){
            this.hr=data1;
            this.n=data2;
        }
        public setCrownOutcome(data){
            this.crownoutcome=data;
        }
        public setHWOutcome(data){
            this.hwoutcome=data;
        }
        public setFWOutcome(data){
            this.fwoutcome=data;
        }
        public setSW1Outcome(data){
            this.sw1outcome=data;
        }
        public setSW2Outcome(data){
            this.sw2outcome=data;
        }



        public getCrownOutcome(){
            return this.crownoutcome;
        }
        public getHWOutcome(){
            return this.hwoutcome;
        }
        public getFWOutcome(){
            return this.fwoutcome;
        }
        public getSW1Outcome(){
            return this.sw1outcome;
        }
        public getSW2Outcome(){
            return this.sw2outcome;
        }







        public getOutcome(){
            console.log("grttting OutCOmed: ",this.outcome)
            return this.outcome;
        }
    download() {
        console.log("sewrv")
      
    }
    public postReq(data1:any,data2:any) {
        console.log("post req ....",data1,"--",data2)
    return this.http.post("https://nameless-ridge-00810.herokuapp.com/", 
        {hr:data1,n:data2});  

           
    }

    public datashareReq(val1 :any,val2 : any,val3 : any,val4 : any,val5 : any,val6 : any,val7 : any,val8 : any,val9 : any,val10 : any,val11 : any,val12 : any,val13 : any,val14 : any) {
        console.log("->....>",val1,"  --->   ",val2,"  --->   ",val3,"  --->   ",val4,"  --->   ",val5,"  --->   ",val6,"  --->   ",val7,"  --->   ",val8,"  --->   ",val9,"  --->   ",val10,"  --->   ",val11,"  --->   ",val12,"  --->   ",val13,"  --->   ",val14);
        return this.http.post("/datasharing", 
        {val1 :val1,val2 : val2,val3 : val3,val4 : val4,val5 : val5,val6 : val6,val7 : val7,val8 : val8,val9 : val9,val10 : val10,val11 : val11,val12 : val12,val13 : val13,val14 : val14});  

           
    }

}
