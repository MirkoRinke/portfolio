import { Component } from '@angular/core';
import { GithubGraphComponent } from './github-graph/github-graph.component';

@Component({
  selector: 'app-github-graph-section',
  imports: [GithubGraphComponent],
  templateUrl: './github-graph-section.component.html',
  styleUrl: './github-graph-section.component.scss',
})
export class GithubGraphSectionComponent {}
