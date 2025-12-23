import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogafestComponent } from './yogafest';

describe('Yogafest', () => {
  let component: YogafestComponent;
  let fixture: ComponentFixture<YogafestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YogafestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YogafestComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
