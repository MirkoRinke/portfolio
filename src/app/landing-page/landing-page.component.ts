import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExpertiseComponent } from './expertise/expertise.component';

@Component({
  selector: 'app-landing-page',
  imports: [HeroComponent, AboutMeComponent, ExpertiseComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
