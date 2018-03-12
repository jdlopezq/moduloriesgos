import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { PhpService } from '../../services/php.service';
import { UtilityService } from '../../services/utility.service';
import { Router } from '@angular/router';
import { FileItem } from '../../shared/file.model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-loadarch',
  templateUrl: './loadarch.component.html',
  styleUrls: ['./loadarch.component.css']
})
export class LoadarchComponent implements OnInit {
  form: FormGroup;
  fileToUpload: File = null;
overDrop:boolean=false;  
archivos: FileItem[]=[]
loading: boolean = false;
constructor(private dataSend: PhpService, private utility:UtilityService, private router: Router, private fb: FormBuilder) { 
  // this.createForm();

}
// @ViewChild('fileInput') fileInput: ElementRef;
  ngOnInit() {
  }


  uploadFile(event){
    let elem = event.target
    if (elem.files.length>0) { 
      console.log(elem.files[0])
      let formData =new FormData();
      formData.append('file', elem.files[0])
      console.log(formData)
     this.dataSend.loadFile( formData, "cargar.php").subscribe(res=>{
    console.log(res)
     }
    )


    }
    
  }


  sendData(){

    console.log(this.archivos[0].file)
this.dataSend.loadFile(this.archivos[0].file, "cargar.php").subscribe(res=>{
  res;
  console.log(res)
})

  }

  pruebaEle(event){
console.log(event)
  }


  



}
