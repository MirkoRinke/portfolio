import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../shared/services/language.service';
import { Texts, textsDE, textsEN } from './language';
import { projectsEN, projectsDE } from './projects.data';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { ProjectService } from './modal.service';
import { ScrollService } from '../../shared/services/scroll.service';
import { Project } from './projects.data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { returnIcon } from '../../shared/services/svg.icons.service';

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
  texts: Texts = textsDE;
  projects: Project[] = projectsDE;

  private languageSubscription: Subscription | undefined;
  private modalSubscription: Subscription | undefined;

  constructor(
    private languageService: LanguageService,
    private projectService: ProjectService,
    private scrollService: ScrollService,
    private sanitizer: DomSanitizer
  ) {}

  public returnIcon(type: string): SafeHtml {
    const iconHtml = returnIcon(type);
    return this.sanitizer.bypassSecurityTrustHtml(iconHtml);
  }

  onMouseOver(projectId: number): void {
    this.hoveredProjectId = projectId;
  }

  onMouseLeave(): void {
    this.hoveredProjectId = null;
  }

  openProjectModal(projectId: number): void {
    this.projectService.setCurrentProject(projectId - 1);
    this.projectService.setProjectModalOpen(true);
    this.scrollService.disableScroll();
  }

  closeModal(): void {
    this.projectService.setProjectModalOpen(false);
    this.scrollService.enableScroll();
  }

  ngOnInit(): void {
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

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }

  loadTexts(language: string): void {
    if (language === 'de') (this.texts = textsDE), (this.projects = projectsDE);
    else if (language === 'en')
      (this.texts = textsEN), (this.projects = projectsEN);
    else this.texts = textsEN;
  }
}
