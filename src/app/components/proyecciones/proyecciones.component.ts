import { Component, OnInit, ViewChild } from '@angular/core';
import { dataDemo } from '../../Models/data.model';
import { error, log } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort, MatFormField, MAT_DIALOG_DATA } from '@angular/material';
import { DataserviceService } from '../../services/dataservice.service';
import { LocaldataService } from '../../services/localdata.service';




@Component({
  selector: 'app-proyecciones',
  templateUrl: './proyecciones.component.html',
  styleUrls: ['./proyecciones.component.css']
})
export class ProyeccionesComponent {
  dataDemo: any[]=[];
  datalocal:any;
  Rango2030: number = 30;

  constructor(private dataService:DataserviceService) {
    this.dataService.getData()
    .subscribe(resData => {
      this.dataDemo = resData;
      console.log(this.dataDemo);
      for (var i in this.dataDemo) {
        console.log(this.dataDemo[i].Analista)
      }
    
    })


   }





  ngOnInit() {
    
   
  }


  conteoDatos() {
for (let i of this.datalocal) {
  console.log(this.datalocal[i])
}
  }

  // Doughnut
  public doughnutChartLabels: string[] = ['Tarjeta RIS', 'Mattis', 'CrediMoto', 'Libranza'];
  public doughnutChartData: number[] = [this.Rango2030, 4, 5, 6];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  // PolarArea
  public polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend: boolean = true;

  public polarAreaChartType: string = 'polarArea';

  // events
  public chartClickedPolar(e: any): void {
    console.log(e);
  }

  public chartHoveredPolar(e: any): void {
    console.log(e);
  }

  // Radar
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  public radarChartType: string = 'radar';

  // events
  public chartClickedRadar(e: any): void {
    console.log(e);
  }

  public chartHoveredRadar(e: any): void {
    console.log(e);
  }

}
