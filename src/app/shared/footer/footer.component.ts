import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';
import { Texts, textsDE, textsEN } from './language';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { returnIcon } from '../../shared/services/svg.icons.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
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
