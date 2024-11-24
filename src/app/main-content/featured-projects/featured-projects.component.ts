import { Component } from '@angular/core';

import { Subscription } from 'rxjs';
import { LanguageService } from '../../shared/services/language.service';
import { textsDE, textsEN } from './language';

import { projectsEN, projectsDE } from './projects.data';
import { ProjectModalComponent } from './project-modal/project-modal.component';

import { ProjectService } from './modal.service';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [ProjectModalComponent],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
})
export class FeaturedProjectsComponent {
  hoveredProjectId: number | null = null;
  projectModalOpen: boolean = false;
  texts: any = {};
  projects: any = [];

  private languageSubscription: Subscription | undefined;
  private modalSubscription: Subscription | undefined;

  constructor(
    private languageService: LanguageService,
    private projectService: ProjectService
  ) {}

  onMouseOver(projectId: number) {
    this.hoveredProjectId = projectId;
  }

  onMouseLeave() {
    this.hoveredProjectId = null;
  }

  openProjectModal(projectId: number) {
    this.projectService.setCurrentProject(projectId - 1);
    this.projectService.setProjectModalOpen(true);
  }

  closeModal() {
    this.projectService.setProjectModalOpen(false);
  }

  ngOnInit() {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.loadTexts(this.languageService.getLanguage());
    this.modalSubscription = this.projectService.projectModalOpen$.subscribe(
      (isOpen) => {
        this.projectModalOpen = isOpen;
      }
    );
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }

  loadTexts(language: string) {
    if (language === 'de') (this.texts = textsDE), (this.projects = projectsDE);
    else if (language === 'en')
      (this.texts = textsEN), (this.projects = projectsEN);
    else this.texts = textsEN;
  }
}
