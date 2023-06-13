import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  products: Product[] = [];
  searchTerm: string = '';
  constructor(private http: HttpClient) {
    this.getProducts();
  }

  getProducts() {
    this.http.get<any>('http://localhost:8080/api/products').subscribe(
      data => {
        this.products = data.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteProduct(productId: string) {
    const apiUrl = `http://localhost:8080/api/products/${productId}`;
    this.http.delete(apiUrl).subscribe(
      response => {
        console.log(response);
        // Xóa sản phẩm khỏi mảng products sau khi xóa thành công
        this.products = this.products.filter(product => product._id !== productId);
      },
      error => {
        console.log(error);
      }
    );
  }
}