import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-directive',
  templateUrl: './testing-directive.component.html',
  styleUrls: ['./testing-directive.component.scss']
})
export class TestingDirectiveComponent implements OnInit {
  list:string[] = ['primeiro', 'segundo', 'terceiro']
  constructor() { }

  ngOnInit(): void {
  }
  tab = 'home'

  changetab(text:string){
    this.tab = text
  }
  show(){
    console.log(this.tab)

  }

}
