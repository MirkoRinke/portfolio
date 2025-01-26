import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-github-graph-section',
  imports: [],
  templateUrl: './github-graph-section.component.html',
  styleUrl: './github-graph-section.component.scss',
})
export class GithubGraphSectionComponent implements OnInit {
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

  ngOnInit() {
    this.renderCalendar();
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
    return data.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
      (week: any) => week.contributionDays
    );
  }

  sortDays(days: any[]) {
    return days.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  splitIntoWeeks(days: any[]) {
    const weeks = [];
    for (let i = 0; i + 7 <= days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    return weeks;
  }

  createDayElement(day: any) {
    const dayElement = document.createElement('div');
    dayElement.className = 'day';
    dayElement.style.backgroundColor =
      day.contributionCount === 0 ? 'transparent' : day.color;
    dayElement.title = `${day.date}: ${day.contributionCount} Beiträge`;
    return dayElement;
  }

  async renderCalendar() {
    const days = await this.githubContributions();
    const sortedDays = this.sortDays(days);
    const weeks = this.splitIntoWeeks(sortedDays);
    const calendar = document.getElementById('github-calendar');

    weeks.forEach((week: any[]) => {
      week.forEach((day) => {
        const dayElement = this.createDayElement(day);
        calendar?.appendChild(dayElement);
      });
    });
  }
}
