import { Component } from '@angular/core';

import { LanguageService } from '../../../../shared/services/language.service';

@Component({
  selector: 'app-portrait-content',
  imports: [],
  templateUrl: './portrait-content.component.html',
  styleUrl: './portrait-content.component.scss',
})
export class PortraitContentComponent {
  constructor(public languageService: LanguageService) {}
}
