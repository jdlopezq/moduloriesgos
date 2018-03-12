import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { window } from 'rxjs/operators';
;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  islog:boolean;

  constructor(private utility:UtilityService, private router:Router) {
   

    console.log(this.islog)
   }
   

  ngOnInit() {
      //control de sesion
      this.utility.isLogged().then((result: boolean) => {
        if (result) {
          this.islog=true
          console.log("is log")
        } else {
          this.islog=false
          console.log("isnt log") }
      });
  }
logIn(){
  this.router.navigate(['/logscreen'])
  console.log(this.utility.isLogged())
  console.log(this.islog)
}
logOut(){
  sessionStorage.clear();
  this.router.navigate(['/home'])
  console.log("LogOut")
  console.log(this.islog)
  
  
 
}

reload(){

  window.reload();
 
}


}
