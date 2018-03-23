import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PhpService } from '../../services/php.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-logscreen',
  templateUrl: './logscreen.component.html',
  styleUrls: ['./logscreen.component.css']
})


export class LogscreenComponent implements OnInit {
  login = new User();

  constructor(public dataSend: PhpService, private router: Router, private utility:UtilityService) { }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Debe ingresar este campo' :
      this.email.hasError('email') ? 'Correo Invalido' :
        '';
  }
  ngOnInit() {


   }

  SendUser() {
    this.dataSend.logIn(JSON.stringify(this.login), "login.php").subscribe(
      (res) => {
        res;
       // console.log(this.login);
       // console.log(this.dataSend.answerInfo.info)
      console.log(this.dataSend.logAnswer)
        if (this.dataSend.logAnswer.info == "Datos Correctos." &&
          this.dataSend.logAnswer.rol == "Administrador") {
            sessionStorage.setItem('user', this.login.username)
            sessionStorage.setItem('id', this.dataSend.logAnswer.id)
            console.log("logueado")
            this.goAdmin()
        } else if (this.dataSend.answerInfo[1].info == "Datos Correctos" &&
          this.dataSend.answerInfo[0].rol == "Usuario") {
            this.goUser();
        }

      });
  }
  goAdmin() {
    this.router.navigate(['/admin']);
  }

  goUser(){
   this.router.navigate(['/admin']);
  }




}
class User {
  username: string
  password: string
}