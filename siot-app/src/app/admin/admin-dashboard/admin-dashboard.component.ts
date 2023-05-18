import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  displayedColumns = ['userId', 'name', 'email', 'disable', 'phNumber'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource(this.loadTokens());
  empty: boolean = true;
  interval: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  UserDetails = {
    userId: '',
    name: '',
    email: '',
    phNumber: ''
  }

  constructor() {}

  ngOnInit(): void {
    

  }

  createUser() {
    
  }

  disableUser(event: any) {
    let userId = event.target.attributes.id.value;
  }

  loadTokens() {
    return [
      {
        "userId": 1,
        "name": "Justin",
        "email": "justin@gmail.com",
        "phNumber":"1234456789",
      },
      {
        "userId": 2,
        "name": "Alex",
        "email": "alex@gamil.com",
        "phNumber":"1234567899",
      },
      {
        "userId": 3,
        "name": "Ryan",
        "email": "ryan@gmail.com",
        "phNumber":"1234566789",

      },
      {
        "userId": 4,
        "name": "John",
        "email": "john@gmail.com",
        "phNumber":"1234567889",

      },
      {
        "userId": 5,
        "name": "Vincent",
        "email": "vincent@gmail.com",
        "phNumber":"1123456789",
      },
    ];
  }
  
}
