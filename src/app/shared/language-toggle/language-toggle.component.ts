import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-language-toggle',
  imports: [CommonModule],
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.scss',
})
export class LanguageToggleComponent {
  currentLanguage: string;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = localStorage.getItem('selectedLanguage') || 'de';
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.languageService.setLanguage(language);
  }
}
