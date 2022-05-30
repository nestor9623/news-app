import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { mockdata } from '../mock/mockdata';
import { NafNewsApiService } from '../service/naf-news-api.service';
import { IParamApi } from '../service/naf-news.model';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.less']
})
export class TopheadlineComponent implements OnInit {
  // @Input()
  // get country(): string { return this._country; }
  // set country(value: string) {
  //   this.changeCountry(value);
  // }
  // private _country = '';

  // @Input() set search(value: string){
  //   this.searchText(value);
  // }

  @Input() articles: any = [];
  paramsSearch: IParamApi = {};
  constructor(private _nafService: NafNewsApiService) { }

  ngOnInit(): void {
    // this.callMock();
    // this.callService();
  }

  // callMock() {
  //   this.articles = mockdata;
  // }

  // callService() {
  //   this._nafService.getNews(this.paramsSearch).subscribe((results) => {
  //     this.articles = results.articles;
  //   });
  // }

  // changeCountry(valor: string) {
  //   this.paramsSearch.country = valor;
  //   delete this.paramsSearch.q;
  //   this.callService();
  // }

  // searchText(value: string) {
  //   if ( value !== null && value !== undefined){
  //     this.paramsSearch.q = value;
  //     this.callService();
  //   }
  // }

}
