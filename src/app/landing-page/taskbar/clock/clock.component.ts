import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { DateTimeService } from '../../../shared/services/date-time.service';

import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
})
export class ClockComponent implements OnInit {
  currentHours!: string;
  fullDateDE!: string;
  fullDateEN!: string;

  constructor(
    public dateTimeService: DateTimeService,
    public languageService: LanguageService,
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
