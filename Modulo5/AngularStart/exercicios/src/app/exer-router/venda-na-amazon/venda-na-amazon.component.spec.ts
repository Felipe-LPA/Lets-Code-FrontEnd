import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaNaAmazonComponent } from './venda-na-amazon.component';

describe('VendaNaAmazonComponent', () => {
  let component: VendaNaAmazonComponent;
  let fixture: ComponentFixture<VendaNaAmazonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaNaAmazonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaNaAmazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
