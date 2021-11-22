import { ExerDiretivaModule } from './../../../exercicios/src/app/exer-diretiva/exer-diretiva.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDataBindingModule } from './test-data-binding/test-data-binding.module';
import { TestDirectiveModule } from './test-directive/test-directive.module';
import { TestFormModule } from './test-form/test-form.module';
import { FundoRoxoDirective } from './fundo-roxo.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    FundoRoxoDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestFormModule,
    TestDirectiveModule,
    TestDataBindingModule,
    ExerDiretivaModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
