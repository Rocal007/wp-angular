import { WpPagesService } from './../services/wp-pages/wp-pages.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  
  pages: any; 

  constructor(private service: WpPagesService) {
   
      };



ngOnInit() {
this.service.getPages()
.subscribe(response => {
console.log(response.json());
this.pages = response.json(); 

})}}