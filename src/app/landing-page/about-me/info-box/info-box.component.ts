import { Component, Input } from '@angular/core';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';

import { WindowService } from '../../../shared/services/window.service';

@Component({
  selector: 'app-info-box',
  imports: [],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss',
  providers: [WindowService],
})
export class InfoBoxComponent {
  @Input() title!: string;
  @Input() textarea!: string;

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService
  ) {}
}
