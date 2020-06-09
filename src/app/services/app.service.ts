
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/Item';



@Injectable()
export class SearchService {
  results: Item[];
  // add the url
  apiRoot = 'http://localhost:9999/';
  constructor(private http: HttpClient) { }

  search(keyword: string) {
    console.log('service inside ' + keyword);
    const apiURL = this.apiRoot + 'query';
    return this.http.get(apiURL, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'content-type, Accept'
      }), params: new HttpParams().set('data', keyword)
    });
  }

  add(keyword: string) {
    const apiURL = this.apiRoot + 'add';
    return this.http.post(apiURL, { 'data': keyword }, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'content-type, Accept'
      }), params: new HttpParams().set('data', keyword)
    });
  }

}
