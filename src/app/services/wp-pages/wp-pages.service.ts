import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WpPagesService {
  private url = 'http://www.heia-easy.com/wp-json/wp/v2/pages'
  
  
  constructor(private http: Http) { }

  getPages() {
      return this.http.get(this.url);

  }
}