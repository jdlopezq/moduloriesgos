import { Component, OnInit } from '@angular/core';
;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
   ;
   }

  ngOnInit() {

  }

logIn(){
  console.log("LogIN")
}
logOut(){
  console.log("LogOut")
 
}

}
