import { WpPostsService } from './../services/wp-posts/wp-posts.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
        
        posts: any; 
    
        constructor(private service: WpPostsService) {
         
            };

   

  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      console.log(response.json());
      this.posts = response.json();      
  })}}