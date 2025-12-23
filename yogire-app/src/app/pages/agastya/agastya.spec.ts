import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgastyaComponent } from './agastya';

describe('Agastya', () => {
  let component: AgastyaComponent;
  let fixture: ComponentFixture<AgastyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgastyaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgastyaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
