import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwijasComponent } from './dwijas';

describe('Dwijas', () => {
  let component: DwijasComponent;
  let fixture: ComponentFixture<DwijasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwijasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwijasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
