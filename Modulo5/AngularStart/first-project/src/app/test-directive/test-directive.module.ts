import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingDirectiveComponent } from './testing-directive.component';
import { FundoRoxoDirective } from '../fundo-roxo.directive';
import { CustomDirectiveModule } from '../custom-directive/custom-directive.module';




@NgModule({
  declarations: [
    TestingDirectiveComponent,
  ],
  imports: [
    CommonModule,
    CustomDirectiveModule
  ],
  exports: [
    TestingDirectiveComponent
  ]
})
export class TestDirectiveModule { }
