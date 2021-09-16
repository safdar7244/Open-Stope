import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class qvaluefactor {
    private savedData;
    private qvalue;


    private qCrownvalue;
    private qHangvalue;
    private qFootvalue;
    private qSide1value;
    private qSide2value;

    private stope: Array<string>=['-'];
    private latestStope;
    
    constructor() { }
    public setLatestStope(data){
      this.latestStope=data;

    }
     public set(data) {
       if(this.stope.includes(data)){
        console.log("not setting stope value because already exists.....  :",data)

       }
       else{
        this.stope.push(data)
        console.log("setting stope value.....  :",data)

       }
        //this.savedData = data;
      }
      public getlatestStope(){
        console.log("latest stope returning ....",this.latestStope)
        return this.latestStope;

      }
      public setQ(data) {
        this.qvalue = data;
        console.log("setting q value.....  :",data)
      }
      public  getQ() {
        console.log("getting q value.....  :",this.qvalue)

       return this.qvalue;
      }


      public setCrownQ(data) {
        this.qCrownvalue = data;
        console.log("setting q value.....  :",data)
      }
      public  getCrownQ() {
        console.log("getting q value.....  :",this.qCrownvalue)

       return this.qCrownvalue;
      }


      
      public setHangQ(data) {
        this.qHangvalue = data;
        console.log("setting q value.....  :",data)
      }
      public  getHangQ() {
        console.log("getting q value.....  :",this.qHangvalue)

       return this.qHangvalue;
      }

      public setFootQ(data) {
        this.qFootvalue = data;
        console.log("setting q value.....  :",data)
      }
      public  getFootQ() {
        console.log("getting q value.....  :",this.qFootvalue)

       return this.qFootvalue;
      }

      public setSide1Q(data) {
        this.qSide1value = data;
        console.log("setting q value.....  :",data)
      }
      public  getSide1Q() {
        console.log("getting q value.....  :",this.qSide1value)

       return this.qSide1value;
      }


      public setSide2Q(data) {
        this.qSide2value = data;
        console.log("setting q value.....  :",data)
      }
      public  getSide2Q() {
        console.log("getting q value.....  :",this.qSide2value)

       return this.qSide2value;
      }

















      public  getStope() {
        console.log("getting stope(new) value.....  :",this.stope)

       return this.stope;
      }

      public  get() {
        console.log("getting stope(new) value.....  :",this.stope)

       return this.savedData;
      }
     
     
    

    download() {
        console.log("sewrv")
       
        }

  
}
