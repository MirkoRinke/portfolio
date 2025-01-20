import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imprint',
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  @Input() modalActive!: boolean;
}
