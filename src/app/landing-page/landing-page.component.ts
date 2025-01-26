import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { ExpertiseSectionComponent } from './expertise-section/expertise-section.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { GithubGraphSectionComponent } from './daily-schedule-section/daily-schedule-section.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeroSectionComponent,
    AboutMeSectionComponent,
    ExpertiseSectionComponent,
    ModalComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
    TaskbarComponent,
    GithubGraphSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
