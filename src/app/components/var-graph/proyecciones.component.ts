import { Component, OnInit, ViewChild } from '@angular/core';
import { dataDemo } from '../../shared/data.model';
import { error, log } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort, MatFormField, MAT_DIALOG_DATA } from '@angular/material';
import { DataserviceService } from '../../services/dataservice.service';
import { PhpService } from '../../services/php.service';






@Component({
  selector: 'app-proyecciones',
  templateUrl: './proyecciones.component.html',
  styleUrls: ['./proyecciones.component.css']
})
export class ProyeccionesComponent implements OnInit {
  dataDemo: dataDemo[];
  dataDB = [];
  totalVar = [];
  nameVar = [];
  datalabel = new label();
  chartsCount: any;


  constructor(private dataService: DataserviceService, private dataPHP: PhpService) {
  }

  ngOnInit() {
    this.dataPHP.getItem("graphics.php").subscribe(datos => {
      this.dataDB = datos.length > 0 ? Object.values(datos[0]) : [];
      datos.shift();
      this.dataDB.forEach((name, i) => {
        this.nameVar.push(datos[i].map(it => it[name]))
        this.totalVar.push(datos[i].map(it => it["Total"]))
      })
      console.log(this.nameVar);
    

  

      // for (let i = 1; i <= this.dataDB.length; i++) {

      //   for (let j = 0; j < datos[i+1].length; j++) {

         // this.nameVar[j] = datos[i][j][this.dataDB[i - 1]];
          //this.totalVar[j] = datos[i][j]["Total"]

          //console.log(this.nameVar[j]);
          //console.log(this.totalVar[j]);
      //   }
      // }
    })

  }


  ngAfterViewInit() {


  }



  // Doughnut
  public doughnutChartLabels: string[] = ['Entre 18-23', 'Entre 24-30', "Entre 31-40", 'Entre 41-50', 'Entre 51-67'];
  public doughnutChartData: number[] = [20, 4, 5, 6, 9];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {

    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  // PolarArea
  public polarAreaChartLabels: string[] = ['NIT', 'Cedula'];
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


export class label {
  labels: string;
  name = []
}