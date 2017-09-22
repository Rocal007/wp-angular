import { WpNewsService } from './../services/wp-news/wp-news.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any; 
  
      constructor(private service: WpNewsService) {
       
          };

 

ngOnInit() {
  this.service.getNews()
  .subscribe(response => {
    console.log(response.json());
    this.news = response.json(); 
    //this.news =this.news.feed.data;
    console.log(this.news);    
})}}
