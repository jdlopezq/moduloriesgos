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
  rango1823: any;
  rango2430: any;
  rango3140: any;
  rango5160: any;
  rango4150: any;
  Ncedula:any;
  Nit:any;



  constructor(private dataService: DataserviceService) {


  }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(resData => {
        this.dataDemo = resData;
        //this.rango6117=this.conteoDataFiltro(this.dataDemo)
        this.rango1823 = this.conteoDatos(this.dataDemo, 18, 23, 'edad').datos;
        this.rango2430 = this.conteoDatos(this.dataDemo, 24, 30, 'edad').datos;
        this.rango3140 = this.conteoDatos(this.dataDemo, 31, 40, 'edad').datos;
        this.rango4150 = this.conteoDatos(this.dataDemo, 41, 50, 'edad').datos;
        this.rango5160 = this.conteoDatos(this.dataDemo, 51, 67, 'edad').datos;
        this.Ncedula=this.conteoDatos(this.dataDemo, 0,0,'Tipo de documento').datos2
        this.Nit=this.conteoDatos(this.dataDemo, 0,0,'Tipo de documento').datos
        this.doughnutChartData = [this.rango1823, this.rango2430, this.rango3140, this.rango4150, this.rango5160]
      this.polarAreaChartData=[this.Nit, this.Ncedula]
      })
  }


  conteoDataFiltro(data: any[]) {
    return data.map(val => val.Edad).filter(value => {
      return value > 18 && value < 30
    }).length
  }

  conteoDatos(arregloDatos: dataDemo[], rangoInf: number, rangoSup: number, variable: string) {
    let numero1 = 0;
    let numero2= 0;
    switch (variable) {
      case 'edad':
        for (let contador of arregloDatos) {  
          let edad = contador.Edad
          if (edad > rangoInf && edad < rangoSup) {
            numero1++;
          }
        }
        break;
      case 'Tipo de documento':
        for (let contador of arregloDatos) {
          let TipoDocumento = contador.TipoDocumento
          if (TipoDocumento=='NIT') {
            numero1++;
          }else{
            numero2++;
          }
        }
        break;

      default:
        break;
    }

    return {datos:numero1, datos2:numero2}
  }



  // Doughnut
  public doughnutChartLabels: string[] = ['Entre 18-23', 'Entre 24-30', "Entre 31-40", 'Entre 41-50', 'Entre 51-67'];
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
  public polarAreaChartLabels: string[] = ['Cedula', 'NIT'];
  public polarAreaChartData: number[] = [300, 500];
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


