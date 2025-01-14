import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2Component } from './question2.component';

describe('Question2Component', () => {
  let component: Question2Component;
  let fixture: ComponentFixture<Question2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Question2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
