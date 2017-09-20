import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BuchungsplattformService {
  private url = 'http://www.heia-easy.com/wp-json/wp/v2/posts/379'
  
  constructor(private http: Http) { }
  
    getSeo() {
        return this.http.get(this.url);
  
    }
  }

