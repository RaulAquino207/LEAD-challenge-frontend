import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNpsComponent } from './form-nps.component';

describe('FormNpsComponent', () => {
  let component: FormNpsComponent;
  let fixture: ComponentFixture<FormNpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
