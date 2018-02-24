import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { dataDemo } from '../shared/data.model';



@Injectable()
export class PhpService {
  dataImport: any;
  checkMe: any

  constructor(private http: Http) { }
  dataHttp: string = "http://10.191.225.154/server/";
  dataHttpTest: string = "http://localhost/test.php";
  answerInfo: any[];
  answerGet: any[];


  // getDataPHP(page) {
  //   return this.http.get(this.dataHttp+page)
  //     .map(Response => {
  //       Response;
  //       console.log(Response)
  //       this.answerGet = Response.json();
  //       return this.answerGet
  //     });
  // }


  addItem(info, page: string) {
    return this.http.post("http://10.191.225.154/server/" + page, info)
      .map((res) => {
        res;
        this.answerInfo = res.json(); 
        return this.answerInfo;
      });
  }

  getItem(page) {
    return this.http.get("http://10.191.225.154/server/" + page)
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
