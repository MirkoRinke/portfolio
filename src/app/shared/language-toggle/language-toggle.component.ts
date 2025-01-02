import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-toggle',
  imports: [CommonModule],
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.scss',
})
export class LanguageToggleComponent {
  currentLanguage = 'de';

  switchLanguage(selectedLanguage: string) {
    this.currentLanguage = selectedLanguage;
    console.log('Language switched to: ', selectedLanguage);
  }
}
