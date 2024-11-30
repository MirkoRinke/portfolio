import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { returnIcon } from '../../shared/services/svg.icons.service';

@Component({
  selector: 'app-hero-side-elements',
  standalone: true,
  imports: [],
  templateUrl: './hero-side-elements.component.html',
  styleUrl: './hero-side-elements.component.scss',
})
export class HeroSideElementsComponent {
  constructor(private sanitizer: DomSanitizer) {}

  public returnIcon(type: string): SafeHtml {
    const iconHtml = returnIcon(type);
    return this.sanitizer.bypassSecurityTrustHtml(iconHtml);
  }
}
