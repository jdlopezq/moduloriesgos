import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { dataDemo } from '../shared/data.model';



@Injectable()
export class PhpService {
  dataImport:any;
  checkMe:any
 
  constructor(private http: Http) { }
  dataHttp: string = "http://10.191.225.154/logoogle/prueba.php";
  dataHttpTest: string = "http://localhost/test.php";
  respuesta:any;
 
  getDataPHP() {
    return this.http.get(this.dataHttp)
    .map(result => result.json());
  }

  sendDataPHP(id) {
    return this.http.post("http://10.191.225.154/logoogle/prueba.php",{'id':id})
    .map(res => res.json());
      //.subscribe((data) => {
        //console.log('Se subieron datos', data,  id);
      //},
        //(error) => { console.log('Error ', error) })


   // console.log(datasend);

  }

  addEmployee(info){
    return this.http.post("http://10.191.225.154/logoogle/prueba.php",info)
      .map((res)=>{res; console.log(res);});
  }

  getEmployees(){
    return this.http.get("http://10.191.225.154/logoogle/prueba.php")
      .map(res=>{
        this.checkMe = res;
        console.log(res)
        }
       
      );
  }

}
