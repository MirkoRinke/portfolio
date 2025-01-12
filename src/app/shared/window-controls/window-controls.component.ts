import { Component, Input } from '@angular/core';

import { WindowService } from '../services/window.service';
import { SvgIconsService } from '../services/svg.icons.service';
import { LanguageService } from '../services/language.service';
import { ModalService } from '../services/modal.service';
import { TapService } from '../services/tap.service';

@Component({
  selector: 'app-window-controls',
  imports: [],
  templateUrl: './window-controls.component.html',
  styleUrl: './window-controls.component.scss',
})
export class WindowControlsComponent {
  @Input() windowService!: WindowService;
  @Input() svgIconsService!: SvgIconsService;
  @Input() languageService!: LanguageService;
  @Input() modalService!: ModalService;
  @Input() tapService!: TapService;

  @Input() modal!: any;
  @Input() index!: number;
  @Input() activeModal!: string;

  @Input() activeTap!: string;

  openModal() {
    this.modalService.openModal(this.modal, this.index, this.activeModal);
    if (this.activeModal === 'expertise') {
      this.tapService.activateTap(this.activeTap);
    }
  }
}
