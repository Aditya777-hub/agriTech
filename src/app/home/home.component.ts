import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  isDarkMode = true;
  pageLoaded = false;

  constructor() {}

  ngOnInit() {
    // Add dark mode class to HTML element on component init
    document.documentElement.classList.add('dark');
    
    // Small delay to ensure DOM is ready before starting the animation
    setTimeout(() => {
      this.pageLoaded = true;
    }, 100);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
