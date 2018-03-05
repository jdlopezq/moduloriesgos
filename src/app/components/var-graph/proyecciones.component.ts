import { Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { dataDemo } from '../../shared/data.model';
import { error, log } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort, MatFormField, MAT_DIALOG_DATA, MatTabChangeEvent, } from '@angular/material';
import { DataserviceService } from '../../services/dataservice.service';
import { PhpService, dataInfo } from '../../services/php.service';
import { get } from 'http';






@Component({
  selector: 'app-proyecciones',
  templateUrl: './proyecciones.component.html',
  styleUrls: ['./proyecciones.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProyeccionesComponent implements OnInit {
  Scolor="primary"
  dataDB = [];
  dataDBn = [];
  totalVar = [];
  nameVar = [];
  changeChart: any
  dynamicHeight = true;

  chartsReady: boolean = true;


  constructor(private dataPHP: PhpService) {
  }



  ngAfterViewInit() {
    //console.log('afterViewInit => ', this.tabGroup.selectedIndex);
  }
  ngOnInit() {

    //this.getInfoCharts("graphics.php")
  }



  getInfoCharts(a: string) {
    console.log(a)
    this.dataPHP.getItem(a).subscribe(datos => {
    
      if (datos.length == 0) {
        this.chartsReady = true;
        console.log('sin respuesta')
      } else {
        this.chartsReady = false
        console.log('cargados')
      };
      this.nameVar=[];
      this.totalVar=[];
      this.dataDB = datos.length > 0 ? Object.values(datos[0][1]) : [];
      this.dataDBn = datos.length > 0 ? Object.values(datos[0][0]) : [];
      datos.shift();
      this.dataDB.forEach((name, i) => {
        this.nameVar.push(datos[i].map(it => it[name]))
        this.totalVar.push(datos[i].map(it => it["Total"]))
      })

      console.log(this.nameVar);
      console.log(this.totalVar);
      
      
    })
  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {  
    if (tabChangeEvent.index == 0) {
      this.getInfoCharts("graphics.php")
    } else if (tabChangeEvent.index == 1) {
      this.getInfoCharts("graphicsc.php")
    } else if (tabChangeEvent.index == 2) {
      this.getInfoCharts("graphicscv.php")
    }
    console.log('index => ', tabChangeEvent.index);
  }



  useOrnot=(tabChangeEvent: MatTabChangeEvent, e:string, d:string)=> {
    this.changeChart = JSON.stringify({ "array": e, "name": d, "code": 14 })
    
    if (tabChangeEvent.index == 0) {
      console.log("entro")
      this.dataPHP.addItem(this.changeChart, "graphics.php").subscribe(
        res => {
          res;
          console.log(res);
  this.getInfoCharts("graphics.php")
        }
      )
      
    } else if (tabChangeEvent.index == 1) {
      this.dataPHP.addItem(this.changeChart, "graphicsc.php").subscribe(
        res => {
          res;
          console.log(res);
  this.getInfoCharts("graphicsc.php")
        }
      )
      
    } else if (tabChangeEvent.index == 2) {
      this.dataPHP.addItem(this.changeChart, "graphicscv.php").subscribe(
        res => {
          res;
          console.log(res);
        this.getInfoCharts("graphicscv.php")
        }
      )

    }


   
    console.log("Post Enviado:" + this.changeChart)
  }



  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e: any, d: any): void {
    // this.changeChart = JSON.stringify({ "array": e, "name": d, "code": 14 })
    // this.dataPHP.addItem(this.changeChart, "graphicsp.php").subscribe(
    //   res => {
    //     res;
    //     console.log(res)
    //     this.getInfoCharts("graphicsp.php")
    //   }
    // )
    // console.log(this.changeChart)
    // console.log(this.dataPHP.answerInfo)

  }

  public chartHovered(e: any): void {
    console.log(e);
  }





}


