import { Injectable } from '@angular/core';
import { Http, Headers, Response, HttpModule } from '@angular/http';
import { dataDemo } from '../shared/data.model';
import { FileItem } from '../shared/file.model';



@Injectable()
export class PhpService {
  dataImport: any;
  checkMe: any
  graphResp:any

  constructor(private http: Http) { }
   dataHttp: string = "//10.191.225.154/server/";
 // dataHttp:string="//192.168.1.107/server/";
  ataHttpTest: string = "../backEnd/";
  answerInfo= new dataInfo;
  answerGet: any[];
  filetosend:any


  // getDataPHP(page) {
  //   return this.http.get(this.dataHttp+page)
  //     .map(Response => {
  //       Response;
  //       console.log(Response)
  //       this.answerGet = Response.json();
  //       return this.answerGet
  //     });
  // }
  

//   postFile(fileToUpload: File) {
//     const endpoint = '//10.191.225.154/server/cargar.php';
//     const formData: FormData = new FormData();
//     formData.append('fileKey', fileToUpload, fileToUpload.name);
//     console.log(formData.append('fileKey', fileToUpload, fileToUpload.name))
//     return this.http
//       .post(endpoint, formData)
//       .map(() => { return true; })
      
// }



loadFile(file, page:string){

// this.filetosend=JSON.stringify({n:"25"} )
 console.log(file)


  return this.http.post(this.dataHttp +page,  file)
  .map((res) => {
    res;
    console.log(res)
    this.answerInfo = res.json(); 
    return this.answerInfo;
  });
}


graphRnew(info, page: string) {
  return this.http.post(this.dataHttp + page, info)
    .map((res) => {
      res;
      this.graphResp=res.json()
     //console.log(this.graphResp)
     return this.graphResp
    });
}


downloadItem(info, page: string) {
  
  return this.http.post(this.dataHttp + page, info)
    .map((response) => { // download file

      console.log(response)
      var blob = new Blob([(<any>response)._body], { type: "aplication/vnd.ms-exel" });
      var filename = 'file.pdf';
      console.log(blob)
     return blob
}
      
    );
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
        console.log(res)
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
