import { Component } from '@angular/core';
import { HeroComponent } from './hero-section/hero.component';
import { AboutMeComponent } from './about-me-section/about-me.component';
import { ExpertiseSectionComponent } from './expertise-section/expertise-section.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeroComponent,
    AboutMeComponent,
    ExpertiseSectionComponent,
    ModalComponent,
    ProjectsSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
