import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { LanguageService } from '../../../shared/services/language.service';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';

import { CheckVisibilityService } from '../../../shared/services/check-visibility.service';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  providers: [CheckVisibilityService],
})
export class ProjectComponent implements AfterViewInit {
  @Input() index!: number;

  @ViewChild('projectWrapper', { static: false }) projectWrapper!: ElementRef;

  constructor(
    public languageService: LanguageService,
    public svgIconsService: SvgIconsService,
    public checkVisibilityService: CheckVisibilityService
  ) {}

  ngAfterViewInit() {
    this.checkVisibilityService.setElement(this.projectWrapper);
  }
}
