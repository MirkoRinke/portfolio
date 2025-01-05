import { Component } from '@angular/core';
import { PortraitComponent } from './portrait/portrait.component';
import { InfoBoxComponent } from './info-box/info-box.component';

import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-about-me',
  imports: [PortraitComponent, InfoBoxComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  constructor(public languageService: LanguageService) {}
}
