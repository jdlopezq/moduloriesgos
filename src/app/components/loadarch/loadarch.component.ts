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


overDrop:boolean=true;  
archivos: FileItem[]=[]
constructor(private dataSend: PhpService, private utility:UtilityService, private router: Router) { }

  ngOnInit() {
  }

  sendData(){
this.dataSend.loadFile(this.archivos)

  }



}
