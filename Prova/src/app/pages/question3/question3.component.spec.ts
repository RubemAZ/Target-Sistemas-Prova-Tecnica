import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3Component } from './question3.component';

describe('Question3Component', () => {
  let component: Question3Component;
  let fixture: ComponentFixture<Question3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Question3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
