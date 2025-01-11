import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { Title, Meta } from '@angular/platform-browser';

import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio Mirko Rinke';
  description!: string;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {
    this.titleService.setTitle(this.title);
    this.updateDescription();
    this.languageService.selectedLanguage$.subscribe(() => {
      this.updateDescription();
    });
  }

  updateDescription() {
    this.description = this.languageService.texts.index.description;
    this.metaService.updateTag({
      name: 'description',
      content: this.description,
    });
  }
}
