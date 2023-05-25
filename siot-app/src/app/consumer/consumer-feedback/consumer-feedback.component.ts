import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumer-feedback',
  templateUrl: './consumer-feedback.component.html',
  styleUrls: ['./consumer-feedback.component.scss']
})
export class ConsumerFeedbackComponent implements OnInit {

  ratings: number[] = [1, 2, 3, 4, 5];
  selectedRating!: number;
  comment!: string;

  constructor() { }

  ngOnInit(): void {
  }
  
  selectRating(rating: number) {
    this.selectedRating = rating;
  }

  submitFeedback() {
    console.log('Rating:', this.selectedRating);
    console.log('Comment:', this.comment);

    this.selectedRating = 0;
    this.comment = '';
    
  }

}
