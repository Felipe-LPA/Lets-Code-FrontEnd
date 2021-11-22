import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentoAoClienteComponent } from './atendimento-ao-cliente.component';

describe('AtendimentoAoClienteComponent', () => {
  let component: AtendimentoAoClienteComponent;
  let fixture: ComponentFixture<AtendimentoAoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtendimentoAoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtendimentoAoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
