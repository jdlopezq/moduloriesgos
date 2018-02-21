import { Component, OnInit } from '@angular/core';
import { MatExpansionPanelTitle } from '@angular/material';
import { PhpService } from '../../services/php.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
UserRegister= new UserReg();

  constructor(private dataSend: PhpService) { }

  ngOnInit() {
  }

  resgUser() {
    console.log(this.UserRegister)
    this.dataSend.addItem(this.UserRegister,"/registro.php")
    .subscribe(res=>{res;
      console.log(res);
      this.UserRegister.email
    }
    )
  }

}

class UserReg {
  name: string
  username: string
  email: string
  rol: string
  rol2:string="Administrador"
  passwd: string
  confirmpasswd: string
  company: string="CRE"
}
