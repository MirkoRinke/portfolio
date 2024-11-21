import { Component } from '@angular/core';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
