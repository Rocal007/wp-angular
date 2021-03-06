import { WpPostsService } from './../services/wp-posts/wp-posts.service';
import { Component, OnInit, Input } from '@angular/core';
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
        @Input() postId: any[];

        constructor(private service: WpPostsService) {
         
            };

            getData(id1,id2,id3,id4,id5) {
                
                let postsList = this.service.getPost([id1, id2, id3, id4, id5]);
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