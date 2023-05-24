import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumer-support',
  templateUrl: './consumer-support.component.html',
  styleUrls: ['./consumer-support.component.scss']
})
export class ConsumerSupportComponent implements OnInit {

  message!: string;
  title!:string;

  constructor() { }

  ngOnInit(): void {
  }

  

  sendMessage() {
    // Here, you can implement the logic to send the message to the supplier
    // For example, you can use an HTTP request to send the data to a backend server
    console.log('Sending message:',this.title, this.message);
    // Reset the form fields
    this.message = '';
    this.title = '';
  }

}
