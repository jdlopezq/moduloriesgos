import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import {Chart} from "chart.js";
import { PhpService } from '../../services/php.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
@Component({
  selector: 'app-antecedentes',
  templateUrl: './antecedentes.component.html',
  styleUrls: ['./antecedentes.component.css']
})
export class AntecedentesComponent implements OnInit  {

constructor(private dataPHP:PhpService){

}
@ViewChildren(BaseChartDirective) charts: QueryList<BaseChartDirective>;
dataImpo= new indice
labels=[]
dataICV=[]
hola=[]
ngOnInit(){
this.dataPHP.getItem("graphicsicv.php").subscribe(res=>{
  console.log(res[0]);
  this.dataImpo=res
this.labels=res
 //this.dataICV = res.length > 0 ? Object.values(res) : [];
  this.labels = res.length > 0 ? Object.keys(res) : [];

  this.labels.forEach(name => {
    this.dataICV.push(name)
  });

  for (let i = 0; i < this.dataICV.length; i++) {
    this.lineChartData=[{data:[this.dataImpo[i].icv], label:this.dataImpo[i].tipo1}]
this.lineChartLabels=[this.dataImpo[i].Date]
  }

 this.hola= this.charts.map(res=>{res; 
    console.log(res)}
   )

   console.log(this.hola)
console.log(this.charts)

 
//  this.charts._results[0].data= this.dataImpo[0]
//   this.charts._results[0].labels=this.dataImpo[0].tipo1
//   this.charts._results[0].ngOnInit()
})

}


 // lineChart
 lineChartData:Array<any> = [
   
  {data:[65, 59, 80, 81, 56, 55, 10], label: 'Series A'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
  {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
];
public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
public lineChartOptions:any = {
  responsive: true
};
public lineChartColors:Array<any> = [
];
public lineChartLegend:boolean = true;
public lineChartType:string = 'line';

 // events
 public chartClicked(e:any):void {
  console.log(e);
}




}

export class indice{
icv:string;
tipo1:string;
tipo2:string;
Date:string;
}