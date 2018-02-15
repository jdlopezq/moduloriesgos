import {Component } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { PhpService } from '../../services/php.service';

@Component({
  selector: 'app-php-component',
  templateUrl: './php-component.component.html',
  styleUrls: ['./php-component.component.css']
})
export class PhpComponentComponent{
 data: any;
  dataPHP:any;
  

  public constructor(private dataImport:PhpService) {
     
  }
  ngOnInit() {
    this.dataImport.getDataPHP().subscribe(data => {
      this.dataPHP = data.arrayBuffer();
     console.log(this.dataPHP)
      
      
    }); 
  
   this.dataImport.sendDataPHP(265)
  }



}
