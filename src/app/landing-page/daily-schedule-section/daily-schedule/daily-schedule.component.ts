import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowControlsComponent } from '../../../shared/window-controls/window-controls.component';
import { WindowService } from '../../../shared/services/window.service';
import { SvgIconsService } from '../../../shared/services/svg.icons.service';
import { LanguageService } from '../../../shared/services/language.service';
import { ModalService } from '../../../shared/services/modal.service';

import { GithubContributionsService } from '../../../shared/services/github-contributions.service';

@Component({
  selector: 'app-daily-schedule',
  imports: [CommonModule, WindowControlsComponent],
  templateUrl: './daily-schedule.component.html',
  styleUrl: './daily-schedule.component.scss',
})
export class DailyScheduleComponent implements OnInit {
  @Input() modalActive!: boolean;

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public languageService: LanguageService,
    public modalService: ModalService,
    public githubContributionsService: GithubContributionsService
  ) {}

  ngOnInit() {
    this.githubContributionsService.initCreateCalendar();
  }
}
