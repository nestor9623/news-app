import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { mockCategories, mockCountries, mockdata } from './mock/mockdata';
import { NafNewsApiService } from './service/naf-news-api.service';
import { Category, IParamApi } from './service/naf-news.model';
import { isNil as _isNil } from 'lodash';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  @Output() countryChanged = new EventEmitter<string>();
  title = 'news-naf'
  textToSearch: any;
  textSend: any;
  articles: any = [];
  firstArticle: any;
  paramsSearch: IParamApi = {};
  countries: any = [];
  countryChoise: string = 'us'; // default language
  categoryChoise = '3'; // por defecto categoria general
  categories: any = [];
  constructor(private _nafService: NafNewsApiService) { }

  ngOnInit(): void {
    this.getCountries();
    this.getCategorys();
    this.callService();
    //this.callMock();
  }

  setValueInput(event: any) {
    this.textToSearch = event;
  }

  searchNews(event: any) {
    if (!_isNil(this.textToSearch)) {
      this.textSend = this.textToSearch;
      this.paramsSearch.q = this.textSend;
      this.callService();
    }
  }
  getCountries() {
    this.countries = mockCountries;
  }

  changeCountry(event: any) {
    this.textToSearch = '';
    this.countryChoise = event;
    this.paramsSearch.country = this.countryChoise;
    this.callService();
  }

  changeCategory(item: any) {
    this.categoryChoise = item.id;
    this.paramsSearch.category = item.name;
    this.textSend = '';
    this.textToSearch = '';
    this.paramsSearch.q = this.textSend;
    this.getCategorys();
    this.callService();
  }


  /**
   * Metodo que invoca al servicio y a su vez simula un random aleatorio de noticias cada que se incova.
   */
  callService() {
    this._nafService.getNews(this.paramsSearch).subscribe((results) => {
      const newsTopPosition = Math.floor(Math.random() * ((results.articles.length - 1) - 0) + 0);
      this.firstArticle = results.articles[newsTopPosition];
      this.articles = results.articles.filter((element: any, index: any) => index !== newsTopPosition);
    });
  }

  callMock() {
    const newsTopPosition = Math.floor(Math.random() * ((mockdata.length - 1) - 0) + 0);
    this.firstArticle = mockdata[newsTopPosition];
    this.articles = mockdata.filter((element: any, index: any) => index !== newsTopPosition);
  }

  getCategorys() {
    // this.categories = mockCategories;
    this.categories = mockCategories.map((element: any) => {
      return {
        active: element.id === this.categoryChoise ? true : false,
        ...element
      }
    })
  }
}
