import { Component, Input } from '@angular/core';

import { SvgIconsService } from '../../../../shared/services/svg.icons.service';

import { ModalService } from '../../../../shared/services/modal.service';

@Component({
  selector: 'app-certificate-modal',
  imports: [],
  templateUrl: './certificate-modal.component.html',
  styleUrl: './certificate-modal.component.scss',
})
export class CertificateModalComponent {
  @Input() modal!: any;
  @Input() index!: number;

  constructor(
    public svgIconsService: SvgIconsService,
    public modalService: ModalService
  ) {}
}
