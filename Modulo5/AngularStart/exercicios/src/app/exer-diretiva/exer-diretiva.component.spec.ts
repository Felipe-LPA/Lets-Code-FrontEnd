import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerDiretivaComponent } from './exer-diretiva.component';

describe('ExerDiretivaComponent', () => {
  let component: ExerDiretivaComponent;
  let fixture: ComponentFixture<ExerDiretivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerDiretivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerDiretivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
