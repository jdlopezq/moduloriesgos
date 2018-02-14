import { Component, OnInit, ViewChild } from '@angular/core';
import { dataDemo } from '../../Models/data.model';
import { error, log } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort, MatFormField, MAT_DIALOG_DATA } from '@angular/material';
import { DataserviceService } from '../../services/dataservice.service';
import { LocaldataService } from '../../services/localdata.service';
import { dataFake } from '../../Models/dataFake.model';




@Component({
  selector: 'app-proyecciones',
  templateUrl: './proyecciones.component.html',
  styleUrls: ['./proyecciones.component.css']
})
export class ProyeccionesComponent implements OnInit {
  dataDemo: dataDemo[];
  datalocal: any;
  rango1830: any;
  rango3140: any;
  rango5160: any;
  rango4150:any;



  constructor(private dataService: DataserviceService) {


  }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(resData => {
        this.dataDemo = resData;
        //this.rango6117=this.conteoDataFiltro(this.dataDemo)
        this.rango1830 = this.conteoDatos(this.dataDemo, 18, 30);
        this.rango3140=this.conteoDatos(this.dataDemo,31,40);
        this.rango4150=this.conteoDatos(this.dataDemo,41,50);
        this.rango5160=this.conteoDatos(this.dataDemo,51,60);
        
        this.doughnutChartData = [this.rango1830, this.rango3140, this.rango4150,this.rango5160]
      })
  }


conteoDataFiltro(data:any[]){
  return data.map(val => val.Edad).filter(value => {
    return value > 18 && value < 30
  }).length
}

  conteoDatos(arregloDatos:any[], rangoInf:number,rangoSup:number ) {
    let numero = 0;
    for (let contador of arregloDatos) {
      let edad = contador.Edad
      if (edad > rangoInf && edad <rangoSup) {
        numero++;
      }
    }
    return numero;
  }



  // Doughnut
  public doughnutChartLabels: string[] = ['Entre 18-30', "Entre 31-40", 'Entre 41-50', 'Entre 51-60'];
  public doughnutChartData: number[] = [20, 4, 5, 6];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {

    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  // PolarArea
  public polarAreaChartLabels: string[] = ['Tarjeta RIS', 'Credimoto', 'Mattis', 'Libranza', 'Aumento Cupo'];
  public polarAreaChartData: number[] = [300, 500, 100, 250, 120];
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


