import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];
  rating: number = 0;
  title: string = '';
  selectedImages: SafeUrl[] = [];
  review: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
  }

  setRating(star: number) {
    this.rating = star;
  }

  handleImageUpload(event: any) {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const url = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
      this.selectedImages.push(url);
    }
  }

  submitReview() {
    // Here, you can implement the logic to submit the review data to your backend or perform any required actions.
    console.log('Rating:', this.rating);
    console.log('Title:', this.title);
    console.log('Selected Images:', this.selectedImages);
    console.log('Review:', this.review);
  }
}
