import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class MenuService {
    constructor(private http: Http) { }

    private menuUrl = 'http://portamur.alfasco.ru/api/v1/menu/';
    public Menu: any;

    getMenu() {
        return this.http.get(this.menuUrl)
            .map(this.extractData)
            .catch(this.handleError);;
    }

    private extractData(res: Response) {
        let body = JSON.parse(res._body);
        return body.content || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}