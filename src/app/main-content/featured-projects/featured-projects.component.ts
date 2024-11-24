import { Component } from '@angular/core';

import { Subscription } from 'rxjs';
import { LanguageService } from '../../shared/services/language.service';
import { textsDE, textsEN } from './language';

import { projectsEN, projectsDE } from './projects.data';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
})
export class FeaturedProjectsComponent {
  hoveredProjectId: number | null = null;
  texts: any = {};
  projects: any = [];

  private languageSubscription: Subscription | undefined;

  constructor(private languageService: LanguageService) {}

  onMouseOver(projectId: number) {
    this.hoveredProjectId = projectId;
  }

  onMouseLeave() {
    this.hoveredProjectId = null;
  }

  ngOnInit() {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.loadTexts(this.languageService.getLanguage());
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  loadTexts(language: string) {
    if (language === 'de') (this.texts = textsDE), (this.projects = projectsDE);
    else if (language === 'en')
      (this.texts = textsEN), (this.projects = projectsEN);
    else this.texts = textsEN;
  }
}
