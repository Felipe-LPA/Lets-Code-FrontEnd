import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerRouterRoutingModule } from './exer-router-routing.module';
import { ExerRouterComponent } from './exer-router.component';
import { VendaNaAmazonComponent } from './venda-na-amazon/venda-na-amazon.component';
import { EletronicosComponent } from './eletronicos/eletronicos.component';
import { ComputadoresComponent } from './computadores/computadores.component';
import { AtendimentoAoClienteComponent } from './atendimento-ao-cliente/atendimento-ao-cliente.component';
import { IdeiasParaPresenteComponent } from './ideias-para-presente/ideias-para-presente.component';
import { BebesComponent } from './bebes/bebes.component';


@NgModule({
  declarations: [
    ExerRouterComponent,
    VendaNaAmazonComponent,
    EletronicosComponent,
    ComputadoresComponent,
    AtendimentoAoClienteComponent,
    IdeiasParaPresenteComponent,
    BebesComponent
  ],
  imports: [
    CommonModule,
    ExerRouterRoutingModule
  ],
  exports: [
    ExerRouterComponent
  ]
})
export class ExerRouterModule { }
