import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { LanguageService } from '../../../../shared/services/language.service';

@Component({
  selector: 'app-portrait-content',
  imports: [CommonModule],
  templateUrl: './portrait-content.component.html',
  styleUrl: './portrait-content.component.scss',
})
export class PortraitContentComponent {
  @Input() modalActive!: boolean;

  constructor(public languageService: LanguageService) {}
}
