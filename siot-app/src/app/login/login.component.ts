import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  userLoginData: any = { userName: "", password: "" };

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log("In Response");
    window.location.href = "layout/adminDashboard";
  }
}
