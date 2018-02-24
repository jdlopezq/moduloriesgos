import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestOptionsArgs, RequestOptions, RequestMethod, Response } from '@angular/http';
import {
  MatSort, MatTableDataSource, MatPaginator, MatSnackBar, MatHorizontalStepper, MatStep, MatFormField
} from '@angular/material';
import { PhpService } from '../../services/php.service';
import { dataDemo } from '../../shared/data.model';
import { Observable } from 'rxjs/Rx';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { UtilityService } from '../../services/utility.service';


@Component({
  selector: 'app-selecvariables',
  templateUrl: './selecvariables.component.html',
  styleUrls: ['./selecvariables.component.css']
})
export class SelecvariablesComponent {
  displayedColumns = ['NombreCampo', 'NombreQuery', 'Borrar',];
  obtencionVariables: any
  dataSource: any
  dataAutoComple: any
  cargaVariables = new Element();
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  myControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;
  options = [];



  constructor(private dataImport: PhpService, public snackBar: MatSnackBar,
    private router: Router, private utility: UtilityService, private _formBuilder: FormBuilder) {
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
    //asigancion de datos
    this.dataSource = new MatTableDataSource();
    this.getVariables();
    this.getAutoInf();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
    //control de sesion
    this.utility.isLogged().then((result:boolean)=>{
      if (result) {
      console.log("esta log")
    }});

    //validacioes de formulario
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }

  //filtro de autocompletado
  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }


  getVariables() {
    this.dataImport
      .getItem("prueba2.php")
      .subscribe(Qvar => {
        this.obtencionVariables = Qvar;
        this.dataSource = this.obtencionVariables;
        console.log(this.obtencionVariables)
      })
  }

  AgregarVariable() {
    this.dataImport.addItem(JSON.stringify(this.cargaVariables), "prueba.php")
      .subscribe(
        (res) => {
          res;
          this.obtencionVariables = res;
          this.getVariables()
          console.log(this.dataImport.answerInfo)
          this.openSnackBar("¡Atención!", this.dataImport.answerInfo[1].info)
        });


  }

  deleteItem(id) {

    this.dataImport
      .deleteItem(id)
      .subscribe(() => {
        this.getVariables();
      })

  }

  getAutoInf() {
    this.dataImport.getItem("prueba4.php").subscribe((Response) => {
      Response;
      this.options = Response;
    });
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
  code: string = '12';
}

