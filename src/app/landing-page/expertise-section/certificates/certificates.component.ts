import { Component } from '@angular/core';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';

import { type Certificate, CERTIFICATES } from './certificates.data';

import { ModalService } from '../../../shared/services/modal.service';

import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-certificates',
  imports: [],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
})
export class CertificatesComponent {
  certificates: Certificate[] = CERTIFICATES;

  constructor(
    public svgIconsService: SvgIconsService,
    public modalService: ModalService,
    public languageService: LanguageService
  ) {}
}
