import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNpsComponent } from './dashboard-nps.component';

describe('DashboardNpsComponent', () => {
  let component: DashboardNpsComponent;
  let fixture: ComponentFixture<DashboardNpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
