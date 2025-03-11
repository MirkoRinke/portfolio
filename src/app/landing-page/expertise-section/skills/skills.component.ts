import { Component } from '@angular/core';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';

import {
  type Skill,
  FRONTEND_SKILLS,
  BACKEND_SKILLS,
  TOOL_SKILLS,
  UI_UX_SKILLS,
  LEARNING_SKILLS_FE,
  LEARNING_SKILLS_BE,
  LEARNING_SKILLS_UI_UX,
  LEARNING_TOOL_SKILLS,
} from './skills.data';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  frontendSkills: Skill[] = FRONTEND_SKILLS;
  backendSkills: Skill[] = BACKEND_SKILLS;
  toolSkills: Skill[] = TOOL_SKILLS;
  uiUxSkills: Skill[] = UI_UX_SKILLS;

  learningSkills!: Skill[];
  learningSkillsFE: Skill[] = LEARNING_SKILLS_FE;
  learningSkillsBE: Skill[] = LEARNING_SKILLS_BE;
  learningSkillsUI_UX: Skill[] = LEARNING_SKILLS_UI_UX;
  learningToolSkills: Skill[] = LEARNING_TOOL_SKILLS;

  constructor(public svgIconsService: SvgIconsService) {
    this.learningSkills = this.learningSkillsFE.concat(
      this.learningSkillsBE,
      this.learningSkillsUI_UX,
      this.learningToolSkills
    );
  }
}
