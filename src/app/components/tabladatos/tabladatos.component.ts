import { Component, OnInit } from '@angular/core';
import { dataDemo } from '../../shared/data.model';
import { error, log } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort, MatFormField, MAT_DIALOG_DATA } from '@angular/material';
import { DataserviceService } from '../../services/dataservice.service';
import { LocaldataService } from '../../services/localdata.service';



@Component({
  selector: 'app-tabladatos',
  templateUrl: './tabladatos.component.html',
  styleUrls: ['./tabladatos.component.css']
})
export class TabladatosComponent implements OnInit {
  datos:dataDemo[];
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource();

  dataDemo:dataDemo[];
  constructor(private dataService:DataserviceService) {
    
   }

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
