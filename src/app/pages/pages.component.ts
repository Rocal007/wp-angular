import { WpPagesService } from './../services/wp-pages/wp-pages.service';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  
  pages: any; 
  data: any;
  @Input() pageId: any[];
   
    
      constructor(private service: WpPagesService) {
       
          };

          getData(id1,id2,id3,id4,id5) {
              
              var pagesList = this.service.getPage([id1,id2,id3,id4,id5]);
              console.log(pagesList);
              return pagesList;
          }
          


ngOnInit() {
  let self: PagesComponent = this;
  let b = this.service.getCachedPages();
  //console.log (b);

  if (b == null) {
      this.service.getPages()
          .subscribe(


              function(pages) {
                  self.pages = pages;
                  self.service.setCachedPages(self.pages);
                  console.log(self.pages);
              },

              error => {
                  alert('An error occured');
                  console.log(error);

              },


          )

  } else {
      this.pages = b;
  }
}

};