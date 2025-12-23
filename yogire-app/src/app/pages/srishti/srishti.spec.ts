import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrishtiComponent } from './srishti';

describe('Srishti', () => {
  let component: SrishtiComponent;
  let fixture: ComponentFixture<SrishtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SrishtiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrishtiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
