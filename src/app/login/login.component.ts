import { Component, OnInit } from '@angular/core';
import {MdDialog,MdDialogRef} from '@angular/material'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user = {
  remember:true,
  username : "",
  password : "" 
};// Data in the component.html will be binded to user using 2 way data binding.
  constructor(public dialogRef: MdDialogRef<LoginComponent>, private router : Router) { }

  ngOnInit() {
  }
onSubmit() {
    if(this.user.remember == true) {
      localStorage.setItem('username' , this.user.username);
    }
   
    window.location.reload();
    console.log("User: ", this.user);
    this.dialogRef.close();
  }
}
