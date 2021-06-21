import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyAnsweredComponent } from './already-answered.component';

describe('AlreadyAnsweredComponent', () => {
  let component: AlreadyAnsweredComponent;
  let fixture: ComponentFixture<AlreadyAnsweredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlreadyAnsweredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyAnsweredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
