import { Component , OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  // productForm: FormGroup;
  product: any = {
    name: '',
    audio: '',
    image: '',
    author: ''
  };

  constructor(private http: HttpClient , private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.product = this.formBuilder.group({
      productName: ['', Validators.required],
      productAudio: [''],
      productImage: [''],
      productAuthor: ['']
    });
  }
  onSubmit() {
    if (this.product.invalid) {
      return;
    }
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