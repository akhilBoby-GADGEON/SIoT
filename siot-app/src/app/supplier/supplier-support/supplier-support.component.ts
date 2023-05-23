import { Component, OnInit } from '@angular/core';

interface Message {
  content: string;
  sender: string;
  replyVisible: boolean;
  replyInput: string;
  // replies?: Message[];
}

@Component({
  selector: 'app-supplier-support',
  templateUrl: './supplier-support.component.html',
  styleUrls: ['./supplier-support.component.scss']
})
export class SupplierSupportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  messages: Message[] = [
    {
      content: 'Hello, I have a question about my order.',
      sender: 'Justin',
      replyVisible: false,
      replyInput: ''
    },
    {
      content: 'Hello, I have a question about my order.',
      sender: 'John',
      replyVisible: false,
      replyInput: ''
    },
    {
      content: 'I want to inquire about the delivery date.',
      sender: 'Ryan',
      replyVisible: false,
      replyInput: ''
    },
    {
      content: 'I want to inquire about the delivery date.',
      sender: 'Vincent',
      replyVisible: false,
      replyInput: ''
    }
  ];

  toggleReplyOptions(message: Message) {
    message.replyVisible = !message.replyVisible;
  }

  submitReply(message: Message) {
    const replyContent = message.replyInput;
    
    console.log('Reply content:', replyContent);
  
    // const replyMessage: Message = {
    //   content: replyContent,
    //   sender: 'You',
    //   replyVisible: false,
    //   replyInput: ''
    // };
  
   
    // if (!message.replies) {
    //   message.replies = [];
    // }
    // message.replies.push(replyMessage);
  
    message.replyInput = '';
    
    message.replyVisible = false;
  }
  

}
