import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerSavedComponent } from './answer-saved.component';

describe('AnswerSavedComponent', () => {
  let component: AnswerSavedComponent;
  let fixture: ComponentFixture<AnswerSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerSavedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
