import { Component, OnInit, ChangeDetectorRef } from '@angular/core';



import { SvgIconsService } from '../../shared/services/svg.icons.service';
import { WindowService } from '../../shared/services/window.service';
import { LanguageService } from '../../shared/services/language.service';
import { ModalService } from '../../shared/services/modal.service';
import { DateTimeService } from '../../shared/services/date-time.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  currentYear!: number;

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public languageService: LanguageService,
    public modalService: ModalService,
    public dateTimeService: DateTimeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dateTimeService.currentYear$.subscribe((year) => {
      this.currentYear = year;
      this.cdr.detectChanges();
    });
  }
}
