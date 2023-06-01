import { Component, Renderer2, ElementRef } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isPlaying = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleRotate() {
    this.isPlaying = !this.isPlaying;
  }

  moveDivUp() {
    const div1 = this.el.nativeElement.querySelector('.ca');
    this.renderer.setStyle(div1, 'transform', 'translateY(-62%)');
  }
  moveDivDown() {
    const div1 = this.el.nativeElement.querySelector('.ca');
    this.renderer.setStyle(div1, 'transform', 'translateY(160%)');
  }

  showAlert() {
    Swal.fire({
      title: 'Chức năng chưa được cập nhật',
      icon: 'error',
      timer: 3000,
      showConfirmButton: false,
    });
  }
}