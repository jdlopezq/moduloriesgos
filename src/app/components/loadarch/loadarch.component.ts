import { Component, OnInit } from '@angular/core';
import { PhpService } from '../../services/php.service';
import { UtilityService } from '../../services/utility.service';
import { Router } from '@angular/router';
import { FileItem } from '../../shared/file.model';

@Component({
  selector: 'app-loadarch',
  templateUrl: './loadarch.component.html',
  styleUrls: ['./loadarch.component.css']
})
export class LoadarchComponent implements OnInit {


overDrop:boolean=false;  
archivos: FileItem[]=[]
constructor(private dataSend: PhpService, private utility:UtilityService, private router: Router) { }

  ngOnInit() {
  }

  sendData(){

    console.log(this.archivos)
this.dataSend.loadFile(this.archivos, "cargar.php").subscribe(res=>{
  res;
  console.log(res)
})

  }

  pruebaEle(event){
console.log(event)
  }




  fileToUpload: File = null;
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}





}
