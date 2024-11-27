import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    FeaturedProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
