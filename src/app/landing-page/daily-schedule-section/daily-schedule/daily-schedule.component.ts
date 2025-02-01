import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowControlsComponent } from '../../../shared/window-controls/window-controls.component';
import { WindowService } from '../../../shared/services/window.service';
import { SvgIconsService } from '../../../shared/services/svg.icons.service';
import { LanguageService } from '../../../shared/services/language.service';
import { ModalService } from '../../../shared/services/modal.service';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-daily-schedule',
  imports: [CommonModule, WindowControlsComponent],
  templateUrl: './daily-schedule.component.html',
  styleUrl: './daily-schedule.component.scss',
})
export class DailyScheduleComponent implements OnInit {
  @Input() modalActive!: boolean;

  weeks: any[][] = [];

  delayed: boolean = false;

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public languageService: LanguageService,
    public modalService: ModalService
  ) {}

  ngOnInit() {
    this.createCalendar();
    setTimeout(() => {
      this.delayed = true;
    }, 200);
  }

  async githubContributions() {
    const response = await fetch(
      environment.githubContributionsUrl + environment.githubUserName,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    return data;
  }

  async createCalendar() {
    const rawData = await this.githubContributions();
    const contributionDays = this.extractContributionDays(rawData);
    const sortedDays = this.sortDays(contributionDays);
    this.weeks = this.groupDaysIntoWeeks(sortedDays);
  }

  extractContributionDays(data: any) {
    return data.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
      (week: any) => week.contributionDays
    );
  }

  sortDays(days: any[]) {
    return days.sort(
      (currentDay, nextDay) =>
        new Date(currentDay.date).getTime() - new Date(nextDay.date).getTime()
    );
  }

  groupDaysIntoWeeks(days: any[]) {
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    return weeks;
  }

  convertDate(date: string) {
    if (this.languageService.getLanguage() === 'de') {
      return new Date(date).toLocaleDateString('de-DE', {
        month: 'short',
        day: 'numeric',
      });
    } else {
      return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
    }
  }
}
