import { Component } from '@angular/core';
import { SiteNavigationComponent } from '../site-navigation/site-navigation.component';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';
import { ColorToggleComponent } from '../color-toggle/color-toggle.component';

import { SvgIconsService } from '../services/svg.icons.service';
import { LanguageService } from '../services/language.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-header',
  imports: [
    SiteNavigationComponent,
    LanguageToggleComponent,
    ColorToggleComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    public svgIconsService: SvgIconsService,
    public languageService: LanguageService,
    public modalService: ModalService
  ) {}
}
