import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product: any = {
    name: '',
    audio: '',
    image: '',
    author: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    const apiUrl = 'http://localhost:8080/api/products';
    this.http.post(apiUrl, this.product).subscribe(
      response => {
        console.log(response);
        // Reset form after successful submission
        this.product = {
          name: '',
          audio: '',
          image: '',
          author: ''
        };
      },
      error => {
        console.log(error);
      }
    );
  }
}