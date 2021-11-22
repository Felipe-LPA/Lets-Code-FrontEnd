import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeiasParaPresenteComponent } from './ideias-para-presente.component';

describe('IdeiasParaPresenteComponent', () => {
  let component: IdeiasParaPresenteComponent;
  let fixture: ComponentFixture<IdeiasParaPresenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeiasParaPresenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeiasParaPresenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
