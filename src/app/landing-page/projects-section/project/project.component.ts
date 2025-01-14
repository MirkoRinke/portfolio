import { Component, Input } from '@angular/core';

import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input() index!: number;

  constructor(public languageService: LanguageService) {}
}
