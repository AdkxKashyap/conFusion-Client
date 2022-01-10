import { Component, Inject, OnInit } from '@angular/core';
import {MdDialog,MdDialogRef} from '@angular/material';
import {LoginComponent} from '../login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MdDialog, @Inject('BaseURL') public BaseURL ) { }

  ngOnInit() {
    this.isloggedin = false;
    this.logo = "images/logo.png";
    this.username = localStorage.getItem("username");
    if(this.username != null) {
      this.isloggedin = true;
    }
  }
  username : any;
  isloggedin : boolean;
  logo : any;
  openLoginForm() {
    if(this.username != null) {
      //logout
      this.isloggedin = false;
      localStorage.removeItem("username");
      window.location.reload();
    } else {
      this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
    }
    
  }

}
