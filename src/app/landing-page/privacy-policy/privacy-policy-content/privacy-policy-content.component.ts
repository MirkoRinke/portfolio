import { Component } from '@angular/core';

import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-privacy-policy-content',
  imports: [],
  templateUrl: './privacy-policy-content.component.html',
  styleUrl: './privacy-policy-content.component.scss',
})
export class PrivacyPolicyContentComponent {
  constructor(public languageService: LanguageService) {}
}
