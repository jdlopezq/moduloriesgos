import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { dataDemo } from '../../shared/data.model';
import { error, log } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort, MatFormField, MAT_DIALOG_DATA, } from '@angular/material';
import { DataserviceService } from '../../services/dataservice.service';
import { PhpService } from '../../services/php.service';






@Component({
  selector: 'app-proyecciones',
  templateUrl: './proyecciones.component.html',
  styleUrls: ['./proyecciones.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProyeccionesComponent implements OnInit {
  dataDemo: dataDemo[];
  dataDB = [];
  dataDBn = [];
  totalVar = [];
  nameVar = [];
  changeChart: any
  dynamicHeight=true;

  chartsReady: boolean = true;


  constructor(private dataPHP: PhpService) {
  }




  ngOnInit() {

    this.getInfoCharts("graphics3.php")
  }



  getInfoCharts(a:string) {
    this.dataPHP.getItem(a).subscribe(datos => {

      if (datos.length == 0) {
        this.chartsReady = true;
        console.log('sin respuesta')
      } else {
        this.chartsReady = false
        console.log('cargados')
      };

      this.dataDB = datos.length > 0 ? Object.values(datos[0][1]) : [];
      this.dataDBn = datos.length > 0 ? Object.values(datos[0][0]) : [];
      datos.shift();
      this.dataDB.forEach((name, i) => {
        this.nameVar.push(datos[i].map(it => it[name]))
        this.totalVar.push(datos[i].map(it => it["Total"]))
      })
      console.log(this.nameVar);


    })
  }

  useOrnot(e){
    console.log(e)
  }



  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e: any, d: any): void {
    this.changeChart = JSON.stringify({ "array": e, "name": d, "code": 14 })
    this.dataPHP.addItem(this.changeChart, "graphicsp.php").subscribe(
      res => {
        res;
        console.log(res)
        this.getInfoCharts("graphicsp.php")
      }
    )
    console.log(this.changeChart)
    console.log(this.dataPHP.answerInfo)

  }

  public chartHovered(e: any): void {
    console.log(e);
  }





}


