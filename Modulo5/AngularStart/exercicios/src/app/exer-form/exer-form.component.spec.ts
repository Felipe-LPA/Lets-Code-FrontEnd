import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerFormComponent } from './exer-form.component';

describe('ExerFormComponent', () => {
  let component: ExerFormComponent;
  let fixture: ComponentFixture<ExerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
