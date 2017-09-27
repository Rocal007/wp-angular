import { WpPostsService } from './../services/wp-posts/wp-posts.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
        
        posts: any; 
        data: any;
    
        constructor(private service: WpPostsService) {
         
            };

            getData(id,id2) {
                
                var postsList = this.service.getPost([id, id2]);
                console.log(postsList);
                return postsList;
            }
            


ngOnInit() {
    let self: PostsComponent = this;
    let b = this.service.getCachedPosts();
    //console.log (b);

    if (b == null) {
        this.service.getPosts()
            .subscribe(


                function(posts) {
                    self.posts = posts;
                    self.service.setCachedPosts(self.posts);
                    console.log(self.posts);
                },

                error => {
                    alert('An error occured');
                    console.log(error);

                },


            )

    } else {
        this.posts = b;
    }
}

};