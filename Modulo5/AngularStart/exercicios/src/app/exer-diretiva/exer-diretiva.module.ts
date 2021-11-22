import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerDiretivaComponent } from './exer-diretiva.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HobbiesCardComponent } from './hobbies-card/hobbies-card.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExerDiretivaComponent,
    HobbiesComponent,
    HobbiesCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ExerDiretivaComponent
  ]
})
export class ExerDiretivaModule { }
