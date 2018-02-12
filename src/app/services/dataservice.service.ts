import { Injectable } from '@angular/core';
import { dataDemo } from "../Models/data.model"
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataserviceService  {
dataDemo:dataDemo[];
dataHttp:string;
subject = new BehaviorSubject<dataDemo[]>(this.dataDemo)
constructor(private http:Http){ 
  this.dataHttp=' http://localhost:3000/demoData'
  

  }

  getdataDemo(){
    this.http.get(this.dataHttp).map(response=>response.json()).subscribe(res=>{
      console.log(res);
       this.dataDemo=res; 
       this.subject.next(this.dataDemo);  
       });
   
  }

}
