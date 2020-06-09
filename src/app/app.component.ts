import { NgModule, Component, Injectable } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";
import { Observable } from "rxjs";
import { SearchService } from "./services/app.service";
import { Item } from './models/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: Item[] = [];
  searchData = '';
  constructor(private _searchService: SearchService) { }
  onSearchChange(data) {
    console.log(data.value);
    this._searchService.search(data.value).subscribe((res: String[]) => {
      console.log(res);
      let result: Item[] = [];
      for (let i = 0; i < res.length; i++)
        result.push(new Item(res[i]));
      this.list = result;
    });

  }


  ngOnInit() {
  }


  add(data) {
    console.log(data);
    this.searchData = data;
    this._searchService.add(data);
  }

}




