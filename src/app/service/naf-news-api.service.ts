import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IParamApi } from './naf-news.model';
import { isNil as _isNil , isEmpty as _isEmpty} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class NafNewsApiService {

  apiNews = 'https://newsapi.org/v2/top-headlines';
  apiTopNews = 'https://newsapi.org/v2/top-headlines/sources';
  apiEverithing = 'https://newsapi.org/v2/everything';
  apiToken = 'bc8bdffb56bd4f8cad73b362aa808bcb'; // please register on newsapi and replace to YOUR token 
  constructor(private _http: HttpClient) { }

  getHeaders() {
    let headers = new HttpHeaders();
    headers.append('X-RapidAPI-Key', this.apiToken);
    headers.append('X-RapidAPI-Host', 'contextualwebsearch-websearch-v1.p.rapidapi.com');
    return headers;
  }

  getParams(parametros: any) {
    let params = {
      country: _isNil(parametros.country) ? 'us' : parametros.country,
      q: parametros?.q,
      apiKey: 'bc8bdffb56bd4f8cad73b362aa808bcb',
      category: parametros?.category
    };

    if ( !_isNil(parametros.q) && !_isEmpty(parametros.q)){
      delete params.country;
      delete params.category;
    }

    if ( _isNil(parametros.q)){
      delete params.q
    }

    if (  _isNil(parametros.category)){
      delete params.category
    }

    return params;
  }
  getNews(params: IParamApi): Observable<any> {
    return this._http.get( _isNil(params.q) || _isEmpty(params.q) ? this.apiNews : this.apiEverithing, { params: this.getParams(params) });
  }

}
