import { Component } from '@angular/core';

import { SvgIconsService } from '../../shared/services/svg.icons.service';
import { LanguageService } from '../../shared/services/language.service';
import { RouterModule } from '@angular/router';
import { HeroContentComponent } from './hero-content/hero-content.component';

@Component({
  selector: 'app-hero-section',
  imports: [RouterModule, HeroContentComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroComponent {
  constructor(
    public svgIconsService: SvgIconsService,
    public languageService: LanguageService
  ) {}
}
