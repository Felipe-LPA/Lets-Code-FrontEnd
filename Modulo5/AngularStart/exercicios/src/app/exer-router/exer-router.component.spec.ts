import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerRouterComponent } from './exer-router.component';

describe('ExerRouterComponent', () => {
  let component: ExerRouterComponent;
  let fixture: ComponentFixture<ExerRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
