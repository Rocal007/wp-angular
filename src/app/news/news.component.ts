import { WpNewsService } from './../services/wp-news/wp-news.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any;
  data: any; 
  
      constructor(private service: WpNewsService) {
       
          };

          getData(id1) {
            
            let newsList = this.service.getNew([id1]);
            console.log(newsList);
            return newsList;
        }

ngOnInit() {
  let self: NewsComponent = this;
  let b = this.service.getCachedNews();
  //console.log (b);

  if (b == null) {
      this.service.getNews()
          .subscribe(


              function(news) {
                  self.news = news;
                  self.service.setCachedNews(self.news);
                  console.log(self.news);
              },

              error => {
                  alert('An error occured');
                  console.log(error);

              },


          )

  } else {
      this.news = b;
  }
}

};