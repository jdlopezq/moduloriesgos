import { Component, OnInit, ViewChild } from '@angular/core';

import { dataDemo } from '../../Models/data.model';
import { error, log } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort, MatFormField, MAT_DIALOG_DATA } from '@angular/material';
import { DataserviceService } from '../../services/dataservice.service';




@Component({
  selector: 'app-proyecciones',
  templateUrl: './proyecciones.component.html',
  styleUrls: ['./proyecciones.component.css']
})
export class ProyeccionesComponent {
  datoDemografico: any[];
  dato: any;
  
  constructor(private dataService: DataserviceService) {
this.dataService.getData().subscribe(data => 
      {console.log(data); this.datoDemografico = data.[];})
  console.log(this.datoDemografico[1])
}
  

  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales','Hola'];
  public doughnutChartData: number[] = [3, 4, 5, 6];
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
