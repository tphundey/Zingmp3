import { Component,OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit{
    isDropdownOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!(event.target as HTMLElement).matches('.dropbtn')) {
      this.isDropdownOpen = false;
    }
  }
//
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
