import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class WpNewsService {
  private url = 'http://www.heia-easy.com/wp-json/wp/v2/pages?per_page=100'
  private news =null;
  constructor(private http: Http) { }

  getNews() {
    
    return this.http.get(this.url)
    .map(res => res.json())
  }
  getCachedNews(){
    return this.news;
  }
  setCachedNews(news){
    this.news=news;
  }

  getNew(idArray){
    var news = [];
    if(this.news==null)return null;
    for(var i = 0; i< this.news.length ; i++){
      for(var j = 0;j<idArray.length;j++){
        if(this.news[i].id==idArray[j]){
          news.push(this.news[i]);
        }
      }
    }
    return news;
  }

}