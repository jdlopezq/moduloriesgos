import { Component, OnInit } from '@angular/core';
import { MatExpansionPanelTitle } from '@angular/material';
import { PhpService } from '../../services/php.service';
import { UtilityService } from '../../services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
UserRegister= new UserReg();

  constructor(private dataSend: PhpService, private utility:UtilityService, private router: Router) { }

  ngOnInit() {
    this.utility.isLogged().then((result:boolean)=>{
      if (!result) {
      this.router.navigate(['/home'])
    }});
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
