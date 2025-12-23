import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('Footer', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [{ provide: ActivatedRoute, useValue: { params: of({}) } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
