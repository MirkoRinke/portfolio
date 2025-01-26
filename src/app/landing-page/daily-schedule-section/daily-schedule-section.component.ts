import { Component } from '@angular/core';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';

@Component({
  selector: 'app-daily-schedule-section',
  imports: [DailyScheduleComponent],
  templateUrl: './daily-schedule-section.component.html',
  styleUrl: './daily-schedule-section.component.scss',
})
export class GithubGraphSectionComponent {}
