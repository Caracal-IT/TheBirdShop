import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable"

import { Bird } from "./bird";

@Injectable()
export class ShopService {
    private headers = new Headers({
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",       
        "Expires" : "0"
    });
    private shopUrl = "api/shop";
    
    constructor(private http: Http) { }

    getBirds(): Observable<Bird[]> {
        return this.http.get(this.shopUrl, { headers: this.headers})
            .map(response => response.json() as Bird[])            
            .catch(this.handleError);
    }    
    
    private handleError(error: Response | any) : any {
        let errMsg = error instanceof Response ? this.getResponseErrorMessage(error) : this.getErrorMessage(error);
      
        console.error(errMsg);

        return Observable.throw(errMsg);
    }

    private getResponseErrorMessage(error: Response): string {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);

        return `${error.status} - ${error.statusText || ''} ${err}`;
    }

    private getErrorMessage(error: any): string {        
        return error.message ? error.message : error.toString();
    }
}