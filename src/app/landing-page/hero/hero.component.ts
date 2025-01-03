import { Component } from '@angular/core';

import { SvgIconsService } from '../../shared/services/svg.icons.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  constructor(public svgIconsService: SvgIconsService) {}
}
