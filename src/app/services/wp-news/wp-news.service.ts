import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WpNewsService {
  private url = 'http://www.heia-easy.com/wp-json/wp/v2/pages/430'
  
  
  constructor(private http: Http) { }

  getNews() {
      return this.http.get(this.url);

  }
}