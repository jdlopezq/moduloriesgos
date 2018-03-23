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
import { NgStyle } from '@angular/common';
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
  showPanel: boolean;
  tabsData = []
  columnsPerPage = [
    { value: 1, viewValue: 'Uno' },
    { value: 2, viewValue: 'Dos' },
    { value: 3, viewValue: 'Tres' }
  ];
  selectedCol: string
  chartType = [
    { value: 'bar', viewValue: "Barras Verticales" },
    { value: 'horizontalBar', viewValue: "Barras Horizontales" },
    { value: 'pie', viewValue: "Torta" },
    { value: 'doughnut', viewValue: "Dona" }

  ];
  selectedchart: string
  labelOption = [
    { value: 'Act', viewValue: "Activado" },
    { value: 'Des', viewValue: "Desactivado" },

  ];
  labelOpSelect: string
  legendData = []



  constructor(private dataPHP: PhpService, config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }

  ngOnInit() {

    this.getbuttons()
  }

  getbuttons() {
    let sessionData = JSON.stringify({ "id": sessionStorage.getItem('id'), "code": 7 })
    console.log(sessionData)
    this.dataPHP.addItem(sessionData, "graphics.php").subscribe(res => {
      this.tabsData = res
      console.log(this.tabsData)
    })
  }

  getInfoCharts(a: string) {
    let pageCode = JSON.stringify({ "m": a, "id": sessionStorage.getItem("id") })
    console.log(pageCode)
    this.dataPHP.addItem(pageCode, "graphics.php").subscribe(datos => {
      this.dataPure = datos
      console.log(this.dataPure[0][0])
      if (this.dataPure[0][0] == null) {
        this.showPanel = false
      } else {
        this.showPanel = true
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


  changelabel(e) {
    for (let index = 0; index < this.charts._results.length; index++) {
      switch (e.value) {
        case "Des":
          this.charts._results[index].options.plugins.outlabels.display = false
          this.charts._results[index].ngOnInit();
          break;
        case "Act":
          this.charts._results[index].options.plugins.outlabels.display = true
          this.charts._results[index].ngOnInit();
          break

        default:
          break;
      }
    }
  }

  changeGrap(e) {
    console.log(e.value)

    for (let index = 0; index < this.charts._results.length; index++) {

      switch (e.value) {
        case "pie":
          this.charts._results[index].chartType = e.value
          this.charts._results[index].options.cutoutPercentage = 0
          this.charts._results[index].options.plugins.datalabels.rotation = 0
          this.charts._results[index].ngOnInit();
          break;
        case 'horizontalBar':
          this.charts._results[index].chartType = e.value
          this.charts._results[index].options.plugins.datalabels.rotation = 0
          this.charts._results[index].ngOnInit();
          console.log(this.charts._results[index]);
          break;
        case "bar":
          this.charts._results[index].chartType = e.value
          this.charts._results[index].options.plugins.datalabels.rotation = 90
          this.charts._results[index].ngOnInit();
          console.log(this.charts._results[index]);
          break;
        case "doughnut":
          this.charts._results[index].options.plugins.datalabels.rotation = 0
          this.charts._results[index].options.cutoutPercentage = 70
          this.charts._results[index].chartType = e.value
          this.charts._results[index].ngOnInit();

          break;
      }

    }

  }


  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    if (tabChangeEvent.index == 0) {
      this.changeChartTab = tabChangeEvent.index
      this.dataDB = []
      this.controlPanName = []
      this.getInfoCharts("graphics.php")
    } else if (tabChangeEvent.index == 1) {
      this.changeChartTab = tabChangeEvent.index
      this.dataDB = []
      this.controlPanName = []
      this.getInfoCharts("graphicsc.php")
    } else if (tabChangeEvent.index == 2) {
      this.changeChartTab = tabChangeEvent.index
      this.dataDB = []
      this.controlPanName = []
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
      this.changeChart = JSON.stringify({
        "id": sessionStorage.getItem("id"), "m": i,
        "array": e, "name": d, "code": 15
      })
      console.log(this.changeChart)
    } else {
      this.changeChart = JSON.stringify({
        "id": sessionStorage.getItem("id"), "m": i,
        "array": e, "name": d, "code": 14
      })
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


            if (this.totalVar[index][i] == null) {

              this.nameVar[index].splice(i, 1)
              this.totalVar[index].splice(i, 1)
            }

          }
          this.legendData[index] = this.charts._results[index].chart.generateLegend();
          console.log(this.legendData[index])
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





  // Doughnut

  private getLegendCallback = (function (self) {
    function handle(chart) {
      // Do stuff here to return an object model.
      // Do not return a string of html or anything like that.
      // You can return the legendItems directly or
      // you can use the reference to self to create
      // an object that contains whatever values you
      // need to customize your legend.
      return chart.legend.legendItems;
    }
    return function (chart) {
      return handle(chart);
    }
  })(this);




  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];
  public doughnutChartType: string = 'pie';

  public options: any = {
    layout: {
      padding: 0,
    },
    plugins: {
      datalabels: {
        display: true,
        anchor: 'center',
        aling: 'start',
        formatter: function (value, context) {
          return '$' + Math.round(value)
        }
      },
      outlabels: {
        display: true,
        font: { resizable: true, minSize: 12, maxSize: 18 },
        borderRadius: 5, // Border radius of Label
        color: 'black', // Font color
        padding: 10,
        text: "%l " + "%p",
        textAlign: "center",
        backgroundColor: 'transparent',
        stretch: 30,
      }
    },
    cutoutPercentage: 70,
    // pieceLabel: {
    //   display:false,
    //   render: 'label',
    //   fontColor: '#000',
    //   arc: true,
    //   position: 'outside'
    // },
    legend: {
      display: true,
      position: "right",
      responsive: true,
      labels: {
        fontColor: 'black'
      },
    },
  }




}
export class tabInfo {
  idg: string
  Name: string
  icon: string
  color: string
}


// var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
// Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
//   draw: function() {
//     originalDoughnutDraw.apply(this, arguments);

//     var chart = this.chart.chart;
//     var ctx = chart.ctx;
//     var width = chart.width;
//     var height = chart.height;

//     var fontSize = (height / 300).toFixed(2);
//     ctx.font = fontSize + "em Verdana";
//     ctx.textBaseline = "middle";

//     var text = chart.config.data.text,
//         textX = Math.round((width - ctx.measureText(text).width) / 2),
//         textY = height / 2;

//     ctx.fillText(text, textX, textY);
//   }
// });