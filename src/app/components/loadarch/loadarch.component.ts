import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PhpService } from '../../services/php.service';
import { UtilityService } from '../../services/utility.service';
import { Router } from '@angular/router';
import { FileItem } from '../../shared/file.model';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-loadarch',
  templateUrl: './loadarch.component.html',
  styleUrls: ['./loadarch.component.css']
})
export class LoadarchComponent implements OnInit {
  form: FormGroup;
  filetoSend;
  fileinServ;
  fileShow = "Seleccionar Archivo"
  selectedValue: string;
  selecteCol: string;


  varList = [
  ];
  constructor(private dataSend: PhpService, private utility: UtilityService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
  
this.getinfoFiles()
  }

getinfoFiles(){
  this.dataSend.getItem("delete.php").subscribe(res => {
    this.varList = res[1]
    if (res[0] !== null) {
      this.fileinServ = res.length > 0 ? Object.values(res[0]) : [];
    }
    console.log(this.fileinServ)
    console.log(this.varList)
  })
}


  uploadFile(event) {
    let elem = event.target
    this.filetoSend = event.target
    this.fileShow = this.filetoSend.files[0].name
    console.log(this.filetoSend.files[0].name)
  }

  deleteFile(i) {
    let deletef = JSON.stringify({ "id": i, "code": 10 })
    this.dataSend.addItem(deletef, "delete.php").subscribe(res => {
      console.log(res);
if(res!==null){
 this.getinfoFiles()
}


      // (error)=>console.log(error)
    }
    )
   
  }



  sendData() {
    if (this.filetoSend.files.length > 0) {
      console.log(this.filetoSend.files[0])
      var formData = new FormData();

      formData.append('file', this.filetoSend.files[0])
      formData.append('colName', this.selectedValue)
      formData.append('col', this.selecteCol)
      formData.append('code', '7')

      this.dataSend.loadFile(formData, "cargar.php").subscribe((res) => {

        console.log(res)
      },
        (error) => { console.log(error) }
      )
    }

    this.ngOnInit()
  }

  pruebaEle(event) {
    console.log(event)
  }






}

export class file {
  Name;
  Id
}