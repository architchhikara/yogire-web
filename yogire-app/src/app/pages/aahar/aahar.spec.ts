import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaharComponent } from './aahar';

describe('Aahar', () => {
  let component: AaharComponent;
  let fixture: ComponentFixture<AaharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AaharComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaharComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
