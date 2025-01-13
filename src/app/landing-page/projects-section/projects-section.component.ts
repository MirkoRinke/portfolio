import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-projects-section',
  imports: [ProjectsComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent {}
