import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../shared/services/language.service';
import { Texts, textsDE, textsEN } from './language';
import { Skill, TECH_SKILLS, LEARNING_SKILLS } from './skills.data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { returnIcon } from '../../shared/services/svg.icons.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: Skill[] = TECH_SKILLS;
  learningSkills: Skill[] = LEARNING_SKILLS;

  texts: Texts = textsDE;
  private languageSubscription: Subscription | undefined;

  constructor(
    private languageService: LanguageService,
    private sanitizer: DomSanitizer
  ) {}

  public returnIcon(type: string): SafeHtml {
    const iconHtml = returnIcon(type);
    return this.sanitizer.bypassSecurityTrustHtml(iconHtml);
  }

  ngOnInit(): void {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.loadTexts(this.languageService.getLanguage());
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  loadTexts(language: string): void {
    if (language === 'de') this.texts = textsDE;
    else if (language === 'en') this.texts = textsEN;
    else this.texts = textsEN;
  }
}
