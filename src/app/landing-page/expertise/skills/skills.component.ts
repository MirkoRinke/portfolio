import { Component } from '@angular/core';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';

import { TapService } from '../../../shared/services/tap.service';

import { type Skill, TECH_SKILLS, LEARNING_SKILLS } from './skills.data';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: Skill[] = TECH_SKILLS;
  learningSkills: Skill[] = LEARNING_SKILLS;

  constructor(
    public svgIconsService: SvgIconsService,
    public tapService: TapService
  ) {}
}
