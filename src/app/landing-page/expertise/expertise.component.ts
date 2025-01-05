import { Component } from '@angular/core';

import { SvgIconsService } from '../../shared/services/svg.icons.service';

import { WindowService } from '../../shared/services/window.service';

import { type Skill, TECH_SKILLS, LEARNING_SKILLS } from './skills.data';

@Component({
  selector: 'app-expertise',
  imports: [],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss',
  providers: [WindowService],
})
export class ExpertiseComponent {
  skills: Skill[] = TECH_SKILLS;
  learningSkills: Skill[] = LEARNING_SKILLS;

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService
  ) {}
}
