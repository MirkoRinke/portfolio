import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { LanguageService } from '../services/language.service';

import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-site-navigation',
  imports: [RouterModule, CommonModule],
  templateUrl: './site-navigation.component.html',
  styleUrl: './site-navigation.component.scss',
})
export class SiteNavigationComponent implements OnInit {
  currentFragment: string = '';

  constructor(public languageService: LanguageService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentFragment = this.router.url.split('#')[1] || '';
      }
    });
  }

  ngOnInit(): void {}
}
