import { Injectable } from '@angular/core';
import { dataDemo } from "../Models/data.model"
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs/observable"
import 'rxjs/add/operator/map';


@Injectable()
export class DataserviceService {
  dataDemo: any[];
  dataHttp: string="http://localhost:3000/datos";
  dataFile: string="/assets/data/fake.json"
  

  constructor(private http: Http) {
    console.log("Servicio listo para usar")
  }

  getData() {
    return this.http.get(this.dataHttp)
      .map(result => result.json())
  }

}
