import { Component, OnInit } from '@angular/core';
import { Feedback } from './feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbacks: Feedback[] = [
    new Feedback('Hella', 4, 'I am a satisfied customer.'),
    new Feedback('Kelly', 4, 'This was a beautifully delivered product.'),
    new Feedback('Brad', 5, 'Lorem ipsor dolor mangni froda.')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
