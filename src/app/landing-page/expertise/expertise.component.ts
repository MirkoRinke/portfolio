import { Component } from '@angular/core';

import { SvgIconsService } from '../../shared/services/svg.icons.service';

import { WindowService } from '../../shared/services/window.service';

import { TapService } from '../../shared/services/tap.service';

import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-expertise',
  imports: [SkillsComponent],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss',
  providers: [WindowService, TapService],
})
export class ExpertiseComponent {
  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public tapService: TapService
  ) {}
}
