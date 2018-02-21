import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { dataDemo } from '../shared/data.model';



@Injectable()
export class PhpService {
  dataImport: any;
  checkMe: any

  constructor(private http: Http) { }
  dataHttp: string = "http://10.191.225.154/logoogle/prueba.php";
  dataHttpTest: string = "http://localhost/test.php";
  respuestaInfo: any[];

  getDataPHP() {
    return this.http.get(this.dataHttp)
      .map(result => result.json());
  }


  addItem(info, page:string) {
    return this.http.post("http://10.191.225.154/server/"+page, info)
      .map((res) => {
        res;
        console.log(res)
        console.log(res.json());
        this.respuestaInfo = res.json();
        return this.respuestaInfo;
      });
  }

  getItem(carpeta) {
    return this.http.get("http://10.191.225.154/logoogle/" + carpeta)
      .map(res => {
        this.checkMe = res.json();

        if (this.checkMe._body !== "0") {
          return res.json()
        } else {
          return
        }
      });
  }

  deleteItem(id) {
    let body = { "id": id };
    return this.http.post("http://10.191.225.154/logoogle/prueba3.php", body)
      .map((res) => { this.getItem("prueba2.php"), res, console.log(res), console.log(body) });
  }



}
