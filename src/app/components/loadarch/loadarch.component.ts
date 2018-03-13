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
  fileShow="Seleccionar Archivo"



  varList = [
  ];
  constructor(private dataSend: PhpService, private utility: UtilityService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.dataSend.getItem("delete.php").subscribe(res => {
      this.varList=res[1]
      if(res[0]!==null){
          this.fileinServ=res.length > 0 ? Object.values(res[0]):[];
      }
   
      console.log(this.fileinServ)

console.log(this.varList)
    })

  }


  uploadFile(event) {
    let elem = event.target
    this.filetoSend=event.target
    this.fileShow=this.filetoSend.files[0].name
    console.log(this.filetoSend.files[0].name)
  }




  sendData() {
    console.log(this.filetoSend.files.length)
    if (this.filetoSend.files.length > 0) {
      console.log(this.filetoSend.files[0])
      let formData = new FormData();
      formData.append('file', this.filetoSend.files[0])
      console.log(formData)
      this.dataSend.loadFile(formData, "cargar.php").subscribe((res) => {
        console.log(res)
      }, 
      (error)=>{console.log(error)}
      )
    }
    this.ngOnInit()
  }

  pruebaEle(event) {
    console.log(event)
  }






}

export class file{
  Name;
  Id
}