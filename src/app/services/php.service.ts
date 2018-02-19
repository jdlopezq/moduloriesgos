import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions, RequestMethod } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { dataDemo } from '../shared/data.model';



@Injectable()
export class PhpService {
  dataImport: any;
  checkMe: any

  constructor(private http: Http) { }
  dataHttp: string = "http://10.191.225.154/logoogle/prueba.php";
  dataHttpTest: string = "http://localhost/test.php";
  respuesta: any;

  getDataPHP() {
    return this.http.get(this.dataHttp)
      .map(result => result.json());
  }


  addItem(info) {
    return this.http.post("http://10.191.225.154/logoogle/prueba.php", info)
      .map((res) => { res; console.log(res); this.httpCall(); console.log(res.status); if (res.status==200) {
        console.log('No cargo')
      } });
  }

  getItem() {
    return this.http.get("http://10.191.225.154/logoogle/prueba2.php")
      .map(res => {
        this.checkMe = res.json();
        console.log(res);
        

        if (this.checkMe._body !== "0") {
          return res.json()
        };
        this.httpCall()

      }

      );
  }

  deleteItem(id){
    return this.http.post("http://10.191.225.154/logoogle/prueba2.php", id)
      .map((res)=>{this.getItem(), res, console.log(res)});
  }

 
  
  deleteItemtes(id: string) {
    this.http.delete(this.dataHttp+ '/' + id).map(response => response.json()).subscribe(res => {
      this.httpCall();
    });
  }


  httpCall() {
    this.http.get(this.dataHttp).map(response => response.json()).subscribe(res => {
      console.log(res)
      this.dataImport=res
    });
  }


}
