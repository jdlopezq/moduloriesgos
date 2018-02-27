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
   

    console.log(this.islog)
   }
   

  ngOnInit() {
  }

logIn(){
  this.router.navigate(['/logscreen'])
  this.islog=true;
  console.log(this.utility.isLogged())
}
logOut(){
  sessionStorage.clear();
  this.router.navigate(['/home'])
  this.islog=false
  console.log("LogOut")
  console.log(this.islog)
  
  
 
}


}
