import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  hide = true;
  error = "";
  subheading = "";
  heading = "";
  isSuccess:boolean = false;

  createUserData = {
    userId: '',
    name: '',
    email: '',
    phNumber: ''
  }

  

  checkVal(form: NgForm){
    console.log(form.value);
  }

  constructor(
    public dialog: MatDialog) { }


  ngOnInit(): void {
    // this.createUserData.userId=localStorage.getItem('userId')!,
    // this.createUserData.name=localStorage.getItem('userName')!
  }

  confirm() {
  //   if(this.data.error!=null){

  //     this.error=this.data.error;
  //     this.subheading=this.data.subheading;
  //     this.heading=this.data.heading;

  //     if(this.heading === "SUCCESS"){
  //       this.isSuccess = true;
  //     }else{
  //       this.isSuccess = false;
  //     }
  // }
  }

  createUser() {
  }

}
