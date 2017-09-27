import { WpNewsService } from './../services/wp-news/wp-news.service';
import { WpPagesService } from './../services/wp-pages/wp-pages.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any; 
  
      constructor(private service: WpPagesService) {
       
          };

 

ngOnInit() {
  this.service.getPages()
  .subscribe(response => {
    console.log(response.json());
    this.news = response.json();      
})}}
