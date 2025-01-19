import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SvgIconsService } from '../../shared/services/svg.icons.service';
import { WindowService } from '../../shared/services/window.service';
import { LanguageService } from '../../shared/services/language.service';
import { ModalService } from '../../shared/services/modal.service';
import { UtilityService } from '../../shared/services/utility.service';

import { DateTimeService } from '../../shared/services/date-time.service';

@Component({
  selector: 'app-taskbar',
  imports: [CommonModule],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.scss',
})
export class TaskbarComponent {
  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public languageService: LanguageService,
    public modalService: ModalService,
    public dateTimeService: DateTimeService,
    public utilityService: UtilityService
  ) {}
}
