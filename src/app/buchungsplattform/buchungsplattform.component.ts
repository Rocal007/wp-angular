import { BuchungsplattformService } from './buchungsplattform.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-buchungsplattform',
  templateUrl: './buchungsplattform.component.html',
  styleUrls: ['./buchungsplattform.component.css']
})
export class BuchungsplattformComponent implements OnInit {
  buchungsplattform: string[];

  
  constructor(private service: BuchungsplattformService) { 


  }

  ngOnInit() {
    this.service.getBuchungsplattform()
    .subscribe(response => {
     
      this.buchungsplattform = Array.of(response.json());
     
     
  })};
  
}
