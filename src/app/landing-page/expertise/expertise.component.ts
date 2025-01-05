import { Component } from '@angular/core';

import { SvgIconsService } from '../../shared/services/svg.icons.service';

import { WindowService } from '../../shared/services/window.service';

@Component({
  selector: 'app-expertise',
  imports: [],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss',
  providers: [WindowService],
})
export class ExpertiseComponent {
  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService
  ) {}
}
