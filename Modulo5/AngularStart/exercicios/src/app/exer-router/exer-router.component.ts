import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exer-router',
  templateUrl: './exer-router.component.html',
  styleUrls: ['./exer-router.component.scss']
})

export class ExerRouterComponent implements OnInit {

  constructor(private router: Router,  ) {

   }
   pagesObj: PagesObj= {
    'vendas-na-amazon': 'Vendas na Amazon',
    'atendimento-ao-cliente': 'Atendimento ao Cliente',
    'bebes': 'Bebes',
    'computadores': 'Computadores',
    'eletronicos':'Eletronicos',
    'ideias-para-presente': 'Ideias para presente'
  }
  // pages = ['vendas-na-amazon', 'atendimento-ao-cliente', 'bebes', 'computadores', 'eletronicos', 'ideias-para-presente']
  // pagesViewName = ['Vendas na Amazon', 'Atendimento ao Cliente', 'Bebes', 'Computadores', 'Eletronicos', 'Ideias para presente']

  pages = Object.keys(this.pagesObj)

  gotoItems(page:string){
    // console.log(`/${page}`)
    // console.log(Object.keys(this.pagesObj))
  //  console.log(this.pagesObj[page])
    // const urlPage = `/${page}`
    this.router.navigate([`/${page}`])
  }

  ngOnInit(): void {
  }

}
type PagesObj = {
  [key: string]: string;
}
