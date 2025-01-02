import { Component } from '@angular/core';
import { SiteNavigationComponent } from '../site-navigation/site-navigation.component';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';
import { ColorToggleComponent } from '../color-toggle/color-toggle.component';

@Component({
  selector: 'app-header',
  imports: [
    SiteNavigationComponent,
    LanguageToggleComponent,
    ColorToggleComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
