import { Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit, OnChanges, SimpleChanges, QueryList, ViewChildren } from '@angular/core';
import { dataDemo } from '../../shared/data.model';
import { error, log } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort, MatFormField, MAT_DIALOG_DATA, MatTabChangeEvent, MatSlideToggle, MatSlideToggleChange, } from '@angular/material';
import { DataserviceService } from '../../services/dataservice.service';
import { PhpService, dataInfo } from '../../services/php.service';
import { Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { empty } from 'rxjs/Observer';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import 'chart.piecelabel.js';
import 'chartjs-plugin-datalabels'
import 'chartjs-plugin-piechart-outlabels'


@Component({
  selector: 'app-proyecciones',
  templateUrl: './proyecciones.component.html',
  styleUrls: ['./proyecciones.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProyeccionesComponent implements OnInit {

  @ViewChildren(BaseChartDirective) charts: QueryList<BaseChartDirective>;
  Scolor = "primary"
  dataDB = [];
  dataDBn = [];
  totalVar = [];
  nameVar = [];
  controlPanName = []
  changeChart: any
  changeChartTab: number
  Activate: any
  Activate2: boolean;
  dynamicHeight = true;
  chartsReady: boolean = true;
  varChange: any;
dataPure;
showPanel:boolean;



  constructor(private dataPHP: PhpService,config: NgbCarouselConfig ) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
}

  ngOnInit() {

  }



  getInfoCharts(a: string) {
    console.log(a)
    this.dataPHP.getItem(a).subscribe(datos => {
      this.dataPure=datos
       console.log(this.dataPure[0][0])
if (this.dataPure[0][0]==null) {
  this.showPanel=false
}else{
  this.showPanel=true
}



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
        this.controlPanName.push(datos[i].map(it => it[name]))
      })

      this.doughnutChartData = this.totalVar
      this.doughnutChartLabels = this.nameVar
     // console.log(this.nameVar);
      //console.log(this.totalVar);
      console.log(this.charts)
    })


    
  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    if (tabChangeEvent.index == 0) {
      this.changeChartTab = tabChangeEvent.index
      this.dataDB=[]
      this.controlPanName=[]
      this.getInfoCharts("graphics.php")
    } else if (tabChangeEvent.index == 1) {
      this.changeChartTab = tabChangeEvent.index
      this.dataDB=[]
      this.controlPanName=[]
      this.getInfoCharts("graphicsc.php")
    } else if (tabChangeEvent.index == 2) {
      this.changeChartTab = tabChangeEvent.index
      this.dataDB=[]
      this.controlPanName=[]
      this.getInfoCharts("graphicscv.php")
    }
  }

  test(e) {
    console.log(e)
  }

  useAll(f, a, e, d) {
    this.Activate2 = f.checked;
    console.log(f);
    console.log(this.controlPanName)
    console.log(this.nameVar)
    if (f.checked) {
      this.Activate = JSON.stringify({ "array": e, "name": d, "code": 17 })
      console.log(this.Activate)
    } else {
      this.Activate = JSON.stringify({ "array": e, "name": d, "code": 16 })
      console.log(this.Activate)
    }
    this.dataPHP.graphRnew(this.Activate, a).subscribe(
      datos => {
        datos;
        console.log("Respuesta graficas: ")
        console.log(datos);
        this.dataDBn = datos.length > 0 ? Object.values(datos[0][0]) : [];
        this.dataDB = datos.length > 0 ? Object.values(datos[0][1]) : [];
        this.nameVar = [];
        this.totalVar = [];
        datos.shift();
        this.dataDB.forEach((name, i) => {
          this.nameVar.push(datos[i].map(it => it[name]))
          this.totalVar.push(datos[i].map(it => it["Total"]))
        })
        for (let index = 0; index < this.charts._results.length; index++) {
          this.charts._results[index].data = this.totalVar[index]
          this.charts._results[index].labels = this.nameVar[index]
          //this.charts._results[index].legend=false
          this.charts._results[index].ngOnInit();
          console.log(this.charts._results[index]);
        }
      })
  }


  clearFilter(a) {
    console.log(a)
    let deletfilter = JSON.stringify({ "code": 18 })
    this.dataPHP.addItem(deletfilter, a).subscribe(res => {
     this.getInfoCharts(a)
    })
  }

  downloadFile(a) {
    console.log("descargando")
    let pageDWL = JSON.stringify({ "code": a })
    this.dataPHP.downloadItem(pageDWL, "export.php").subscribe(blob => {
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = "datos.xls";
      link.click();
    })
  }



  useOrnot(f, a: string, e: string, d: string, i) {
    //console.log(this.controlPanName)
    //console.log(this.nameVar)
    this.varChange = this.totalVar
    // console.log(f.checked)
    if (f.checked) {
      this.changeChart = JSON.stringify({ "array": e, "name": d, "code": 15 })
      console.log(this.changeChart)
    } else {
      this.changeChart = JSON.stringify({ "array": e, "name": d, "code": 14 })
      console.log(this.changeChart)

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
          this.nameVar.push(datos[i].map(it => it[name]))
          this.totalVar.push(datos[i].map(it => it["Total"]))
        })

        
        for (let index = 0; index < this.charts._results.length; index++) {
          // console.log(this.totalVar)
          
          for (let i = 0; i < this.totalVar[index].length; i++) {

                 console.log(i)
            if (this.totalVar[index][i] == null) {
              this.nameVar[index].splice(i,1)
               this.totalVar[index].splice(i,1)
            }

          }

          this.charts._results[index].data = this.totalVar[index]
          this.charts._results[index].labels = this.nameVar[index]
          // this.charts._results[index] = this.nameVar[index]
          //this.charts._results[index].legend=false
          this.charts._results[index].ngOnInit();

        }
      })
      console.log(this.charts._results)
      console.log(this.nameVar)
  }



  graphRenew(){
    
  }

  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];
  public doughnutChartType: string = 'pie';
  public options: any = {
    
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    plugins:{
      datalabels:{
        display:true,
        anchor:'center',
        aling:'start',
      },

      outlabels: {
        display:true,
        font: { resizable: true, minSize: 12, maxSize: 18 },
        borderRadius: 5, // Border radius of Label
        color: 'white', // Font color
        padding:10, 
        text: "%p",
        textAlign: "center"
    }
    },
    cutoutPercentage:70,
    pieceLabel: {
      render: 'label'  ,
      fontColor: '#000',
      arc:true,
      position: 'outside'
    },
    legend: {
      display:true,
      position: "right",
      labels: {
        fontColor: 'black'
      },

    },
  }




}


