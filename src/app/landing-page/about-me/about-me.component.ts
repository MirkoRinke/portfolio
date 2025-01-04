import { Component } from '@angular/core';
import { PortraitComponent } from './portrait/portrait.component';

@Component({
  selector: 'app-about-me',
  imports: [PortraitComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {}
