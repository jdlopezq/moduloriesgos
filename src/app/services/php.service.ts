import { Injectable } from '@angular/core';
import { Http, Headers, Response, HttpModule } from '@angular/http';
import { dataDemo } from '../shared/data.model';
import { FileItem } from '../shared/file.model';



@Injectable()
export class PhpService {
  dataImport: any;
  checkMe: any

  constructor(private http: Http) { }
  dataHttp: string = "//10.191.225.154/server/";
  dataHttpTest: string = "../backEnd/";
  answerInfo= new dataInfo;
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

loadFile(file:FileItem[], page:string){
  console.log(file);
  return this.http.post(this.dataHttp + page, file)
  .map((res) => {
    res;
    this.answerInfo = res.json(); 
    return this.answerInfo;
  });
}



  addItem(info, page: string) {
    return this.http.post(this.dataHttp + page, info)
      .map((res) => {
        res;
        this.answerInfo = res.json(); 
        return this.answerInfo;
      });
  }

  getItem(page) {
    return this.http.get(this.dataHttp + page)
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
    return this.http.post("http://10.191.225.154/", body)
      .map((res) => { this.getItem("prueba2.php"), res, console.log(res), console.log(body) });
  }



}

export class dataInfo{
  info:string
}
