import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../shared/services/language.service';
import { projectsEN, projectsDE } from './../projects.data';
import { ProjectService } from '../modal.service';
import { ScrollService } from '../../../shared/services/scroll.service';
import { Project } from './../projects.data';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent {
  projects: Project[] = projectsDE;
  currentProject: number = 0;

  private languageSubscription: Subscription | undefined;
  private projectSubscription: Subscription | undefined;

  constructor(
    private languageService: LanguageService,
    private projectService: ProjectService,
    private scrollService: ScrollService
  ) {}

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  ngOnInit(): void {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.loadTexts(this.languageService.getLanguage());
    this.projectSubscription = this.projectService.currentProject$.subscribe(
      (projectId) => {
        this.currentProject = projectId;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
    if (this.projectSubscription) {
      this.projectSubscription.unsubscribe();
    }
  }

  loadTexts(language: string): void {
    if (language === 'de') this.projects = projectsDE;
    else if (language === 'en') this.projects = projectsEN;
  }

  closeModal(): void {
    this.projectService.setProjectModalOpen(false);
    this.scrollService.enableScroll();
  }

  nextProject(): void {
    if (this.currentProject < this.projects.length - 1) {
      this.projectService.setCurrentProject(this.currentProject + 1);
    } else {
      this.projectService.setCurrentProject(0);
    }
  }

  previousProject(): void {
    if (this.currentProject > 0) {
      this.projectService.setCurrentProject(this.currentProject - 1);
    } else {
      this.projectService.setCurrentProject(this.projects.length - 1);
    }
  }
}
