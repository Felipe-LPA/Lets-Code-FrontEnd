import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDataBindingComponent } from './test-data-binding.component';


@NgModule({
  declarations: [
    TestDataBindingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TestDataBindingComponent]
})
export class TestDataBindingModule { }
