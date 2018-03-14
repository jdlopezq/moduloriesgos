import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Chart } from "chart.js";
import { PhpService } from '../../services/php.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-antecedentes',
  templateUrl: './antecedentes.component.html',
  styleUrls: ['./antecedentes.component.css']
})
export class AntecedentesComponent implements OnInit {

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor(private dataPHP: PhpService) {

  }
  @ViewChildren(BaseChartDirective) charts: QueryList<BaseChartDirective>;
  dataImpo = []
  labels
  dataICV = []
  objectGen = []
  keyvalue=[];
  dataSet=[]


  ngOnInit() {
    this.dataPHP.getItem("graphicsicv.php").subscribe(datos => {
      console.log(datos);
      this.dataImpo = datos
      this.labels = datos.length > 0 ? Object.values(datos[0]) : [];

      for (let i = 1; i < this.dataImpo.length; i++) {
        this.dataICV[i] = Object.values(this.dataImpo[i][i])
         this.keyvalue[i] = Object.keys(this.dataImpo[i][i])
      }
   


      this.dataICV.shift()
      this.keyvalue.shift()
    
      for (let i = 0; i < this.dataICV.length; i++) {
        for (let j = 0; j < this.dataICV[i].length; j++) {
          this.objectGen[i]=[{data:this.dataICV[i][j].icv, label:this.keyvalue[i][j]}]
          //console.log(this.dataICV[i][j].icv)
          //console.log(this.keyvalue[i][j])
          
        }
        console.log(this.objectGen[i])
      }    


for (let i = 0; i < this.dataICV.length; i++) {
  for (let j = 0; j < this.dataICV[i].length; j++) {
    this.lineChartData[i]=this.objectGen[i]
      this.lineChartLabels[i]=this.dataICV[i][j].Date 
  }
}
      
      console.log(this.objectGen)
  console.log(this.dataSet)
     
      console.log(this.charts)
    })

  }


  // lineChart
  lineChartData: Array<any> = [

    { data: ["14.32"], label: 'Sin Grafica' },
  ];
  public lineChartLabels: Array<any> = ["2017-06-30"];

  public lineChartOptions: any = {
    responsive: true,
    fill: false,
  };
  public lineChartColors: Array<any> = [
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }




}

export class indice {
  icv: string;
  Date: string;
}