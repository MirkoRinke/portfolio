import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SvgIconsService } from '../../shared/services/svg.icons.service';

import { WindowService } from '../../shared/services/window.service';

import { LanguageService } from '../../shared/services/language.service';

import { ModalService } from '../../shared/services/modal.service';

import { WindowControlsComponent } from '../../shared/window-controls/window-controls.component';
import { SnakeCanvasComponent } from './snake-canvas/snake-canvas.component';

@Component({
  selector: 'app-snake',
  imports: [CommonModule, WindowControlsComponent, SnakeCanvasComponent],
  templateUrl: './snake.component.html',
  styleUrl: './snake.component.scss',
  providers: [WindowService],
})
export class SnakeComponent {
  @Input() modalActive!: boolean;

  currentScore = 0;

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public languageService: LanguageService,
    public modalService: ModalService
  ) {}

  onScoreChange(newScore: number) {
    this.currentScore = newScore;
  }
}
