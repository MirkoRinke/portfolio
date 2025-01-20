import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-language-toggle',
  imports: [CommonModule],
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.scss',
})
export class LanguageToggleComponent {
  constructor(public languageService: LanguageService) {}

  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
  }
}
