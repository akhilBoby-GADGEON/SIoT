import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  displayedColumns = ['productId', 'productName', 'amount', 'location', 'status'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource(this.loadTokens());
  empty: boolean = true;
  interval: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ProductDetails = {
    productId: '',
    productName: '',
    amount: '',
    location: '',
    status :''
  }

  constructor() {}

  ngOnInit(): void {
    

  }

  loadTokens() {
    return [
      {
        "productId": 1,
        "productName": "Fish",
        "amount":100,
        "location": "Mumbai",
        "status":"Delivered",
      },
      {
        "productId": 2,
        "productName": "Fish2",
        "amount":100,
        "location": "Mumbai",
        "status":"Delivered",
      },
      {
        "productId": 3,
        "productName": "Fish3",
        "amount":100,
        "location": "Mumbai",
        "status":"Delivered",
      },
      {
        "productId": 4,
        "productName": "Fish4",
        "amount":100,
        "location": "Mumbai",
        "status":"Delivered",
      },
      {
        "productId": 5,
        "productName": "Fish5",
        "amount":100,
        "location": "Mumbai",
        "status":"Delivered",
      },
    ];
  }

}
