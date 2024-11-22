import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSideElementsComponent } from './hero-side-elements.component';

describe('HeroSideElementsComponent', () => {
  let component: HeroSideElementsComponent;
  let fixture: ComponentFixture<HeroSideElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSideElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSideElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
