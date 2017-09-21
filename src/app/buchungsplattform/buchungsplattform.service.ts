import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BuchungsplattformService {
  private url = 'http://www.heia-easy.com/wp-json/wp/v2/posts/833'
  
  constructor(private http: Http) { }
  
    getBuchungsplattform() {
        
      return this.http.get(this.url)
      .map(response => response.json())
    }
  }

