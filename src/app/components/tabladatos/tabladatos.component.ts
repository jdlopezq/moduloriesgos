import { Component, OnInit, ViewChild } from '@angular/core';
import { dataDemo } from '../../shared/data.model';
import { error, log } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort, MatFormField, MAT_DIALOG_DATA, MatPaginator } from '@angular/material';
import { DataserviceService } from '../../services/dataservice.service';
import { LocaldataService } from '../../services/localdata.service';



@Component({
  selector: 'app-tabladatos',
  templateUrl: './tabladatos.component.html',
  styleUrls: ['./tabladatos.component.css']
})
export class TabladatosComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  datos:dataDemo[];
  displayedColumns = [];
  dataSource = new MatTableDataSource();

  dataDemo:dataDemo[];
  constructor(private dataService:DataserviceService) {
    
   }

   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
     this.dataService.getData().subscribe(datos=>{
      console.log(datos);
      this.dataDemo=datos;
      this.displayedColumns=datos.length>0?Object.keys(datos[0]):[];
      this.dataSource = new MatTableDataSource(datos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate
      
    });
    
  }

 

  
}
