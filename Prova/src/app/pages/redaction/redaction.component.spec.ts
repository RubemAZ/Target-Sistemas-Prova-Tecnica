import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedactionComponent } from './redaction.component';

describe('RedactionComponent', () => {
  let component: RedactionComponent;
  let fixture: ComponentFixture<RedactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
