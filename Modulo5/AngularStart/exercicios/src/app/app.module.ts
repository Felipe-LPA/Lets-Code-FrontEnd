import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurmaComponent } from './turma/turma.component';
import { CodersComponent } from './coders/coders.component';
import { ExerFormComponent } from './exer-form/exer-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExerDiretivaModule } from './exer-diretiva/exer-diretiva.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExerRouterModule } from './exer-router/exer-router.module';
import { DogModule } from './dog/dog.module';

@NgModule({
  declarations: [
    AppComponent,
    TurmaComponent,
    CodersComponent,
    ExerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ExerDiretivaModule,
    BrowserAnimationsModule,
    ExerRouterModule,
    DogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
