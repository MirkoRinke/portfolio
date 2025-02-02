import { Injectable } from '@angular/core';

import { LanguageService } from '../../shared/services/language.service';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class GithubContributionsService {
  weeks: any[][] = [];

  constructor(public languageService: LanguageService) {}

  initCreateCalendar() {
    if (this.weeks.length === 0) {
      this.createCalendar();
    }
  }

  async createCalendar() {
    const rawData = await this.githubContributions();
    const contributionDays = this.extractContributionDays(rawData);
    const sortedDays = this.sortDays(contributionDays);
    this.weeks = this.groupDaysIntoWeeks(sortedDays);
  }

  async githubContributions() {
    const response = await fetch(
      environments.githubContributionsUrl + environments.githubUserName,
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
