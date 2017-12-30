import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsLayoutComponent } from './reports-layout.component';

describe('ReportsLayoutComponent', () => {
  let component: ReportsLayoutComponent;
  let fixture: ComponentFixture<ReportsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
