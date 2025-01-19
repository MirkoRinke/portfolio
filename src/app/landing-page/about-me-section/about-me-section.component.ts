import { Component } from '@angular/core';
import { PortraitComponent } from './portrait/portrait.component';
import { InfoBoxComponent } from './info-box/info-box.component';

import { LanguageService } from '../../shared/services/language.service';
import { UtilityService } from '../../shared/services/utility.service';

@Component({
  selector: 'app-about-me-section',
  imports: [PortraitComponent, InfoBoxComponent],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss',
})
export class AboutMeSectionComponent {
  constructor(
    public languageService: LanguageService,
    public utilityService: UtilityService
  ) {}
}
