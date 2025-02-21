import { Component } from '@angular/core';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';
import { LanguageService } from '../../../shared/services/language.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-hero-section-content',
  imports: [RouterModule, HeaderComponent],
  templateUrl: './hero-content.component.html',
  styleUrl: './hero-content.component.scss',
})
export class HeroContentComponent {
  constructor(
    public svgIconsService: SvgIconsService,
    public languageService: LanguageService
  ) {}
}
