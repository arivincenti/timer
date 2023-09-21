import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitHandlerComponent } from './digit-handler.component';

describe('DigitHandlerComponent', () => {
  let component: DigitHandlerComponent;
  let fixture: ComponentFixture<DigitHandlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitHandlerComponent]
    });
    fixture = TestBed.createComponent(DigitHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
