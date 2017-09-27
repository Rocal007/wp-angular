import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WpPostsService {
  private url = 'http://www.heia-easy.com/wp-json/wp/v2/posts?per_page=100'
  private posts = null;
  constructor(private http: Http) { }
  
    getPosts() {

      return this.http.get(this.url)
      .map(res => res.json())
    }
    getCachedPosts(){
      return this.posts;
    }
    setCachedPosts(posts){
      this.posts=posts;
    }

    getPost(idArray){
      var posts = [];
      if(this.posts==null)return null;
      for(var i = 0; i< this.posts.length ; i++){
        for(var j = 0;j<idArray.length;j++){
          if(this.posts[i].id==idArray[j]){
            posts.push(this.posts[i]);
          }
        }
      }
      return posts;
    }

  }

