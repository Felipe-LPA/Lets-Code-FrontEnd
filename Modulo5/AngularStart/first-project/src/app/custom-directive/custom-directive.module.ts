import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundoMaisRoxoDirective } from './fundo-mais-roxo.directive';



@NgModule({
  declarations: [
    FundoMaisRoxoDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FundoMaisRoxoDirective
  ]
})
export class CustomDirectiveModule { }
