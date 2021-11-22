import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentoAoClienteComponent } from './atendimento-ao-cliente/atendimento-ao-cliente.component';
import { BebesComponent } from './bebes/bebes.component';
import { ComputadoresComponent } from './computadores/computadores.component';
import { EletronicosComponent } from './eletronicos/eletronicos.component';
import { IdeiasParaPresenteComponent } from './ideias-para-presente/ideias-para-presente.component';
import { VendaNaAmazonComponent } from './venda-na-amazon/venda-na-amazon.component';

const routes: Routes = [
  { path: 'vendas-na-amazon', component: VendaNaAmazonComponent },
  { path: 'atendimento-ao-cliente', component: AtendimentoAoClienteComponent },
  { path: 'bebes', component: BebesComponent },
  { path: 'computadores', component: ComputadoresComponent },
  { path: 'ideias-para-presente', component: IdeiasParaPresenteComponent },
  { path: 'eletronicos', component: EletronicosComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerRouterRoutingModule { }
