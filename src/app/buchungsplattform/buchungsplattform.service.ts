import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BuchungsplattformService {
  private url = 'http://www.heia-easy.com/wp-json/wp/v2/posts'
  private buchungsplattform = null;
  constructor(private http: Http) { }
  
    getBuchungsplattform() {

      return this.http.get(this.url)
      .map(res => res.json())
    }

    getCachedBuchungsplattform(){
      return this.buchungsplattform;
    }
    setCachedBuchungsplattform(buchungsplattform){
      this.buchungsplattform=buchungsplattform;
    }

    getBuchung(id){
      if(this.buchungsplattform==null)return null;
      for(var i = 0; i< this.buchungsplattform.length ; i++){
        if(this.buchungsplattform[i].id==id){
          return this.buchungsplattform[i];
        }
      }
    }

  }

