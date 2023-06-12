import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productId: string = '';
  productName: string = '';
  productImage: string = '';
  productAuthor: string = '';
  productAudio: string = '';
  originalProduct: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.productId = paramMap.get('id')!;
      this.getProduct();
    });
  }

  getProduct() {
    const apiUrl = `http://localhost:8080/api/products/${this.productId}`;
    this.http.get(apiUrl).subscribe(
      (product: any) => {
        this.originalProduct = product;
        this.productName = product.name;
        this.productImage = product.image;
        this.productAuthor = product.author;
        this.productAudio = product.audio;
      },
      error => {
        console.log(error);
      }
    );
  }

  onHandleSubmit() {
    if (this.productName !== this.originalProduct.name) {
      const updatedProduct = {
        _id: this.productId,
        name: this.productName,
        image: this.productImage,
        author: this.productAuthor,
        audio: this.productAudio,
      };

      const apiUrl = `http://localhost:8080/api/products/${this.productId}`;
      this.http.put(apiUrl, updatedProduct).subscribe(
        response => {
          console.log(response);
          // Có thể thực hiện điều hướng đến trang danh sách sản phẩm sau khi cập nhật thành công
        },
        error => {
          console.log(error);
        }
      );
    } else {
      // Không có sự thay đổi, không cần gửi yêu cầu cập nhật
    }
  }
}