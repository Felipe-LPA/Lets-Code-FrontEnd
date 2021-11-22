import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDataBindingComponent } from './test-data-binding.component';

describe('TestDataBindingComponent', () => {
  let component: TestDataBindingComponent;
  let fixture: ComponentFixture<TestDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
