import { Component } from '@angular/core';

import { Subscription } from 'rxjs';
import { LanguageService } from '../../../shared/services/language.service';
import { projectsEN, projectsDE } from './../projects.data';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent {
  projects: any = [];

  currentProject: number = 0;

  private languageSubscription: Subscription | undefined;

  constructor(private languageService: LanguageService) {}

  openLink(url: string) {
    window.open(url, '_blank');
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
    if (language === 'de') this.projects = projectsDE;
    else if (language === 'en') this.projects = projectsEN;
  }
}
