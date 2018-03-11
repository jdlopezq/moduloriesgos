import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  displayedColumns = ['NombreCampo', 'Kclient', "Capital", "Capital Vencido", "Eliminar"];
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
  myColor = "#006400"
  checked=false
  deleteId:any
  next=true;



  constructor(private dataImport: PhpService, public snackBar: MatSnackBar,
    private router: Router, private utility: UtilityService, private _formBuilder: FormBuilder) {
  }

  @ViewChild(MatSort) sort: MatSort;


  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  

  }
test(){
  console.log(this.firstFormGroup)
  console.log(this.secondFormGroup)
  console.log(this.cargaVariables)
  if(this.cargaVariables.m1==false&&this.cargaVariables.m2==false&&this.cargaVariables.m3==false){
  this.next=true
  
  console.log(this.cargaVariables)
}else{
  this.next=false
}
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
      firstCtrl: ["",  Validators.required]
    });
  
    this.secondFormGroup = this._formBuilder.group({
    
     m1: ["touched", Validators.required],
       m2: [null, Validators.required],
      m3: [null, Validators.required],
    });


  }


  changeState(e, a, i, x) {
    console.log(x)
    if (a == true) {
      a = 0
    } else{
      a = 1
    }

    switch (i) {
      case 1:
        this.editVar = JSON.stringify({ "id": e, "m1": a, "code": 10 })
        console.log("cliente")
        break;
      case 2:
        this.editVar = JSON.stringify({ "id": e, "m2": a, "code": 10 })
        console.log("capital")
        break;
      case 3:
        this.editVar = JSON.stringify({ "id": e, "m3": a, "code": 10 })
        console.log("vencido")
        break;
    }


    this.dataImport.addItem(this.editVar, "select.php").subscribe(
      res => {
        this.obtencionVariables = res;
        //console.log(res)
        this.openSnackBar("¡Atención!", this.dataImport.answerInfo.info)
this.editVar=[]
      }
    )
    console.log(this.editVar)

  }


refershVar(){
  this.getVariables()
}


  getVariables() {
    this.dataImport
      .getItem("select.php")
      .subscribe(Qvar => {
        console.log(Qvar)
        this.options = Qvar[0]
        this.obtencionVariables = Qvar[1];
        this.dataSource = this.obtencionVariables;
        
      })
  }

  AgregarVariable() {
    console.log(this.cargaVariables)
    this.dataImport.addItem(JSON.stringify(this.cargaVariables), "select.php")
      .subscribe(
        (res) => {
          res;
          // console.log(res[0])
          this.obtencionVariables = res;
          this.getVariables()
          this.openSnackBar("¡Atención!", this.dataImport.answerInfo.info)
        });
  }

  deleteItem(id) {
    console.log(id)
    this.deleteId={"id":id, "code":18}
    console.log(this.deleteId)
    console.log("prueba a")
    this.dataImport.addItem(JSON.stringify(this.deleteId), "select.php")
      .subscribe(
        (res) => {
          res;
          // console.log(res[0])
          this.obtencionVariables = res;
          this.getVariables()
          this.openSnackBar("¡Atención!", this.dataImport.answerInfo.info)
        });


  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


}


export class editItem {
  Name: string;
  m1: boolean = false;
  m2: boolean = false;
  m3: boolean = false;
  code: string = '12';
}

export class addItem {
  Name: string;
  m1: boolean = false;
  m2: boolean = false;
  m3: boolean = false;
  code: string = '12';
}

