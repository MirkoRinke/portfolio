import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-color-toggle',
  imports: [CommonModule],
  templateUrl: './color-toggle.component.html',
  styleUrl: './color-toggle.component.scss',
})
export class ColorToggleComponent {
  currentColor: string | null = null;

  availableColors: string[] = ['blue', 'turquoise', 'violett'];

  defaultColor: string = 'blue';

  @Input() modalActive: boolean = false;

  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.currentColor = localStorage.getItem('currentColor');
    if (this.currentColor) {
      this.setColor(this.currentColor);
    } else {
      this.setColor(this.defaultColor);
    }
  }

  resetColor(color: string) {
    if (this.currentColor) {
      document.body.classList.remove(this.currentColor);
      this.currentColor = color;
      localStorage.removeItem('currentColor');
    }
  }

  setColor(color: string) {
    if (this.currentColor) {
      document.body.classList.remove(this.currentColor);
    }
    document.body.classList.add(color);
    this.currentColor = color;
    localStorage.setItem('currentColor', color);
  }
}
