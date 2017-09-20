import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WpPostsService {
  private url = 'http://www.heia-easy.com/wp-json/wp/v2/posts'
  
  
  constructor(private http: Http) { }

  getPosts() {
      return this.http.get(this.url);

  }
}