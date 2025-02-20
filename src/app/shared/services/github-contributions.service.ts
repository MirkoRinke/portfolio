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

  setColor(colorHex: string): string {
    const currentColor = localStorage.getItem('currentColor');
    switch (currentColor) {
      case 'violett':
        return this.setColorViolett(colorHex);
      case 'blue':
        return this.setColorBlue(colorHex);
      default:
        return colorHex;
    }
  }

  setColorViolett(colorHex: string): string {
    switch (colorHex) {
      case '#9be9a8':
        return '#D5BFFA';
      case '#40c463':
        return '#AA78F5';
      case '#30a14e':
        return '#8040D1';
      case '#216e39':
        return '#5B1DAD';
      default:
        return colorHex;
    }
  }

  setColorBlue(colorHex: string): string {
    switch (colorHex) {
      case '#9be9a8':
        return '#A5C7F0';
      case '#40c463':
        return '#4A90E2';
      case '#30a14e':
        return '#2A6CB3';
      case '#216e39':
        return '#1A4A7A';
      default:
        return colorHex;
    }
  }

  // usedColors: string[] = [];

  // addUniqueColor(colorHex: string) {
  //   if (!this.usedColors.includes(colorHex)) {
  //     this.usedColors.push(colorHex);
  //   }
  //   console.log('Used Colors:', this.usedColors);
  // }

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
