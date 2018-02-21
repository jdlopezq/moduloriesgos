import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PhpService } from '../../services/php.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-logscreen',
  templateUrl: './logscreen.component.html',
  styleUrls: ['./logscreen.component.css']
})


export class LogscreenComponent implements OnInit {
  login = new User

  constructor(public dataSend: PhpService, private router: Router) { }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Debe ingresar este campo' :
      this.email.hasError('email') ? 'Correo Invalido' :
        '';
  }
  ngOnInit() {
  }

  SendUser() {
    this.dataSend.addItem(JSON.stringify(this.login), "php/login.php").subscribe(
      (res) => {
        res;
        console.log(this.login);
        console.log(this.dataSend.respuestaInfo[1].info)
        console.log(this.dataSend.respuestaInfo[0].rol)
        if (this.dataSend.respuestaInfo[1].info == "Datos Correctos" &&
          this.dataSend.respuestaInfo[0].rol == "Administrador") {
          this.goAdmin()
        } else if (this.dataSend.respuestaInfo[1].info == "Datos Correctos" &&
          this.dataSend.respuestaInfo[0].rol == "Usuario") {
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
  user: any;
  password: any;
}