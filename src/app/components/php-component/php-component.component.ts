import { Component } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { PhpService } from '../../services/php.service';
import { dataDemo } from "../../shared/data.model";

@Component({
  selector: 'app-php-component',
  templateUrl: './php-component.component.html',
  styleUrls: ['./php-component.component.css']
})
export class PhpComponentComponent {
  data: any;
  dataPHP: any;

  //dataSend: number =JSON.stringify({}) ;



  constructor(private dataImport: PhpService,
    private router: Router) { }
  model:dataDemo[];
  prueba:any = {name: 'funciona',
    position:'juan',
    department: 'string',
    salary: 'string',
  code: '12'}
  ngOnInit() {
    this.dataImport.addItem(JSON.stringify(this.model))
      .subscribe((hola) => {
        this.dataPHP=hola;
        console.log(this.prueba)
      });
  
  this.dataImport.getItem("prueba2.php")
    .subscribe(employees => {
     // this.model = employees;
      console.log(this.model)
    })
}
    // this.dataImport.sendDataPHP(this.dataSend)
    //this.dataImport.aend(this.dataSend)

    //this.dataImport.getDataPHP().subscribe(data => {
    //this.dataPHP = data;
    //console.log(this.dataPHP)
    //});
  }
  

