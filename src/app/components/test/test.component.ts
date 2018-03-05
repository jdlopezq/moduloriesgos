import { Component, OnInit } from '@angular/core';
import { PhpService } from '../../services/php.service';
import { FormControl } from '@angular/forms';
import {BaseChartDirective} from "ng2-charts"
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

import {Chart} from "chart.js"

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  private chart: AmChart;
  dataDB = [];
  dataDBn = [];
  totalVar = [];
  nameVar = [];
  changeChart: any
  dynamicHeight=[];

  chartsReady: boolean = true;
  constructor(private AmCharts: AmChartsService, private dataPHP: PhpService) {}

  ngOnInit() {
    this.getInfoCharts("graphics.php")
}

getInfoCharts(a:string) {
  console.log(a)
  this.dataPHP.getItem(a).subscribe(datos => {
    this.dynamicHeight=datos
console.log(JSON.stringify(this.dynamicHeight[1]))
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
    console.log(this.totalVar);


  })
}



  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart("chartdiv",{
      "type": "pie",
      "startDuration": 0,
       "theme": "light",
      "addClassNames": true,
      "legend":{
         "position":"right",
        "marginRight":100,
        "autoMargins":false
      },
      "innerRadius": "30%",
      "defs": {
        "filter": [{
          "id": "shadow",
          "width": "200%",
          "height": "200%",
          "feOffset": {
            "result": "offOut",
            "in": "SourceAlpha",
            "dx": 0,
            "dy": 0
          },
          "feGaussianBlur": {
            "result": "blurOut",
            "in": "offOut",
            "stdDeviation": 5
          },
          "feBlend": {
            "in": "SourceGraphic",
            "in2": "blurOut",
            "mode": "normal"
          }
        }]
      },
      "dataProvider":JSON.stringify(this.dynamicHeight[1]),
      "valueField": "Total",
      "titleField": "Type",
      "export": {
        "enabled": true
      }
    });
    
    this.chart.addListener("init", handleInit);
    
    this.chart.addListener("rollOverSlice", function(e) {
      handleRollOver(e);
      
    });
    
    function handleInit(){
      this.chart.legend.addListener("rollOverItem", handleRollOver);
      console.log("hola")
    }
    
    function handleRollOver(e){
      var wedge = e.dataItem.wedge.node;
      wedge.parentNode.appendChild(wedge);
    }
     
    
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }


 


  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 700];
  public doughnutChartType: string = 'doughnut';
  public chartLegend: boolean = true;
  


  newLegendClickHandler = function (e, legendItem) {
    var index = legendItem.datasetIndex
  }
  chartOptions = {
    responsive: true,
    tooltipTemplate: "<%= label %> - <%= value %>",
    animationDuration: 800,
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"],
    legend: {
      position: "right",
      labels: {
        boxWidth: 80,
        fontSize: 20,
        fontColor: 'black'
      },

      onClick: function(e, legendItem) {

        Chart.defaults.doughnut.legend.onClick.apply(this, arguments);
        console.log(legendItem)


      },
    
        
    }
  };


  // events


  sendData() {
   
    
  }

  clearTag() { 



  }
  public chartClicked(e: any): void {
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if (activePoints.length > 0) {
        // get the internal index of slice in pie chart
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];
        // get value by index
        const value = chart.data.datasets[0].data[clickedElementIndex];
        console.log(clickedElementIndex, label, value)
      }
    }

  }

  public chartHovered(e: any): void {

    //muestra el texto del vector legend
          if(e.active.length > 0){
            var points = [];
            var pointSelected = e.active[0]._chart.tooltip._model.caretY;
            var legends = e.active[0]._chart.legend.legendItems[0].text;

            for (var i = 0; i < e.active.length; ++i) {
              points.push(e.active[i]._model.y);
            }

            let position = points.indexOf(pointSelected);
            let label = legends[position]

            console.log("Point: "+legends)
          }
    console.log("Funciono")

  }




}

const data=[{
  "country": "Lithuania",
  "litres": 501.9
}, {
  "country": "Czech Republic",
  "litres": 301.9
}, {
  "country": "Ireland",
  "litres": 201.1
}, {
  "country": "Germany",
  "litres": 165.8
}, {
  "country": "Australia",
  "litres": 139.9
}, {
  "country": "Austria",
  "litres": 128.3
}, {
  "country": "UK",
  "litres": 99
}, {
  "country": "Belgium",
  "litres": 60
}, {
  "country": "The Netherlands",
  "litres": 50
},{
  "country": "Juan",
  "litres": 150
}]

const data2=[{"Type": "Campo Vacio", "Total": "41"},


{"Type": "CEDULA DE CIUDADANIA", "Total": "470"},


{"Type": "NIT", "Total": "1"}]