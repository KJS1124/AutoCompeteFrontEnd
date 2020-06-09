
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
    // console.log('service inside ' + keyword);
    const apiURL = this.apiRoot + 'query';
    return this.http.get(apiURL, {
      params: new HttpParams().set('data', keyword)
    });
  }

  add(keyword: string) {
    const apiURL = this.apiRoot + 'add';
    return this.http.post(apiURL, { 'data': keyword });
  }

}
