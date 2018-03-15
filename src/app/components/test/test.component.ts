import { Component, OnInit } from '@angular/core';
import { PhpService } from '../../services/php.service';
import { FormControl } from '@angular/forms';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  private chart: AmChart;

  Scolor = "primary"
  dataDB = [];
  dataDBn = [];
  totalVar = [];
  nameVar = [];
  chartsReady: boolean = true;
dataimpo=[];
chartNumber


  constructor(private AmCharts: AmChartsService, private dataPHP: PhpService, config: NgbCarouselConfig ) {
      // customize default values of carousels used by this component tree
      config.interval = 10000;
      config.wrap = false;
      config.keyboard = false;
  }



 
  ngOnInit() {
    this.getInfoCharts("graphics.php")
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
      // this.controlPanName.push(datos[i].map(it => it[name]))
    })

    //console.log(datos[0])
// console.log(this.nameVar)
// console.log(this.totalVar)


this.AmCharts.updateChart(this.chart, () => { 
  this.chart.titleField="CreditLine"
  this.chart.dataProvider = datos[0];
});
  
  })
}

data4=[{"status":"1","Total":"19421"},{"status":"3","Total":"10"},{"status":"4","Total":"6348"}]







  ngAfterViewInit() {
    
    console.log(this.chart)
    this.chart = this.AmCharts.makeChart(this.chartNumber,{
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
      "dataProvider": data,
      "valueField": 'Total',
      "titleField": 'status',
      "export": {
        "enabled": true
      }
    });
    
    // this.chart.addListener("init", handleInit);
    
    //  this.chart.addListener("rollOverSlice", function(e) {
    //    handleRollOver(e);
    //    console.log(e)
    //  });
    
    //  function handleInit(){
    //    this.chart.legend.addListener("rollOverItem", handleRollOver);
    //  }
    
    function handleRollOver(e){
      var wedge = e.dataItem.wedge.node;
      wedge.parentNode.appendChild(wedge);
      console.log(e)
    }
     
    console.log(this.chart)
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
 
}




let data2=this.dataimpo


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
}]

export class dataGraph{
  data:string
  label:string
}