import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { LanguageService } from '../services/language.service';

import { UtilityService } from '../services/utility.service';

import { ModalService } from '../services/modal.service';

import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-site-navigation',
  imports: [RouterModule, CommonModule],
  templateUrl: './site-navigation.component.html',
  styleUrl: './site-navigation.component.scss',
})
export class SiteNavigationComponent {
  @Input() modalActive!: boolean;

  constructor(
    public languageService: LanguageService,
    public utilityService: UtilityService,
    private router: Router,
    public modalService: ModalService
  ) {}

  currentFragment() {
    return this.router.url.split('#')[1] || '';
  }
}
