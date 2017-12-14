import { Component, OnInit } from '@angular/core';
import {MdDialog,MdDialogRef} from '@angular/material'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user = {remember:true};// Data in the component.html will be binded to user using 2 way data binding.
  constructor(public dialogRef: MdDialogRef<LoginComponent>) { }

  ngOnInit() {
  }
onSubmit() {
    console.log("User: ", this.user);
    this.dialogRef.close();
  }
}
