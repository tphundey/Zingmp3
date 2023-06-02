import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  showAlert() {
    Swal.fire({
      title: 'Chức năng chưa được cập nhật',
      icon: 'error',
      timer: 3000,
      showConfirmButton: false,
    });
  }
}
