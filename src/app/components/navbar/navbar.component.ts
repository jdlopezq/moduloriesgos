import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { Routes, Router } from '@angular/router';
;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  islog:boolean;

  constructor(private utility:UtilityService, private router:Router) {
    if (sessionStorage.length!== null) {
      this.islog=true
    } else {
      this.islog=false
    }
   }

  ngOnInit() {
  }

logIn(){
  this.router.navigate(['/logscreen'])
  console.log("LogIN")
  console.log(this.utility.isLogged())
}
logOut(){
  sessionStorage.clear();
  this.router.navigate(['/home'])
  console.log("LogOut")
  console.log(this.islog)
  return this.islog
  
 
}


}
