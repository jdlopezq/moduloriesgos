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
  labels = []
  dataICV = [[new indice]]
  objectGen=[{data:[],label:[]}]


  ngOnInit() {
    this.dataPHP.getItem("graphicsicv.php").subscribe(datos => {
      //console.log(datos);
      this.dataImpo = datos
      this.labels = datos.length > 0 ? Object.values(datos[0]) : [];
      datos.shift();
      //  this.dataImpo = datos.length > 0 ? Object.values(datos) : [];

      this.dataICV = datos




      for (let i = 0; i < this.dataICV.length; i++) {
        let dates = []
        let data = []
        let label = []
        for (let j = 0; j < this.dataICV[i].length; j++) {
          this.objectGen[i]
          let datanu = this.dataICV[i][j].icv
          let datesn = this.dataICV[i][j].Date
          let labeln = this.dataICV[i][j].tipo2
          dates[j] = datesn
          data[j] = datanu
          label[j]=labeln

          this.lineChartData[i] = [
            {data: data, label:label[i]}, 
            {data: data, label:label[i]}
          ]
          this.lineChartLabels[i] = dates
        }
        //console.log(data)
        console.log(this.objectGen)
        //console.log(this.lineChartData[i])
      }



    })

  }


  // lineChart
  lineChartData: Array<any> = [

    { data: [14.32, 14.03, 13.55, 13.62, 13.66, 13.65, 13.7, 13.54], label: 'General' },
  ];
  public lineChartLabels: Array<any> = [];

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
  tipo2: string;
  Date: string;
}