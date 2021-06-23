import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeInComponent } from './fake-in.component';

describe('FakeInComponent', () => {
  let component: FakeInComponent;
  let fixture: ComponentFixture<FakeInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
