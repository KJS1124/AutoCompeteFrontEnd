
import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";
import { Item } from '../models/Item';



@Injectable()
export class SearchService {
  results: Item[];
  // add the url
  apiRoot: string = "http://localhost:9999/";
  constructor(private http: HttpClient) { }

  search(keyword: string) {
    console.log('service inside ' + keyword);
    let apiURL = this.apiRoot + "query"
    return this.http.get(apiURL, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': "true",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'content-type, Acept'
      }), params: new HttpParams().set('data', keyword)
    });
  }

  add(keyword: string) {
    let apiURL = this.apiRoot + "add"
    return this.http.post(apiURL, { 'data': keyword }, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': "true",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'content-type, Acept'
      }), params: new HttpParams().set('data', keyword)
    });
  }

}
