import { Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSort,MatTableDataSource, MatPaginator } from '@angular/material';
import { PhpService } from '../../services/php.service';
import { dataDemo } from '../../shared/data.model';


@Component({
  selector: 'app-selecvariables',
  templateUrl: './selecvariables.component.html',
  styleUrls: ['./selecvariables.component.css']
})
export class SelecvariablesComponent{
displayedColumns = ['NombreCampo', 'NombreQuery', 'Borrar',];
dataSource = new MatTableDataSource(ELEMENT_DATA);
dataPHP:any;
cargaVariables=new Element() ; 
obtencionVariables:any ;

constructor(private dataImport:PhpService){
 
}

@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;

/**
 * Set the sort after the view init since this component will
 * be able to query its view for the initialized sort.
 */
ngAfterViewInit() {
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
}

ngOnInit() {
  this.dataImport.addEmployee(JSON.stringify(this.cargaVariables))
    .subscribe((hola) => {
      this.dataPHP=hola;
      console.log(this.dataPHP)
    });
    this.dataImport.getEmployees()
    .subscribe(employees => {
     this.obtencionVariables = employees;
      console.log(this.obtencionVariables)
    })
}
AgregarVariable(){
  this.dataImport.addEmployee(this.cargaVariables).subscribe((res)=>{res; console.log(res)})}



}

export class Element {
  name: string;
  qname: string; 
}

const ELEMENT_DATA:Element[]=[{name:'Tipo de Documento',qname:'TipoDocumento' },
            
        ]
