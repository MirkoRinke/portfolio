import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';

import { WindowService } from '../../../shared/services/window.service';

import { TapService } from '../../../shared/services/tap.service';

import { LanguageService } from '../../../shared/services/language.service';

import { ModalService } from '../../../shared/services/modal.service';

import { WindowControlsComponent } from '../../../shared/window-controls/window-controls.component';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, WindowControlsComponent, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  providers: [WindowService],
})
export class ProjectsComponent {
  @Input() modalActive!: boolean;

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public tapService: TapService,
    public languageService: LanguageService,
    public modalService: ModalService
  ) {}
}
