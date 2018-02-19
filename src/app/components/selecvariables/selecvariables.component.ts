import { Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {RequestOptionsArgs, RequestOptions, RequestMethod } from '@angular/http';
import { MatSort,MatTableDataSource, MatPaginator, MatSnackBar, MatHorizontalStepper, MatStep, MatFormField
 } from '@angular/material';
import { PhpService } from '../../services/php.service';
import { dataDemo } from '../../shared/data.model';
import {Observable} from 'rxjs/Rx';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-selecvariables', 
  templateUrl: './selecvariables.component.html',
  styleUrls: ['./selecvariables.component.css']
})
export class SelecvariablesComponent{   
displayedColumns = ['NombreCampo', 'NombreQuery', 'Borrar',];
obtencionVariables:any
dataSource:any 
dataPHP:any;
cargaVariables=new Element() ; 
isLinear = false;
firstFormGroup: FormGroup;
secondFormGroup: FormGroup;


constructor(private dataImport:PhpService, public snackBar: MatSnackBar, private _formBuilder: FormBuilder ){
 
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
  this.dataSource=new MatTableDataSource();
  this.getVariables();
  this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });

}
getVariables(){
  this.dataImport
     .getItem() 
     .subscribe(employees => {
       this.obtencionVariables = employees;
       this.dataSource=this.obtencionVariables;
       console.log(employees)
       console.log(this.obtencionVariables)
   } )
}

AgregarVariable(){
  this.dataImport.addItem(JSON.stringify(this.cargaVariables)).subscribe((res)=>{res; console.log(res);
  console.log(this.cargaVariables), this.obtencionVariables=res;})
}

deleteItem(){
  let body:Element = {name:'Asesor', qname:'Asesor',code:'2'};
  this.dataImport.deleteItem(body).subscribe((res)=>console.log(res));

}


openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 2000,
  });
}


}



export class Element {
  name: string;
  qname: string;
  code: string='12';
}

