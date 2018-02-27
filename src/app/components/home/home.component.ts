import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { Routes } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer ) {
    
   }

  ngOnInit() {
  
  }

}
