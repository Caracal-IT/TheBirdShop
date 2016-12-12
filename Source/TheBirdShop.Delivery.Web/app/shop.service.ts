import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Bird } from "./bird";

@Injectable()
export class ShopService {
    private headers = new Headers({ "Content-Type": "application/json" });
    private shopUrl = "api/shop";  // URL to web api

    constructor(private http: Http) { }

    getBirds(): Promise<Bird[]> {
        return this.http.get(this.shopUrl)
            .toPromise()
            .then(response => response.json() as Bird[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}