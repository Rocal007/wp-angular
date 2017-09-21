import { BuchungsplattformService } from './buchungsplattform.service';
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

  
  constructor(private service: BuchungsplattformService) { 


  }

  ngOnInit() {
    this.service.getBuchungsplattform()
    .subscribe(buchungsplattform => this.buchungsplattform = Array.of(buchungsplattform),
      
      error => {
        alert('An error occured');
        console.log(error);

    }

  );
      
     
  }
};
  

