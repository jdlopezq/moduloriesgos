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
  displayedColumns = ['NombreCampo', 'Kclient', "Capital", "Capital Vencido"];
  obtencionVariables: any
  editVar: any
  dataSource: any
  dataAutoComple: any
  cargaVariables = new addItem();
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  myControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;
  options = [];
  myColor="#006400"



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
    this.getVariables();
    this.dataSource = new MatTableDataSource();

    // this.getAutoInf();

    //control de sesion
    this.utility.isLogged().then((result: boolean) => {
      if (result) {
        console.log("is log")
      } else { console.log("isnt log") }
    });

    //validacioes de formulario
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.cargaVariables.Names, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      m1: [this.cargaVariables.m1, Validators.required],
      m2: [this.cargaVariables.m2, Validators.required],
      m3: [this.cargaVariables.m3, Validators.required],
    });


  }


  changeState(e, a) {

    this.editVar = JSON.stringify({ "id": e, "m3": !a, "code": 10 })
    this.dataImport.addItem(this.editVar, "select.php").subscribe(
      res=>{
        this.obtencionVariables=res;
        
        this.openSnackBar("¡Atención!", this.dataImport.answerInfo.info)

      }
    )
    console.log(this.editVar)

  }


  getVariables() {
    this.dataImport
      .getItem("select.php")
      .subscribe(Qvar => {
        console.log(Qvar)
        this.options = Qvar[0]
        this.obtencionVariables = Qvar[1];
        this.dataSource = this.obtencionVariables;
        console.log(this.obtencionVariables)
      })
  }

  AgregarVariable() {
    console.log(this.cargaVariables)
    this.dataImport.addItem(JSON.stringify(this.cargaVariables), "select.php")
      .subscribe(
        (res) => {
          res;
          this.obtencionVariables = res;
          this.getVariables()
          console.log(this.dataImport.answerInfo)
          this.openSnackBar("¡Atención!", this.dataImport.answerInfo.info)
        });


  }

  deleteItem(id) {

    this.dataImport
      .deleteItem(id)
      .subscribe(() => {
        this.getVariables();
      })

  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


}


export class editItem {
  Names: string;
  m1: boolean = false;
  m2: boolean = false;
  m3: boolean = false;
  code: string = '12';
}

export class addItem {
  Names: string;
  m1=0;
  m2=0;
  m3=0;
  code: string = '12';
}

