import { Component } from '@angular/core';

import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-imprint-content',
  imports: [],
  templateUrl: './imprint-content.component.html',
  styleUrl: './imprint-content.component.scss',
})
export class ImprintContentComponent {
  constructor(public languageService: LanguageService) {}
}
