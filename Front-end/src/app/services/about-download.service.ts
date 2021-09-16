import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AboutDownloadService {
    public url = '/file';

    constructor(
        private http: HttpClient,

    ) { }


    download() {
        console.log("sewrv")
        const options = new RequestOptions({
            responseType: ResponseContentType.Blob
        });

        let varr= this.http.get<any[]>(this.url);
        console.log("pop",varr)
        return varr
    }
    public getReport() {
    return this.http.get("/download", 
        {responseType: 'blob'});  
           
    }

    public postReq(data0:any,data00:any,data1:any,data2:any,data3:any) {
        console.log("post req message ....",data1)
    return this.http.post("/sendmail", 
        {email:data1,subject:data2,message:data3,fname:data0,lname:data00});  

           
    }
  




}
