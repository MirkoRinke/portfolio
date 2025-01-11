import { Component } from '@angular/core';
import { ExpertiseComponent } from './expertise/expertise.component';

@Component({
  selector: 'app-expertise-section',
  imports: [ExpertiseComponent],
  templateUrl: './expertise-section.component.html',
  styleUrl: './expertise-section.component.scss',
})
export class ExpertiseSectionComponent {}
