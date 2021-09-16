import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PredictService {

    constructor(
        private http: HttpClient,

    ) { }


    predictData(data: any): Observable<any> {
        return this.http.post<any>('predict', data).pipe(
            map((response: any) => {
              console.log(response)
                return response;
            })
        );
    }
}
