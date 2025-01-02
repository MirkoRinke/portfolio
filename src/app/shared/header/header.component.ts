import { Component } from '@angular/core';
import { SiteNavigationComponent } from '../site-navigation/site-navigation.component';

@Component({
  selector: 'app-header',
  imports: [SiteNavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
