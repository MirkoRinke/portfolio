import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificate-modal',
  imports: [],
  templateUrl: './certificate-modal.component.html',
  styleUrl: './certificate-modal.component.scss',
})
export class CertificateModalComponent {
  @Input() modal!: any;
}
