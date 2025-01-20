import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-toggle',
  imports: [CommonModule],
  templateUrl: './color-toggle.component.html',
  styleUrl: './color-toggle.component.scss',
})
export class ColorToggleComponent {
  currentColor: string | null = null;

  ngOnInit() {
    this.currentColor = localStorage.getItem('currentColor');
    if (this.currentColor) {
      this.applyColor(this.currentColor);
    }
  }

  setColor(color: string) {
    if (color === 'default') {
      this.resetColor();
    } else {
      this.applyColor(color);
    }
  }

  resetColor() {
    if (this.currentColor) {
      document.body.classList.remove(this.currentColor);
      this.currentColor = null;
      localStorage.removeItem('currentColor');
    }
  }

  applyColor(color: string) {
    if (this.currentColor) {
      document.body.classList.remove(this.currentColor);
    }
    document.body.classList.add(color);
    this.currentColor = color;
    localStorage.setItem('currentColor', color);
  }
}
