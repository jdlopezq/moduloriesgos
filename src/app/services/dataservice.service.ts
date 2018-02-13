import { Injectable } from '@angular/core';
import { dataDemo } from "../Models/data.model"
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataserviceService {
  dataDemo: any[];
  dataHttp: string;

  constructor(private http: Http) {
  }

getData() {
    //return this.http.get("http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=1fe1c5c78d3fa3550f545b592c4614f3")
    //.map(result=> result)
    return this.http.get("https://jsonplaceholder.typicode.com/users")
    .map(result=> result)
  }

}
