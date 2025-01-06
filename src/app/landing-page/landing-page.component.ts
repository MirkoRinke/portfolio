import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeroComponent,
    AboutMeComponent,
    ExpertiseComponent,
    ModalComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
