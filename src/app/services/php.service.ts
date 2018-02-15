import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class PhpService {

  constructor(private http: Http) { }
  dataHttp: string = "http://10.191.225.154/logoogle/prueba.php";
  getDataPHP() {
    return this.http.get(this.dataHttp)
      .map(response => response
    );
  }


  sendDataPHP(datasend: any) {
    this.http.post('http://10.191.225.154/logoogle/prueba.php', {datasend})
      .subscribe((data) => { console.log('Se subieron datos', data); },
        (error) => { console.log('Error ', error) })
  }


}
