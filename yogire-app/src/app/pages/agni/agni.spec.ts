import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgniComponent } from './agni';

describe('Agni', () => {
  let component: AgniComponent;
  let fixture: ComponentFixture<AgniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgniComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
