import { Injectable, OnInit } from '@angular/core';
import { dataDemo } from "../shared/data.model"
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs/observable"
import 'rxjs/add/operator/map';
import { dataFake } from '../shared/dataFake.model';


@Injectable()
export class DataserviceService implements OnInit {
  dataDemo: dataDemo;
  dataHttp: string = "http://localhost:3000/datos";
  dataFile: string = "../../assets/data/fake.json"

  

  constructor(private http: Http) {
  }

  getData() {
    return this.http.get(this.dataFile)
    .map(result => result.json())
  }

  ngOnInit() {

  }
  

  //buscarRegistros(termino:string){
    //let arrData:dataDemo[]=[]
    //termino=termino.toLowerCase();
    //for (let datosarreglo of this.dataDemo){
      //let nombre=datosarreglo.NombreCompleto.toLowerCase();
      //if (nombre.indexOf(termino)>=0){
      //  arrData.push(datosarreglo)
      //}
    //}
    // return arrData;
  //}
  

}

