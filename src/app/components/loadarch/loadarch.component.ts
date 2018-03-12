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
     
    }
    
  }


//   sendData(){

//     console.log(this.archivos)
// this.dataSend.loadFile(this.archivos, "cargar.php").subscribe(res=>{
//   res;
//   console.log(res)
// })

  // }

//   pruebaEle(event){
// console.log(event)
//   }


  // onFileChange(event) {
  //   let reader = new FileReader();
  //   if(event.target.files && event.target.files.length > 0) {
  //     let file = event.target.files[0];
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.form.get('avatar').setValue({
  //         filename: file.name,
  //         filetype: file.type,
  //         value: reader.result.split(',')[1]
  //       })
  //     };
  //   }
  // }


  

  // onSubmit() {
  //   const formModel = this.form.value;
  //   this.loading = true;
  //   // In a real-world app you'd have a http request / service call here like
  //   // this.http.post('apiUrl', formModel)

  //   this.dataSend.loadFile(formModel, "cargar.php").subscribe(res=>{
  //   console.log(res)
  //   })
  //   setTimeout(() => {
  //     console.log(formModel);
  //     alert('done!');
  //     this.loading = false;
  //   }, 1000);
  // }
  // createForm() {
  //   this.form = this.fb.group({
  //     name: ['', Validators.required],
  //     avatar: null
  //   });
  // }




  // uploadFileToActivity() {
  //   this.dataSend.postFile(this.fileToUpload).subscribe(data => {
  //     // do something, if upload success
  //     }, error => {
  //       console.log(error);
  //     });
  // }
  
//   handleFileInput(files: FileList) {
//     this.fileToUpload = files.item(0);
// }





}
