import { Component, OnInit } from '@angular/core';
import { dataDemo } from '../../Models/data.model';
import { error, log } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort, MatFormField, MAT_DIALOG_DATA } from '@angular/material';
import { DataserviceService } from '../../services/dataservice.service';
import { LocaldataService } from '../../services/localdata.service';
import { dataFake } from '../../Models/dataFake.model';

@Component({
  selector: 'app-tabladatos',
  templateUrl: './tabladatos.component.html',
  styleUrls: ['./tabladatos.component.css']
})
export class TabladatosComponent implements OnInit {

  dataDemo:dataDemo[];
  constructor(private dataService:DataserviceService) { }

  ngOnInit() {
     this.dataService.getData().subscribe(datos=>{
      console.log(datos);
      this.dataDemo=datos;
    })
  }

  buscarRegistro(termino:string){
    console.log(termino);
  }

  
}
