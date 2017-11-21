import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {

  private baseApiUrl = "https://api.themoviedb.org/3";
  private api_key = "f1af9b613ccd93ffd5997f106f099b6b";
  constructor(public http: Http) {
    console.log('Hello MoviesProvider Provider');
  }

  pegaUltimosFilmes(){
    return this.http.get(this.baseApiUrl + "/movie/popular?api_key="+this.api_key+"&language=pt-PT");
  }
}
