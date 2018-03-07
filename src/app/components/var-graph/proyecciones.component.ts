import { Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit, OnChanges } from '@angular/core';
import { dataDemo } from '../../shared/data.model';
import { error, log } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort, MatFormField, MAT_DIALOG_DATA, MatTabChangeEvent, MatSlideToggle, MatSlideToggleChange, } from '@angular/material';
import { DataserviceService } from '../../services/dataservice.service';
import { PhpService, dataInfo } from '../../services/php.service';







@Component({
  selector: 'app-proyecciones',
  templateUrl: './proyecciones.component.html',
  styleUrls: ['./proyecciones.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProyeccionesComponent implements OnInit {
  Scolor = "primary"
  dataDB = [];
  dataDBn = [];
  totalVar = [];
  nameVar = [];
  changeChart: any
  changeChartTab: number
  dynamicHeight = true;


  chartsReady: boolean = true;


  constructor(private dataPHP: PhpService) {
  }

  ngOnInit() {

  }



  getInfoCharts(a: string) {
    console.log(a)
    this.dataPHP.getItem(a).subscribe(datos => {
     // console.log(datos)
      if (datos.length == 0) {
        this.chartsReady = true;
        console.log('sin respuesta')
      } else {
        this.chartsReady = false
        console.log('cargados')
      };
      this.nameVar = [];
      this.totalVar = [];
      this.dataDB = datos.length > 0 ? Object.values(datos[0][1]) : [];
      this.dataDBn = datos.length > 0 ? Object.values(datos[0][0]) : [];
      datos.shift();
      this.dataDB.forEach((name, i) => {
        this.nameVar.push(datos[i].map(it => it[name]))
        this.totalVar.push(datos[i].map(it => it["Total"]))
      })

      // console.log(this.nameVar);
      // console.log(this.totalVar);


    })
  }




  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    if (tabChangeEvent.index == 0) {
      this.changeChartTab = tabChangeEvent.index
      this.getInfoCharts("graphics.php")
    } else if (tabChangeEvent.index == 1) {
      this.changeChartTab = tabChangeEvent.index
      this.getInfoCharts("graphicsc.php")
    } else if (tabChangeEvent.index == 2) {
      this.changeChartTab = tabChangeEvent.index
      this.getInfoCharts("graphicscv.php")
    }
    //console.log('index => ', tabChangeEvent);
  }

  test(e) {
    console.log(e)
  }

  useOrnot(f, a: string, e: string, d: string) {
    this.changeChartTab
   // console.log(f.checked)
    if (f.checked) {
      this.changeChart = JSON.stringify({ "array": e, "name": d, "code": 15 })
    } else {
      this.changeChart = JSON.stringify({ "array": e, "name": d, "code": 14 })
    }



    this.dataPHP.graphRnew(this.changeChart, a).subscribe(
      datos => {
        
       
        console.log("Respuesta graficas: ")
        console.log(datos);
        this.dataDBn = datos.length > 0 ? Object.values(datos[0][0]) : [];
        this.dataDB = datos.length > 0 ? Object.values(datos[0][1]) : [];
        this.nameVar = [];
        this.totalVar = [];
        datos.shift();
        this.dataDB.forEach((name, i) => {
          this.nameVar.push(datos[i].map(it=>it[name]))
          this.totalVar.push(datos[i].map(it => it["Total"]))

        })
          console.log(this.nameVar.length);
      console.log(this.totalVar.length);
      })
    console.log(this.dataDBn)
    console.log(this.dataDB)
    console.log(this.changeChart)
  }



  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];
  public doughnutChartType: string = 'doughnut';

  // events
  // public chartClicked(e: any, d: any): void {
  //   console.log(e);
  // }

  // public chartHovered(e: any): void {
  //   console.log(e);
  // }





}


