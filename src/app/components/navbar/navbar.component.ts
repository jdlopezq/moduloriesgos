import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService) {
    auth.handleAuthentication();
   }

  ngOnInit() {

  }

logIn(){
  console.log("LogIN")
  this.auth.login();
}
logOut(){
  this.auth.logout();
}

}
