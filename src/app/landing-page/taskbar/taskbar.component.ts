import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

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
  styleUrls: ['./taskbar.component.scss'],
})
export class TaskbarComponent implements OnInit {
  currentHours!: string;
  fullDateDE!: string;
  fullDateEN!: string;

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public languageService: LanguageService,
    public modalService: ModalService,
    public dateTimeService: DateTimeService,
    public utilityService: UtilityService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dateTimeService.currentHours$.subscribe((hours) => {
      this.currentHours = hours;
      this.cdr.detectChanges();
    });
    this.dateTimeService.fullDateDE$.subscribe((date) => {
      this.fullDateDE = date;
      this.cdr.detectChanges();
    });

    this.dateTimeService.fullDateEN$.subscribe((date) => {
      this.fullDateEN = date;
      this.cdr.detectChanges();
    });
  }
}
