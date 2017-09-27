import { WpPostsService } from './../services/wp-posts/wp-posts.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-buchungsplattform',
  templateUrl: './buchungsplattform.component.html',
  styleUrls: ['./buchungsplattform.component.css']
})
export class BuchungsplattformComponent implements OnInit {
  buchungsplattform: any[];
  data: any[];s
  
  constructor(private service: WpPostsService) { 

}

 getData(id) {
    
    var postsList = this.service.getPost([id]);
    console.log(postsList);
    return postsList;
}


ngOnInit() {
    let self: BuchungsplattformComponent = this;
    var b = this.service.getCachedPosts();
    //console.log (b);

    if (b == null) {
        this.service.getPosts()
            .subscribe(


                function(buchungsplattform) {
                    self.buchungsplattform = buchungsplattform;
                    self.service.setCachedPosts(self.buchungsplattform);
                    console.log(self.buchungsplattform);
                },

                error => {
                    alert('An error occured');
                    console.log(error);

                },


            )

    } else {
        this.buchungsplattform = b;
    }
}




};