import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLayoutComponent } from './sales-layout.component';

describe('SalesLayoutComponent', () => {
  let component: SalesLayoutComponent;
  let fixture: ComponentFixture<SalesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
