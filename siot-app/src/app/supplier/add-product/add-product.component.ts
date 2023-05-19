import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public selectedImage!: File;
  imageURL!: string;

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
    // You can perform additional validation or operations on the selected image here
  }

  constructor() { }

  ngOnInit(): void {
  }

  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
    
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(this.selectedImage);
    
  }

}
