import { Component } from '@angular/core';

import { SvgIconsService } from '../../shared/services/svg.icons.service';
import { LanguageService } from '../../shared/services/language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  constructor(
    public svgIconsService: SvgIconsService,
    public languageService: LanguageService
  ) {}
}
