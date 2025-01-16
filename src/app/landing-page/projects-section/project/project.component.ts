import { Component, Input } from '@angular/core';

import { LanguageService } from '../../../shared/services/language.service';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss', './project-image.component.scss'],
})
export class ProjectComponent {
  @Input() index!: number;

  constructor(
    public languageService: LanguageService,
    public svgIconsService: SvgIconsService
  ) {}
}
