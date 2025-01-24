import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductComponent } from "./product/product.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedTab: string = '';
  showhome: boolean = true;
  constructor(private router: Router) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        this.showhome = event.url === '/';
      }
    });

 
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
