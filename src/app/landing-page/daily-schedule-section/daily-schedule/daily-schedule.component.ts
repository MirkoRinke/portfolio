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

  GITHUB_USERNAME = environment.githubUserName;
  ACCESS_TOKEN = environment.githubAccessToken;

  query = `
      {
        user(login: "${this.GITHUB_USERNAME}") {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                  color
                }
              }
            }
          }
        }
      }
    `;

  weeks: any[][] = [];

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public languageService: LanguageService,
    public modalService: ModalService
  ) {}

  ngOnInit() {
    this.createCalendar();
  }

  async githubContributions() {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: this.query }),
    });
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
    console.log(data);

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
    for (let i = 0; i + 7 <= days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    return weeks;
  }
}
