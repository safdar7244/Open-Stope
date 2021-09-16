import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class allResetValues {
    

    //hr symmetric
    private symval1;
    private symval2;
    private symval3;

    //hr asym
    private asymval1;
    private asymval2;
    private asymval3;
    private asymval4;
    private asymval5;
    

//sy,/asym different variable,which one is active.
private activeVal;

    //qval
    private qval1: string;
    private qval2;
    private qval3;
    private qval4: string;
    private qval5;
    private qval6;


    //stress
    private stressval1;
    private stressval2;
    private stressval3;
    private stressval4;
    private stressval5;


    //abc fac

    private abcval1;
    private abcval2;
    private abcval3;
    private abcval4;
    private abcval5;






    
    constructor() { }
     public sethrsym(data1,data2,data3,data4) {
        
     this.symval1=data1;
     this.symval2=data2;
     this.symval3=data3;
     this.activeVal=data4;


      }
      public sethrAsym(data1,data2,data3,data4,data5,data6) {
        console.log("->",data1,"->",data2,"->",data3,"->",data4,data5)
        this.asymval1=data1;
        this.asymval2=data2;
        this.asymval3=data3;
        this.asymval4=data4;
        this.asymval5=data5;
        this.activeVal=data6;

   
         }
         public setqval(data1,data2,data3,data4,data5,data6) {
        
            this.qval1=data1;
            this.qval2=data2;
            this.qval3=data3;
            this.qval4=data4;
            this.qval5=data5;
            this.qval6=data6;

       
             }
         
             public setstress(data1,data2,data3,data4,data5) {
        
                this.stressval1=data1;
                this.stressval2=data2;
                this.stressval3=data3;
                this.stressval4=data4;
                this.stressval5=data5;

           
                 }
                 public setabcFact(data1,data2,data3,data4,data5) {
        
                    this.abcval1=data1;
                    this.abcval2=data2;
                    this.abcval3=data3;
                    this.abcval4=data4;
                    this.abcval5=data5;
               
                     }
      


public getsym1(){return this.symval1}
public getsym2(){return this.symval2}
public getsym3(){return this.symval3}

public getasym1(){return this.asymval1}
public getasym2(){return this.asymval2}
public getasym3(){return this.asymval3}
public getasym4(){return this.asymval4}
public getasym5(){return this.asymval5}

public getactiveval(){return this.activeVal}


public getqval1(){return this.qval1}
public getqval2(){return this.qval2}
public getqval3(){return this.qval3}
public getqval4(){return this.qval4}
public getqval5(){return this.qval5}
public getqval6(){return this.qval6}

public getstress1(){return this.stressval1}
public getstress2(){return this.stressval2}
public getstress3(){return this.stressval3}
public getstress4(){return this.stressval4}
public getstress5(){return this.stressval5}


public getabc1(){return this.abcval1}
public getabc2(){return this.abcval2}
public getabc3(){return this.abcval3}
public getabc4(){return this.abcval4}
public getabc5(){return this.abcval5}



    

    download() {
        console.log("sewrv")
       
        }

  
}
