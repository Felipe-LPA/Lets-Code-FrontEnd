import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exer-diretiva',
  templateUrl: './exer-diretiva.component.html',
  styleUrls: ['./exer-diretiva.component.scss']
})
export class ExerDiretivaComponent implements OnInit {
  father: any = ''
  hobbies:string[] = []
  showingHobbies = false

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.father = this.fb.group({
      nome: ['', Validators.required],
      cidade: ['', Validators.required ]
    })
  }
  something(){
    console.log(this.father)
  }
  getHobbie(hobbie:any){
    this.hobbies.push(hobbie)
    console.log(this.hobbies)
  }
  showHobbies(show:boolean){
    this.showingHobbies = show
    if(!this.showingHobbies) this.hobbies = []
  }
}
