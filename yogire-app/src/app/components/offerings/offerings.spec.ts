import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingsComponent } from './offerings';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('Offerings', () => {
  let component: OfferingsComponent;
  let fixture: ComponentFixture<OfferingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferingsComponent],
      providers: [{ provide: ActivatedRoute, useValue: { params: of({}) } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferingsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
