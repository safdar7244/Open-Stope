import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class abcfactor {
    private aFac;
    private bFac;
    private cFac;
    private nFac;
    private nCrownFac;
    private nHangFac;
    private nFootFac;
    private nSide1Fac;
    private nSide2Fac;

    private tFac;
    private fFac;


    private CrownaFac;
    private CrownbFac;
    private CrowncFac;
    private CrownnFac;
    private CrowntFac;
    private CrownfFac;

    private HangaFac;
    private HangbFac;
    private HangcFac;
    private HangnFac;
    private HangtFac;
    private HangfFac;

    private FootaFac;
    private FootbFac;
    private FootcFac;
    private FootnFac;
    private FoottFac;
    private FootfFac;

    private Side1aFac;
    private Side1bFac;
    private Side1cFac;
    private Side1nFac;
    private Side1tFac;
    private Side1fFac;

    private Side2aFac;
    private Side2bFac;
    private Side2cFac;
    private Side2nFac;
    private Side2tFac;
    private Side2fFac;


    
    constructor() { }


    public getLatestN(data){
        if(data=="Crown"){
          return this.nCrownFac;

        }
        else if(data=="HW"){
          return this.nHangFac;

        }
        else if(data=="FW"){
          return this.nFootFac;

        }
        else if(data=="SW1"){
          return this.nSide1Fac;

        }
        else if(data=="SW2"){
          return this.nSide2Fac;

        }
    }






     public setA(data,data2) {

        if(data2=="Crown"){
         this.aFac = data;

            return this.CrownaFac = data;
;
  
          }
          else if(data2=="HW"){
                    this.aFac = data;

            return         this.HangaFac = data;
;
  
          }
          else if(data2=="FW"){
                    this.aFac = data;

            return         this.FootaFac = data;
;
  
          }
          else if(data2=="SW1"){
                    this.aFac = data;

            return         this.Side1aFac = data;
;
  
          }
          else if(data2=="SW2"){
                    this.aFac = data;

            return         this.Side2aFac = data;
;
  
          }


        this.aFac = data;
        console.log("a servioce  :  :",data)
      }
      public setB(data,data2) {
        if(data2=="Crown"){
            this.bFac = data;
   
               return this.CrownbFac = data;
   ;
     
             }
             else if(data2=="HW"){
                       this.bFac = data;
   
               return         this.HangbFac = data;
   ;
     
             }
             else if(data2=="FW"){
                       this.bFac = data;
   
               return         this.FootbFac = data;
   ;
     
             }
             else if(data2=="SW1"){
                       this.bFac = data;
   
               return         this.Side1bFac = data;
   ;
     
             }
             else if(data2=="SW2"){
                       this.bFac = data;
   
               return         this.Side2bFac = data;
   ;
     
             }




        // this.bFac = data;
        // console.log("b servioce  :  :",data)

      }
      public setC(data,data2) {
        if(data2=="Crown"){
            this.cFac = data;
   
               return this.CrowncFac = data;
   ;
     
             }
             else if(data2=="HW"){
                       this.cFac = data;
   
               return         this.HangcFac = data;
   ;
     
             }
             else if(data2=="FW"){
                       this.cFac = data;
   
               return         this.FootcFac = data;
   ;
     
             }
             else if(data2=="SW1"){
                       this.cFac = data;
   
               return         this.Side1cFac = data;
   ;
     
             }
             else if(data2=="SW2"){
                       this.cFac = data;
   
               return         this.Side2cFac = data;
   ;
     
             }
        // this.cFac = data;
        // console.log("c servioce  :  :",data)

      }
      public setN(data) {
        this.nFac = data;
        console.log("N servioce  :  :",data)

        
      }
      public setCrownN(data) {
        this.nCrownFac = data;
        console.log("nCrownFac servioce  :  :",data)

        
      }
      public setHangN(data) {
        this.nHangFac = data;
        console.log("nHangFac servioce  :  :",data)

        
      }
      public setFootN(data) {
        this.nFootFac = data;
        console.log("nFootFac servioce  :  :",data)

        
      }
      public setSide1N(data) {
        this.nSide1Fac = data;
        console.log("nSide1Fac servioce  :  :",data)

        
      }
      public setSide2N(data) {
        this.nSide2Fac = data;
        console.log("nSide2Fac servioce  :  :",data)

        
      }


      public getCrownN() {
        console.log("nCrownFac servioce  get service:  :",this.nCrownFac )
        return this.nCrownFac ;
        

        
      }
      public getHangN() {
        console.log("nHangFac servioce  get service:  :",this.nHangFac )
        return this.nHangFac ;
       

        
      }
      public getFootN() {
        console.log("nFootFac servioce  get service:  :",this.nFootFac )
        return this.nFootFac ;
       

        
      }
      public getSide1N() {
        console.log("nSide1Fac servioce  get service:  :",this.nSide1Fac )
        return this.nSide1Fac ;
        

        
      }
      public getSide2N() {
        console.log("nSide2Fac servioce  get service:  :",this.nSide2Fac )
        return this.nSide2Fac ;
        

        
      }




      public setT(data,data2) {
        if(data2=="Crown"){
            this.tFac = data;
   
               return this.CrowntFac = data;
   ;
     
             }
             else if(data2=="HW"){
                       this.tFac = data;
   
               return         this.HangtFac = data;
   ;
     
             }
             else if(data2=="FW"){
                       this.tFac = data;
   
               return         this.FoottFac = data;
   ;
     
             }
             else if(data2=="SW1"){
                       this.tFac = data;
   
               return         this.Side1tFac = data;
   ;
     
             }
             else if(data2=="SW2"){
                       this.tFac = data;
   
               return         this.Side2tFac = data;
   ;
     
             }

      }
      public setF(data,data2) {
          console.log("In HERe iS F CAL")
        if(data2=="Crown"){
            this.fFac = data;
   console.log("Fault facot setting for crown : ",data)
               return this.CrownfFac = data;
   ;
     
             }
             else if(data2=="HW"){
                       this.fFac = data;
   
               return         this.HangfFac = data;
   ;
     
             }
             else if(data2=="FW"){
                       this.fFac = data;
   
               return         this.FootfFac = data;
   ;
     
             }
             else if(data2=="SW1"){
                       this.fFac = data;
   
               return         this.Side1fFac = data;
   ;
     
             }
             else if(data2=="SW2"){
                       this.fFac = data;
   
               return         this.Side2fFac = data;
   ;
     
             }
      }
      public  getA() {
        console.log("a get servioce  :  :",this.aFac)

       return this.aFac;

      }
      public  getB() {
        console.log("b get servioce  :  :",this.bFac)

        return this.bFac;
       }
     
       public  getC() {
        console.log("c get servioce  :  :",this.cFac)

        return this.cFac;
       }
       
       public  getN() {
        console.log("n get servioce  :  :",this.nFac)

        return this.nFac;
       }
       public  getT() {
        console.log("T get servioce  :  :",this.tFac)

        return this.tFac;
       }
       public  getF() {
        console.log("n get servioce  :  :",this.fFac)

        return this.fFac;
       }








       public  getCrownA() {
        console.log("a get servioce  :  :",this.CrownaFac)

       return this.CrownaFac;

      }
      public  getCrownB() {
        console.log("b get servioce  :  :",this.CrownbFac)

        return this.CrownbFac;
       }
     
       public  getCrownC() {
        console.log("c get servioce  :  :",this.CrowncFac)

        return this.CrowncFac;
       }
    
       public  getCrownT() {
        console.log("T get servioce  :  :",this.CrowntFac)

        return this.CrowntFac;
       }
       public  getCrownF() {
        console.log("n get servioce  :  :",this.CrownfFac)

        return this.CrownfFac;
       }

    


       public  getHangA() {
        console.log("a get servioce  :  :",this.HangaFac)

       return this.HangaFac;

      }
      public  getHangB() {
        console.log("b get servioce  :  :",this.HangbFac)

        return this.HangbFac;
       }
     
       public  getHangC() {
        console.log("c get servioce  :  :",this.HangcFac)

        return this.HangcFac;
       }
    
       public  getHangT() {
        console.log("T get servioce  :  :",this.HangtFac)

        return this.HangtFac;
       }
       public  getHangF() {
        console.log("n get servioce  :  :",this.HangfFac)

        return this.HangfFac;
       }




       public  getFootA() {
        console.log("a get servioce  :  :",this.FootaFac)

       return this.FootaFac;

      }
      public  getFootB() {
        console.log("b get servioce  :  :",this.FootbFac)

        return this.FootbFac;
       }
     
       public  getFootC() {
        console.log("c get servioce  :  :",this.FootcFac)

        return this.FootcFac;
       }
    
       public  getFootT() {
        console.log("T get servioce  :  :",this.FoottFac)

        return this.FoottFac;
       }
       public  getFootF() {
        console.log("n get servioce  :  :",this.FootfFac)

        return this.FootfFac;
       }




       public  getSide1A() {
        console.log("a get servioce  :  :",this.Side1aFac)

       return this.Side1aFac;

      }
      public  getSide1B() {
        console.log("b get servioce  :  :",this.Side1bFac)

        return this.Side1bFac;
       }
     
       public  getSide1C() {
        console.log("c get servioce  :  :",this.Side1cFac)

        return this.Side1cFac;
       }
    
       public  getSide1T() {
        console.log("T get servioce  :  :",this.Side1tFac)

        return this.Side1tFac;
       }
       public  getSide1F() {
        console.log("n get servioce  :  :",this.Side1fFac)

        return this.Side1fFac;
       }



       public  getSide2A() {
        console.log("a get servioce  :  :",this.Side2aFac)

       return this.Side2aFac;

      }
      public  getSide2B() {
        console.log("b get servioce  :  :",this.Side2bFac)

        return this.Side2bFac;
       }
     
       public  getSide2C() {
        console.log("c get servioce  :  :",this.Side2cFac)

        return this.Side2cFac;
       }
    
       public  getSide2T() {
        console.log("T get servioce  :  :",this.Side2tFac)

        return this.Side2tFac;
       }
       public  getSide2F() {
        console.log("n get servioce  :  :",this.Side2fFac)

        return this.Side2fFac;
       }

    download() {
        console.log("sewrv")
       
        }

  
}
