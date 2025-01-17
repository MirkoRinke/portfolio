import { Component } from '@angular/core';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';
import { LanguageService } from '../../../shared/services/language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section-content',
  imports: [RouterModule],
  templateUrl: './hero-content.component.html',
  styleUrl: './hero-content.component.scss',
})
export class HeroContentComponent {
  constructor(
    public svgIconsService: SvgIconsService,
    public languageService: LanguageService
  ) {}
}
