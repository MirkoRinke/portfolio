import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowControlsComponent } from '../../../shared/window-controls/window-controls.component';
import { WindowService } from '../../../shared/services/window.service';
import { SvgIconsService } from '../../../shared/services/svg.icons.service';
import { LanguageService } from '../../../shared/services/language.service';
import { ModalService } from '../../../shared/services/modal.service';

import { GithubContributionsService } from '../../../shared/services/github-contributions.service';

import { CheckVisibilityService } from '../../../shared/services/check-visibility.service';

@Component({
  selector: 'app-daily-schedule',
  imports: [CommonModule, WindowControlsComponent],
  templateUrl: './daily-schedule.component.html',
  styleUrl: './daily-schedule.component.scss',
  providers: [CheckVisibilityService],
})
export class DailyScheduleComponent implements OnInit, AfterViewInit {
  @Input() modalActive!: boolean;

  @ViewChild('githubWrapper', { static: false }) githubWrapper!: ElementRef;

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public languageService: LanguageService,
    public modalService: ModalService,
    public githubContributionsService: GithubContributionsService,
    public checkVisibilityService: CheckVisibilityService
  ) {}

  ngOnInit() {
    this.githubContributionsService.initCreateCalendar();
  }

  ngAfterViewInit() {
    this.checkVisibilityService.setElement(this.githubWrapper);
  }
}
