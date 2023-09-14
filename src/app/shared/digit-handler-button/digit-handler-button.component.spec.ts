import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitHandlerButtonComponent } from './digit-handler-button.component';

describe('DigitHandlerButtonComponent', () => {
  let component: DigitHandlerButtonComponent;
  let fixture: ComponentFixture<DigitHandlerButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitHandlerButtonComponent]
    });
    fixture = TestBed.createComponent(DigitHandlerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
