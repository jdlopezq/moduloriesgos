import { Component, OnInit } from '@angular/core';
import { PhpService } from '../../services/php.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-selctgraf',
  templateUrl: './selctgraf.component.html',
  styleUrls: ['./selctgraf.component.css']
})


export class SelctgrafComponent implements OnInit {

  dataDB=[]
  totalVar = [];
  nameVar = [];
  toppings = new FormControl();
  dataDBn=[]

  constructor(private dataPHP: PhpService) { }
  displayedColumns = [];
  dataSource = [];
  
  ngOnInit() {
    this.dataPHP.getItem("graphics.php").subscribe(datos => {
      this.dataDB = datos.length > 0 ? Object.values(datos[0][1]) : [];
      this.dataDBn = datos.length > 0 ? Object.values(datos[0][0]) : [];
      this.displayedColumns=this.dataDB;
      datos.shift();
      this.dataDB.forEach((name, i) => {
        this.nameVar.push(datos[i].map(it => it[name]))
        this.totalVar.push(datos[i].map(it => it["Total"]))
      })
      this.dataSource=this.nameVar;
      console.log(this.nameVar);
    
    })

  }
 

  

  useOrnot(){
  console.log("activar o desactivar")
}


}

