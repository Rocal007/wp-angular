import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WpPagesService {
  private url = 'http://www.heia-easy.com/wp-json/wp/v2/pages?per_page=100'
  private pages = null;
  constructor(private http: Http) { }

  getPages() {
    
    return this.http.get(this.url)
    .map(res => res.json())
  }
  getCachedPages(){
    return this.pages;
  }
  setCachedPages(pages){
    this.pages=pages;
  }

  getPage(idArray){
    let pages = [];
    if(this.pages==null)
      return null;
    for(var i = 0; i< this.pages.length ; i++){
      for(var j = 0;j<idArray.length;j++){
        if(this.pages[i].id==idArray[j]){
          pages.push(this.pages[i]);
        }
      }
    }
    return pages;
  }

}