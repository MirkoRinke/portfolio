import { Component } from '@angular/core';

import { LanguageService } from '../services/language.service';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-site-navigation',
  imports: [RouterModule],
  templateUrl: './site-navigation.component.html',
  styleUrl: './site-navigation.component.scss',
})
export class SiteNavigationComponent {
  constructor(public languageService: LanguageService) {}
}
