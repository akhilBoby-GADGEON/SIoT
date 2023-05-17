import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;
  userRegistrationData: any = {
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    isActive: true,
    address: "",
    phNumber: "",
    email: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  register() {
  }

}
