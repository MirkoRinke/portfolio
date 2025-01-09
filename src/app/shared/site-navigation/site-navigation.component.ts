import { Component } from '@angular/core';

import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-site-navigation',
  imports: [],
  templateUrl: './site-navigation.component.html',
  styleUrl: './site-navigation.component.scss',
})
export class SiteNavigationComponent {
  constructor(public languageService: LanguageService) {}
}
